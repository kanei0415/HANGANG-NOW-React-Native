import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Setting from '../Setting';
import ImageCropPicker, { Image } from 'react-native-image-crop-picker';
import useProfile from '@hooks/store/useProfile';
import {
  apiRoute,
  requestSecureGet,
  requestSecurePost,
  requestSecurePut,
} from '@libs/api';
import useAuth from '@hooks/store/useAuth';
import { alertMessage } from '@libs/alert';
import { InputResultTypes } from '@typedef/components/common/cinput.types';
import { check, REGEX, VALIDATION_FAILURE_MESSAGE } from '@libs/validation';
import { useNavigation } from '@react-navigation/native';
import { ProfileTypes } from '@typedef/components/common/common.types';
import { MainStackNavigationTypes } from '@typedef/routes/navigation.types';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TITLE = ['서비스 이용약관', '개인정보 처리방침', '위치 정보 이용약관'];

const CONTENT = [
  `제 1장 총칙

제 1조 (목적)

이 약관은 한강나우(이하 ‘회사’)가 제공하는 서비스를 회사와 이용계약을 체결한 ‘고객’이 이용함에 있어 필요한 회사와 고객의 권리 및 의무, 기타 제반 사항을 정함을 목적으로 합니다.

제 2조 (약관 외 준칙)

이 약관에 명시되지 않은 사항에 대해서는 위치 정보의 보호 및 이용 등에 관한 법률, 전기통신사업법, 정보통신망 이용 촉진 및 보호 등에 관한 법률 등 관계법령 및 회사가 정한 서비스의 세부이용지침 등의 규정에 따릅니다.

제 2장 서비스의 이용

제 1조 (가입자격)

① 서비스에 가입할 수 있는 자는 Application 이 설치가능한 모든 사람입니다.

제 2조 (서비스 가입)

① “Application 관리자”가 정한 본 약관에 고객이 동의하면 서비스 가입의 효력이 발생합니다.

②“Application 관리자”는 다음 각 호의 고객 가입신청에 대해서는 이를 승낙하지 아니할 수 있습니다.

1. 고객 등록 사항을 누락하거나 오기하여 신청하는 경우
2. 공공질서 또는 미풍양속을 저해하거나 저해할 목적으로 신청한 경우
3. 기타 회사가 정한 이용신청 요건이 충족되지 않았을 경우

제 3조 (서비스의 탈퇴)

서비스 탈퇴를 희망하는 고객은 “Application 담당자”가 정한 소정의 절차(설정메뉴의 탈퇴)를 통해 서비스 해지를 신청할 수 있습니다.

제 4조 (서비스의 수준)

① 서비스의 이용은 연중무휴 1일 24시간을 원칙으로 합니다. 단, 회사의 업무상이나 기술상의 이유로 서비스가 일시 중지될 수 있으며, 운영상의 목적으로 회사가 정한 기간에는 서비스가 일시 중지될 수 있습니다. 이러한 경우 회사는 사전 또는 사후에 이를 공지합니다.

② 위치정보는 관련 기술의 발전에 따라 오차가 발생할 수 있습니다.

제 5조 (서비스 이용의 제한 및 정지)

회사는 고객이 다음 각 호에 해당하는 경우 사전 통지 없이 고객의 서비스 이용을 제한 또는 정지하거나 직권 해지를 할 수 있습니다.

1. 타인의 서비스 이용을 방해하거나 타인의 개인정보를 도용한 경우
2. 서비스를 이용하여 법령, 공공질서, 미풍양속 등에 반하는 행위를 한 경우

제 6조 (서비스의 변경 및 중지)

① 회사는 다음 각 호의 1에 해당하는 경우 고객에게 서비스의 전부 또는 일부를 제한, 변경하거나 중지할 수 있습니다.

1. 서비스용 설비의 보수 등 공사로 인한 부득이한 경우
2. 정전, 제반 설비의 장애 또는 이용량의 폭주 등으로 정상적인 서비스 이용에 지장이 있는 경우
3. 서비스 제휴업체와의 계약 종료 등과 같은 회사의 제반 사정 또는 법률상의 장애 등으로 서비스를 유지할 수 없는 경우

4.기타 천재지변, 국가비상사태 등 불가항력적 사유가 있는 경우

② 제1항에 의한 서비스 중단의 경우에는 회사는 인터넷 등에 공지하거나 고객에게 통지합니다. 다만, 회사가 통제할 수 없는 사유로 인한 서비스의 중단 (운영자의 고의, 과실이 없는 디스크 장애, 시스템 다운 등)으로 인하여 사전 통지가 불가능한 경우에는 사후에 통지합니다.

제 3장 기타

제 1조 (회사의 연락처)

회사의 상호 다음과 같습니다.

1. 상호: “한강나우 - 한강에서 찾는 나와 우리”
2. 이메일: hangang_now@naver.com

제 2조 (손해배상)

① 고객의 고의나 과실에 의해 이 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하게 되는 경우, 이 약관을 위반한 고객은 회사에 발생하는 모든 손해를 배상하여야 합니다.

② 고객이 서비스를 이용함에 있어 행한 불법행위나 고객의 고의나 과실에 의해 이 약관 위반행위로 인하여 회사가 당해 고객 이외의 제3자로부터 손해배상청구 또는 소송을 비롯한 각종 이의제기를 받는 경우 당해 고객은 그로 인하여 회사에 발생한 손해를 배상하여야 합니다.

③ 회사가 위치정보의 보호 및 이용 등에 관한 법률 제 15조 내지 제26조의 규정을 위반한 행위 혹은 회사가 제공하는 서비스로 인하여 고객에게 손해가 발생한 경우, 회사가 고의 또는 과실 없음을 입증하지 아니하면, 고객의 손해에 대하여 책임을 부담합니다.

제 3조 (면책사항)

① 회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없는 경우에는 서비스 제공에 관한 책임이 면제됩니다.

② 회사는 고객의 귀책사유로 인한 서비스의 이용장애에 대하여 책임을 지지 않습니다.

③ 회사는 고객이 서비스를 이용하여 기대하는 수익을 상실한 것에 대하여 책임을 지지 않으며, 그 밖에 서비스를 통하여 얻은 자료로 인한 손해 등에 대하여도 책임을 지지 않습니다.

④ 회사에서 제공하는 서비스 및 서비스를 이용하여 얻은 정보에 대한 최종판단은 고객이 직접 하여야 하고, 그에 따른 책임은 전적으로 고객 자신에게 있으며, 회사는 그로 인하여 발생하는 손해에 대해서 책임을 부담하지 않습니다.

⑤ 회사의 업무상 또는 기술상의 장애로 인하여 서비스를 개시하지 못하는 경우 회사는 인터넷 홈페이지 등에 이를 공지하거나 E-mail 등의 방법으로 고객에게 통지합니다. 단, 회사가 통제할 수 없는 사유로 인하여 사전 공지가 불가능한 경우에는 사후에 공지합니다.

제 4조 (분쟁의 해결 및 관할법원)

① 서비스 이용과 관련하여 회사와 고객 사이에 분쟁이 발생한 경우, 회사와 고객은 분쟁의 해결을 위해 성실히 협의합니다.

② 제1항의 협의에서도 분쟁이 해결되지 않을 경우 양 당사자는 정보통신망 이용촉진 및 정보보호 등에 관한 법률 제33조의 규정에 의한 개인정보분쟁조정위원회에 분쟁조정을 신청할 수 있습니다.`,
  `**1장 개인정보의 수집·이용 목적, 수집하는 개인정보의 항목 및 수집방법**

제 1조 (개인정보 수집 및 이용목적)

'한강나우'는 수집한 개인정보를 다음의 목적을 위해 활용합니다.

- 회원가입, 서비스이용
- 회원가입을 한 사용자는 맞춤형 실시간 한강정보 서비스 등의 기능을 이용할 수 있습니다.

제 2조 (개인정보 수집 항목)

'한강나우'는 회원가입, 서비스 신청을 위해 아래와 같은 개인정보를 수집하고 있습니다.

- 수집항목: 이름, 생년월일, 전화번호, 이메일, 아이디, 비밀번호
- 개인정보 수집방법: 앱 설치시 회원가입 메뉴를 통해서 가입

**2장 개인정보의 제 3자 제공에 관한 사항**

제 1조(제공범위)

한강나우는 고객님의 개인정보를 ‘개인정보의 수집 및 활용 목적, 수집하는 개인정보 항목’에서 고지한 범위 내에서 활용하며, 동 범위를 초과하여 이용하거나 타인 또는 타 기업, 기관에 제공하지 않습니다.

**3장 개인정보의 보유 및 이용 기간, 개인정보의 파기절차 및 파기방법**

제 1조 (개인정보 보유 및 이용기간)

고객의 개인정보는 회원탈퇴 등 수집 및 이용목적이 달성되거나 동의철회 요청이 있는 경우 지체없이 파기됩니다.

제 2조 (개인정보 파기절차 및 파기방법)

'한강나우'는 개인정보 수집 및 이용목적이 달성된 후에는 예외 없이 해당 정보를 파기합니다.

파기절차 및 파기방법은 다음과 같습니다.

- 개인정보의 보유 및 이용 기간, 개인정보의 파기절차 및 파기방법
- 파기절차

회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간 참조) 일정 기간 저장된 후 파기되어집니다.

별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는 보유되어지는 이외의 다른 목적으로 이용되지 않습니다.

- 파기방법

종이에 출력된 개인정보는 분쇄기로 분쇄 또는 소각하여 파기합니다.

전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.

**3장 이용자 및 법정대리인의 권리와 그 행사방법**

제 1조(정정 및 철회)

개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체없이 변경된 개인정보에 대하여 정정및 철회의 조치를 하겠습니다.

귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는 정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지 않습니다. 또한 잘못된 개인정보를 제3자에게 이미 제공한 경우에는 정정 처리결과를 제3자에게 지체없이 통지하여 정정이 이루어지도록 하겠습니다.

‘한강나우’는 이용자 혹은 법정 대리인의 요청에 의해 해지 또는 삭제된 개인정보는 ‘한강나우’가 수집하는 개인정보의 보유 및 이용기간”에 명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수 없도록 처리하고 있습니다.

**4장 개인정보 보호책임자 또는 담당자의 이름 및 연락처**

1조 (개인정보 보호책임자)

고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다. 개인정보와 관련하여 민원이나 문의가 있으시면, 연락주시기 바랍니다. 성심성의껏 응대하겠습니다.

- 개인정보 책임자: 유나희
- 담당부서: 기획운영팀
- 이메일: hangang_now@naver.com

회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해 신속하게 충분한 답변을 드릴 것입니다.

기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는 아래 기관에 문의하시기 바랍니다.

1.개인분쟁조정위원회 (www.1336.or.kr/1336)

2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)

3.대검찰청 인터넷범죄수사센터 (http://icic.sppo.go.kr/02-3480-3600)

4.경찰청 사이버테러대응센터(www.ctrc.go.kr/)`,
  `제 1 조 (목적)

이 약관은 한강나우 (이하 “회사”)가 제공하는 위치기반서비스와 관련하여 회사와 개인위치정보주체와의 권리, 의무 및 책임사항, 기타 필요한 사항을 규정함을 목적으로 합니다.

제 2 조 (약관 외 준칙)

이 약관에 명시되지 않은 사항은 위치정보의 보호 및 이용 등에 관한 법률, 개인정보보호법, 정보통신망 이용촉진 및 정보보호 등에 관한 법률, 전기통신기본법, 전기통신사업법 등 관계법령과 회사의 이용약관 및 개인정보처리방침, 회사가 별도로 정한 지침 등에 의합니다.

제 3 조 (서비스 내용 및 요금)

①회사는 위치정보사업자로부터 위치정보를 전달받아 아래와 같은 위치기반서비스를 제공합니다.

1.위치정보를 활용한 검색결과 및 콘텐츠 제공 : 정보 검색을 요청하거나 개인위치정보주체 또는 이동성 있는 기기의 위치정보를 제공 시 본 위치정보를 이용한 검색결과, 주변결과(주변업체, 편의시설 등), 번역결과를 제시합니다.

2.이용자 위치를 활용한 광고정보 제공: 검색결과 또는 기타 서비스 이용 과정에서 개인위치정보주체 또는 이동성 있는 기기의 위치를 이용하여 광고소재를 제시합니다.

3.이용자 보호 및 부정 이용 방지: 개인위치정보주체 또는 이동성 있는 기기의 위치를 이용하여 권한없는 자의 비정상적인 서비스 이용 시도 등을 차단합니다.

4.길 안내 등 편의 서비스 제공: 주차정보와 길 안내 등 최적의 경로를 지도로 제공하며, 주변 시설물 찾기, 뉴스/날씨 등 다양한 편의 정보 서비스를 제공합니다.

②제1항 위치기반서비스의 이용요금은 무료입니다.

제 4 조 (개인위치정보주체의 권리)

①개인위치정보주체는 개인위치정보 수집 범위 및 이용약관의 내용 중 일부 또는 개인위치정보의 이용ㆍ제공 목적, 제공받는 자의 범위 및 위치기반서비스의 일부에 대하여 동의를 유보할 수 있습니다.

②개인위치정보주체는 개인위치정보의 수집ㆍ이용ㆍ제공에 대한 동의의 전부 또는 일부를 철회할 수 있습니다.

③개인위치정보주체는 언제든지 개인위치정보의 수집ㆍ이용ㆍ제공의 일시적인 중지를 요구할 수 있습니다.

이 경우 회사는 요구를 거절하지 아니하며, 이를 위한 기술적 수단을 갖추고 있습니다

④개인위치정보주체는 회사에 대하여 아래 자료의 열람 또는 고지를 요구할 수 있고, 당해 자료에 오류가 있는 경우에는 그 정정을 요구할 수 있습니다.

이 경우 회사는 정당한 이유 없이 요구를 거절하지 아니합니다.

1.개인위치정보주체에 대한 위치정보 수집ㆍ이용ㆍ제공사실 확인자료

2.개인위치정보주체의 개인위치정보가 위치정보의 보호 및 이용 등에 관한 법률 또는 다른 법령의 규정에 의하여 제3자에게 제공된 이유 및 내용

⑤회사는 개인위치정보주체가 동의의 전부 또는 일부를 철회한 경우에는 지체 없이 수집된 개인위치정보 및 위치정보 수집ㆍ이용ㆍ제공사실 확인자료를 파기합니다.

단, 동의의 일부를 철회하는 경우에는 철회하는 부분의 개인위치정보 및 위치정보 수집ㆍ이용ㆍ제공사실 확인자료에 한합니다.

⑥개인위치정보주체는 제1항 내지 제4항의 권리행사를 위하여 이 약관 제13조의 연락처를 이용하여 회사에 요구할 수 있습니다.

제 6 조 (위치정보 이용ㆍ제공사실 확인자료 보유근거 및 보유기간)

회사는 위치정보의 보호 및 이용 등에 관한 법률 제16조 제2항에 근거하여 개인위치정보주체에 대한 위치정보 수집ㆍ이용ㆍ제공사실 확인자료를 위치정보시스템에

자동으로 기록하며, 6개월 이상 보관합니다.

제 7 조 (서비스의 변경 및 중지)

①회사는 위치기반서비스사업자의 정책변경 등과 같이 회사의 제반 사정 또는 법률상의 장애 등으로 서비스를 유지할 수 없는 경우, 서비스의 전부 또는 일부를 제한, 변경하거나 중지할 수 있습니다.

②제1항에 의한 서비스 중단의 경우에는 회사는 사전에 인터넷 등에 공지하거나 개인위치정보주체에게 통지합니다.

제 8 조 (개인위치정보 제3자 제공 시 즉시 통보)

①회사는 개인위치정보주체의 동의 없이 당해 개인위치정보주체의 개인위치정보를 제3자에게 제공하지 아니하며, 제3자 제공 서비스를 제공하는 경우에는 제공받는 자 및 제공목적을 사전에 개인위치정보주체에게 고지하고 동의를 받습니다.

②회사는 개인위치정보를 개인위치정보주체가 지정하는 제3자에게 제공하는 경우에는 개인위치정보를 수집한 당해 통신단말장치로 매회 개인위치정보주체에게 제공받는 자, 제공일시 및 제공목적을 즉시 통보합니다.

③다만, 아래에 해당하는 경우에는 개인위치정보주체가 미리 특정하여 지정한 통신단말장치 또는 전자우편주소 등으로 통보합니다.

1.개인위치정보를 수집한 당해 통신단말장치가 문자, 음성 또는 영상의 수신기능을 갖추지 아니한 경우

2.개인위치정보주체가 개인위치정보를 수집한 당해 통신단말장치 외의 통신단말장치 또는 전자우편주소 등으로 통보할 것을 미리 요청한 경우

제 9조 (개인위치정보의 보유목적 및 이용기간)

①회사는 위치기반서비스를 제공하기 위해 필요한 최소한의 기간 동안 개인위치정보를 보유 및 이용합니다.

②회사는 대부분의 위치기반서비스에서 개인위치정보를 일회성 또는 임시로 이용 후 지체없이 파기합니다.

제 10 조 (손해배상)

개인위치정보주체는 회사의 위치정보의 보호 및 이용 등에 관한 법률 제15조 내지 26조의 규정을 위반한 행위로 손해를 입은 경우에 회사에 대하여 손해배상을 청구할 수 있습니다. 이 경우 회사는 고의 또는 과실이 없음을 입증하지 아니하면 책임을 면할 수 없습니다.

제 11 조 (분쟁의 조정)

①회사는 위치정보와 관련된 분쟁에 대하여 개인위치정보주체와 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 방송통신위원회에 재정을 신청할 수 있습니다.

②회사 또는 개인위치정보주체는 위치정보와 관련된 분쟁에 대해 당사자 간 협의가 이루어지지 아니하거나 협의를 할 수 없는 경우에는 개인정보보호법에 따라 개인정보분쟁조정위원회에 조정을 신청할 수 있습니다.

제 12 조 (사업자 정보 및 위치정보 관리책임자)

①회사의 상호 및 연락처는 다음과 같습니다.

상호: “한강나우 - 한강에서 찾는 나와 우리”

이메일: [hangang_now@naver.com](mailto:hangang_now@naver.com)

②회사는 다음과 같이 위치정보 관리책임자를 지정하여 이용자들이 서비스 이용과정에서 발생한 민원사항 처리를 비롯하여 개인위치정보주체의 권리 보호를 위해 힘쓰고 있습니다.

위치정보 관리책임자 : 유나희 (기획운영팀)

문의하기:메일([hangang_now@naver.com](mailto:hangang_now@naver.com))`,
];

const SettingContainer = () => {
  const navigation = useNavigation<MainStackNavigationTypes>();

  const { loginResponse } = useAuth();

  const { profile, __updateProfileFromHooks } = useProfile();

  const [selectedImage, setSelectedImage] = useState<Image | null>(null);

  const [password, setPassword] = useState<string | null>(null);
  const [passwordInputError, setPasswordInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordInputSuccess, setPasswordInputSuccess] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirm, setPasswordConfirm] = useState<string | null>(null);
  const [passwordConfirmInputError, setPasswordConfirmInputError] =
    useState<InputResultTypes | null>(null);
  const [passwordConfirmInputSuccess, setPasswordConfirmInputSuccess] =
    useState<InputResultTypes | null>(null);

  const passwordValid = useMemo(
    () =>
      password !== null && password !== '' && check(password, REGEX.password),
    [password],
  );

  const passwordMatched = useMemo(
    () => password === passwordConfirm,
    [password, passwordConfirm],
  );

  const activePasswordChangeBtn = useMemo(() => {
    return password !== null && passwordValid && passwordMatched;
  }, [password, passwordValid, passwordMatched]);

  const onProfileImageSelectPressed = useCallback(async () => {
    if (!loginResponse) {
      return;
    }

    const image = await ImageCropPicker.openPicker({
      width: 300,
      height: 300,
      maxFiles: 1,
      mediaType: 'photo',
      cropping: true,
    });

    if (image) {
      const formData = new FormData();

      formData.append('multipartData', {
        ...image,
        uri: image.path,
        mime: 'image/jpeg',
        type: 'image/jpeg',
        name: `${new Date().getTime()}.jpeg`,
      });

      const { config, data } = await requestSecurePut<{ result: string }>(
        apiRoute.member.updateProfil,
        { 'Content-Type': 'multipart/form-data' },
        formData,
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);

        setSelectedImage(image);
      } else {
        alertMessage('프로필 사진 변경에 실패 했습니다');
      }
    }
  }, [loginResponse, __updateProfileFromHooks]);

  const onMarketingPressed = useCallback(
    async (checked: boolean) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.member.updateMarketing + `?flag=${checked}`,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);
      }
    },
    [loginResponse, __updateProfileFromHooks],
  );

  const onTermPressed = useCallback(
    (term: 0 | 1 | 2) => {
      navigation.navigate('term', {
        title: TITLE[term],
        content: CONTENT[term],
      });
    },
    [navigation],
  );

  const onAlarmPressed = useCallback(
    async (checked: boolean) => {
      if (!loginResponse) {
        return;
      }

      const { config } = await requestSecurePost(
        apiRoute.member.updateAlarm + `?flag=${checked}`,
        {},
        {},
        loginResponse.accessToken,
      );

      if (config.status === 200) {
        const { data } = await requestSecureGet<ProfileTypes>(
          apiRoute.member.loadProfile,
          {},
          loginResponse.accessToken,
        );

        __updateProfileFromHooks(data);
      }
    },
    [loginResponse, __updateProfileFromHooks],
  );

  const onPasswordChangePressed = useCallback(async () => {
    if (!loginResponse || !profile) {
      return;
    }

    const { config } = await requestSecurePut(
      apiRoute.member.updatePassword,
      {},
      {
        email: profile.email,
        password1: password,
        password2: password,
      },
      loginResponse.accessToken,
    );

    if (config.status === 200) {
      alertMessage('비밀번호가 변경되었습니다');
      navigation.goBack();
    } else if (config.status === 400) {
      alertMessage('기존 비밀번호와 일치합니다');
      navigation.goBack();
    } else {
      alertMessage('비밀번호 변경에 실패 했습니다');
    }
  }, [loginResponse, navigation]);

  const onDeleteAccountPressed = useCallback(() => {
    navigation.push('deleteAccount');
  }, [navigation]);

  const onLogoutPressed = useCallback(() => {
    AsyncStorage.clear();
    navigation.reset({
      routes: [{ name: 'login' }],
    });
  }, [navigation]);

  useEffect(() => {
    setPasswordInputError(null);
    setPasswordInputSuccess(null);

    if (password) {
      if (passwordValid) {
        setPasswordInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordInputError({
          on: true,
          msg: VALIDATION_FAILURE_MESSAGE,
        });
      }
    }
  }, [passwordValid, password]);

  useEffect(() => {
    setPasswordConfirmInputError(null);
    setPasswordConfirmInputSuccess(null);

    if (passwordConfirm) {
      if (passwordMatched) {
        setPasswordConfirmInputSuccess({
          on: true,
          msg: '',
        });
      } else {
        setPasswordConfirmInputError({
          on: true,
          msg: '비밀번호가 일치하지 않습니다',
        });
      }
    }
  }, [passwordMatched, passwordConfirm]);

  return profile ? (
    <Setting
      profileImage={selectedImage || profile.photoUrl}
      name={profile.name}
      email={profile.email}
      marketing={profile.marketing_agree}
      alarm={profile.alarm_agree}
      onProfileImageSelectPressed={onProfileImageSelectPressed}
      onMarketingPressed={onMarketingPressed}
      onAlarmPressed={onAlarmPressed}
      setPassword={setPassword}
      passwordInputError={passwordInputError}
      passwordInputSuccess={passwordInputSuccess}
      setPasswordConfirm={setPasswordConfirm}
      passwordConfirmInputError={passwordConfirmInputError}
      passwordConfirmInputSuccess={passwordConfirmInputSuccess}
      activePasswordChangeBtn={activePasswordChangeBtn}
      onPasswordChangePressed={onPasswordChangePressed}
      onDeleteAccountPressed={onDeleteAccountPressed}
      onLogoutPressed={onLogoutPressed}
      onTermPressed={onTermPressed}
    />
  ) : null;
};
export default SettingContainer;
