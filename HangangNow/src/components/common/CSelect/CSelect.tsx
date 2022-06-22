import colors from '@assets/colors';
import NotoSans from '@assets/font';
import React from 'react';
import {
  Image,
  Text,
  TouchableWithoutFeedback,
  View,
  LayoutRectangle,
} from 'react-native';
import Modal from 'react-native-modal';
import images from '@assets/images';
import CCheckContainer from '@components/common/CCheck/containers/CCheckContainer';

type Props<T> = {
  onSelectInputClicked: () => void;
  selected: T | null;
  options: T[];
  labelSelector: (item: T) => string;
  placeholder: string;
  optionVisible: boolean;
  onSelected: (item: T) => void;
  onBackDropPressed: () => void;
  position: LayoutRectangle;
};

function CSelect<T>({
  onSelectInputClicked,
  selected,
  options,
  labelSelector,
  placeholder,
  optionVisible,
  onSelected,
  onBackDropPressed,
  position,
}: Props<T>) {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onSelectInputClicked}>
        <View
          style={{
            height: 48,
            paddingHorizontal: 12,
            flexDirection: 'row',
            borderWidth: 1,
            borderRadius: 4,
            borderColor: colors.line.light,
            justifyContent: 'space-between',
            alignItems: 'center',
            backgroundColor: colors.background.light,
          }}>
          <Text
            style={[
              NotoSans.Medium,
              NotoSans.Size[15],
              {
                color: selected ? colors.font.black : colors.font.disabled,
              },
            ]}>
            {selected ? labelSelector(selected) : placeholder}
          </Text>
          <Image
            style={{
              width: 16,
              height: 8,
            }}
            source={
              optionVisible
                ? images.components.common.CSelect.underArrow
                : images.components.common.CSelect.leftArrow
            }
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal
        onBackdropPress={onBackDropPressed}
        backdropColor={'#00000000'}
        style={{
          margin: 0,
          // padding: 0,
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}
        animationInTiming={1}
        animationOutTiming={1}
        isVisible={optionVisible}>
        <View
          style={{
            // top: 0,
            backgroundColor: '#FFFFFF',
            // maxHeight: 500,
            left: position.x,
            right: position.width,
            top: position.y + 48,
            borderWidth: 1,
            borderColor: colors.line.light,
            flex: 1,
          }}>
          {options.map((item, idx) => (
            <View
              style={{
                paddingLeft: 16,
                paddingVertical: 13,
              }}>
              <CCheckContainer
                key={idx}
                label={labelSelector(item)}
                onPressed={() => onSelected(item)}
                checked={item === selected}
              />
            </View>
          ))}
        </View>
      </Modal>
    </View>
  );
}

export default CSelect;
