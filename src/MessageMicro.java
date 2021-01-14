package b;

import cn.jpush.android.api.JThirdPlatFormInterface;
import com.tencent.mobileqq.pb.MessageMicro;
import com.tencent.qqmini.proguard.d5;
import com.tencent.qqmini.proguard.g5;
import com.tencent.qqmini.proguard.l5;
import com.tencent.qqmini.proguard.m5;
import com.tencent.qqmini.proguard.n5;
import com.tencent.qqmini.proguard.q4;
import com.tencent.qqmini.proguard.v4;
import com.tencent.qqmini.proguard.y4;
import com.unionpay.tsmservice.data.Constant;

public final class a {

    /* renamed from: b.a$a  reason: collision with other inner class name */
    public static final class C0011a extends MessageMicro<C0011a> {
        public static final MessageMicro.a __fieldMap__ = MessageMicro.initFieldMap(
            new int[]{10, 18, 26, 32, 42, 50, 58, 66}, new String[]{"uin", "sig", "platform", "type", "appid", "openid", "sessionkey", "Extinfo"}, new Object[]{"", new byte[0], "", 0, "", "", new byte[0], null}, C0011a.class);
        public final g5<com.tencent.qqmini.proguard.a> Extinfo = y4.initRepeatMessage(com.tencent.qqmini.proguard.a.class);
        public final l5 appid = y4.initString("");
        public final l5 openid = y4.initString("");
        public final l5 platform = y4.initString("");
        public final v4 sessionkey = y4.initBytes(new byte[0]);
        public final v4 sig = y4.initBytes(new byte[0]);
        public final m5 type = y4.initUInt32(0);
        public final l5 uin = y4.initString("");
    }

    public static final class b extends MessageMicro<b> {
        public static final MessageMicro.a __fieldMap__ = MessageMicro.initFieldMap(new int[]{8, 18}, new String[]{"method", "iv"}, new Object[]{0, ""}, b.class);
        public final l5 iv = y4.initString("");
        public final m5 method = y4.initUInt32(0);
    }

    public static final class c extends MessageMicro<c> {
        public static final MessageMicro.a __fieldMap__ = MessageMicro.initFieldMap(new int[]{8, 18, 26, 34, 42, 50, 58, 66, 74, 82, 88}, new String[]{"Seq", "qua", "deviceInfo", "busiBuff", "traceid", "Module", "Cmdname", "loginSig", "Crypto", "Extinfo", "contentType"}, new Object[]{0L, "", "", new byte[0], "", "", "", null, null, null, 0}, c.class);
        public final l5 Cmdname = y4.initString("");
        public b Crypto = new b();
        public final g5<com.tencent.qqmini.proguard.a> Extinfo = y4.initRepeatMessage(com.tencent.qqmini.proguard.a.class);
        public final l5 Module = y4.initString("");
        public final n5 Seq = y4.initUInt64(0);
        public final v4 busiBuff = y4.initBytes(new byte[0]);
        public final m5 contentType = y4.initUInt32(0);
        public final l5 deviceInfo = y4.initString("");
        public C0011a loginSig = new C0011a();
        public final l5 qua = y4.initString("");
        public final l5 traceid = y4.initString("");
    }

    public static final class d extends MessageMicro<d> {
        public static final q4 q4Var = new byte[0];
        public static final MessageMicro.a __fieldMap__ = MessageMicro.initFieldMap(new int[]{8, 16, 26, 34, 42}, new String[]{"Seq", "retCode", "errMsg", "busiBuff", "Extinfo"}, new Object[]{0L, 0L, q4Var, q4Var, null}, d.class);
        public final g5<com.tencent.qqmini.proguard.a> Extinfo = y4.initRepeatMessage(com.tencent.qqmini.proguard.a.class);
        public final n5 Seq = y4.initUInt64(0);
        public final v4 busiBuff = y4.initBytes(new byte[0]);
        public final v4 errMsg = y4.initBytes(new byte[0]);
        public final d5 retCode = y4.initInt64(0);
    }
}
