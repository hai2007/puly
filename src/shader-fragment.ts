
// 片段着色器

export default `
    precision mediump float;

    uniform vec4 u_LColor; // 光颜色
    uniform vec4 u_color;  // 顶点颜色

    varying vec3 v_LDirection; // 光线方向
    varying vec3 v_normal;     // 法线方向

    uniform sampler2D u_sampler; // 纹理单元
    varying vec2 v_textcoord;

    uniform int textureType; // 纹理类型，1无，2二维纹理

    void main()
    {

        // 先对方向进行序列化，使得向量长度为1
        vec3 LDirection = normalize(v_LDirection);
        vec3 normal = normalize(v_normal);

        // 计算序列化后的光方向和法线方向的点乘
        float dotValue = max(abs(dot(LDirection, normal)), 0.4);

        vec4 color = u_color;

        // 二维纹理
        if(textureType==2){
            color = texture2D(u_sampler, v_textcoord);
        }

        gl_FragColor = color * u_LColor * dotValue;


    }
`
