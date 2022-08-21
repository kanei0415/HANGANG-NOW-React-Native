package com.hangangnow.custom;

import android.content.Intent;
import android.net.Uri;

import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.kakao.sdk.common.util.KakaoCustomTabsClient
import com.kakao.sdk.navi.Constants
import com.kakao.sdk.navi.NaviClient
import com.kakao.sdk.navi.model.Location
import com.kakao.sdk.share.ShareClient
import com.kakao.sdk.share.WebSharerClient
import com.kakao.sdk.template.model.Link
import com.kakao.sdk.template.model.TextTemplate

class KakaoModule(context: ReactApplicationContext) : ReactContextBaseJavaModule(context) {
    @ReactMethod()
    fun openKakaoNavi(addressName: String, latitude: String, longitude: String) {
        val activity = this.currentActivity
            ?: throw NullPointerException("Current Activity is Null Of openKakaoNavi Method")

        if (NaviClient.instance.isKakaoNaviInstalled(this.reactApplicationContext)) {
            activity.startActivity(
                NaviClient.instance.navigateIntent(
                    Location(addressName, longitude, latitude)
                )
            )
        } else {
            activity.startActivity(
                Intent(
                    Intent.ACTION_VIEW,
                    Uri.parse(Constants.WEB_NAVI_INSTALL)
                ).addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
            )
        }
    }

    @ReactMethod()
    fun shareKakaoTalk(msg: String, url: String) {
        val textTemplate = TextTemplate(msg, Link(url))

        val activity = this.currentActivity
            ?: throw NullPointerException("Current Activity is Null Of shareKakaoTalk Method")

        if (ShareClient.instance.isKakaoTalkSharingAvailable(this.reactApplicationContext)) {

            ShareClient.instance.shareDefault(
                this.reactApplicationContext,
                textTemplate
            ) { sharingResult, error ->
                if (error != null) {
                    throw error
                }

                if (sharingResult != null) {
                    activity.startActivity(sharingResult.intent)
                }
            }
        } else {
            val sharerUrl = WebSharerClient.instance.makeDefaultUrl(textTemplate)

            KakaoCustomTabsClient.openWithDefault(this.reactApplicationContext, sharerUrl)

            KakaoCustomTabsClient.open(this.reactApplicationContext, sharerUrl)
        }
    }

    override fun getName(): String {
        return "KakaoModule";
    }
}
