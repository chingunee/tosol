import React from "react";

function StegnoPage() {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"
      />
      <div className="container ">
        <div className="page-header">
          <h1>Steganography Online</h1>
        </div>
        <ul className="nav nav-tabs" id="tabs" data-tabs="tabs">
          <li role="presentation" className="active">
            {" "}
            <a href="#encode" data-toggle="tab">
              Encode
            </a>
          </li>
          <li role="presentation">
            {" "}
            <a href="#decode" data-toggle="tab">
              Decode
            </a>
          </li>
        </ul>
        <div id="my-tab-content" className="tab-content">
          <div className="tab-pane active" id="encode">
            <div>
              <h2>Encode message</h2>
              <form className="form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="file"
                    name="baseFile"
                    onchange="previewEncodeImage()"
                  />
                </div>
                <div className="form-group">
                  <textarea
                    className="form-control message"
                    rows={3}
                    placeholder="Enter your message here"
                    defaultValue={""}
                  />
                </div>
                <div className="form-group">
                  <button
                    className="encode btn btn-default pull-right"
                    onclick="encodeMessage()"
                  >
                    Encode
                  </button>
                </div>
              </form>
              <div className="clearfix" />
            </div>
            <div className="error" style={{ display: "none" }} />
            <div className="binary" style={{ display: "none" }}>
              <h3>Binary representation of your message</h3>
              <textarea
                className="form-control message"
                style={{ wordWrap: "break-word" }}
                defaultValue={"          "}
              />
            </div>
            <div className="images" style={{ display: "none" }}>
              <div className="original" style={{ display: "none" }}>
                <h3>Original</h3>
                <canvas />
              </div>
              <div className="nulled" style={{ display: "none" }}>
                <h3>Normalized</h3>
                <canvas />
              </div>
              <div className="message" style={{ display: "none" }}>
                <h3>
                  Message hidden in image (right click{" "}
                  <span className="glyphicon glyphicon-arrow-right" /> save as)
                </h3>
                <canvas />
              </div>
            </div>
          </div>
          <div className="tab-pane" id="decode">
            <div>
              <h2>Decode image</h2>
              <form className="form">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="file"
                    name="decodeFile"
                    onchange="previewDecodeImage()"
                  />
                </div>
                <div className="form-group">
                  <button
                    className="decode btn btn-default pull-right"
                    onclick="decodeMessage()"
                  >
                    Decode
                  </button>
                </div>
              </form>
              <div className="clearfix" />
            </div>
            <div className="binary-decode" style={{ display: "none" }}>
              <h3>Hidden message</h3>
              <textarea
                className="form-control message"
                style={{ wordWrap: "break-word" }}
                defaultValue={"          "}
              />
            </div>
            <div className="decode" style={{ display: "none" }}>
              <h3>Input</h3>
              <canvas />
            </div>
          </div>
        </div>
      </div>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n    canvas {\n      max-width: 100%;\n    }\n  ",
        }}
      />
    </>
  );
}

export default StegnoPage;
