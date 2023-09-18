export default function Banner() {
    const myStyle={
        backgroundImage:
         "url('https://images.unsplash.com/photo-1525596201491-f6eae338a205?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80')",
    };
    return (
      <div className="banner" style={myStyle}>
        <div className="bannerBgDark"></div>
        <div className="h-100 d-flex justify-content-center align-items-center">
            <div className="bannerTxt text-center text-light">
                <h1 className="fw-bold fs-1">FRESHｘSWEET</h1>
                <p>用心準備餐點，分享新鮮美味</p>
            </div>
        </div>
      </div>
    );
}
