export default function transactionsChart() {
  return (
    // <div className="rounded-xl border bg-card text-card-foreground shadow p-6 flex items-center justify-center">
    //   <h1 className="text-xl font-bold"> Chart</h1>
    // </div>
    <div className="rounded-xl border bg-card text-card-foreground shadow col-span-4">
      <div className="flex flex-col space-y-1.5 p-6">
        <h3 className="font-semibold leading-none tracking-tight">Overview</h3>
      </div>
      <div className="p-6 pt-0 pl-2">
        <div
          className="recharts-responsive-container"
          style={{ width: "100%", height: "350px", minWidth: "0px" }}
        >
          <div
            className="recharts-wrapper"
            role="region"
            style={{
              position: "relative",
              cursor: "default",
              width: "854px",
              height: "350px",
            }}
          >
            <svg
              className="recharts-surface"
              width="854"
              height="350"
              viewBox="0 0 854 350"
            >
              <title></title>
              <desc></desc>
              <defs>
                <clipPath id="recharts1-clip">
                  <rect x="65" y="5" height="310" width="784"></rect>
                </clipPath>
              </defs>
              <g className="recharts-layer recharts-cartesian-axis recharts-xAxis xAxis">
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="97.66666666666666"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="97.66666666666666" dy="0.71em">
                        Jan
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="162.99999999999997"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="162.99999999999997" dy="0.71em">
                        Feb
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="228.33333333333331"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="228.33333333333331" dy="0.71em">
                        Mar
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="293.6666666666667"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="293.6666666666667" dy="0.71em">
                        Apr
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="359"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="359" dy="0.71em">
                        May
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="424.3333333333333"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="424.3333333333333" dy="0.71em">
                        Jun
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="489.6666666666667"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="489.6666666666667" dy="0.71em">
                        Jul
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="554.9999999999999"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="554.9999999999999" dy="0.71em">
                        Aug
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="620.3333333333333"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="620.3333333333333" dy="0.71em">
                        Sep
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="685.6666666666666"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="685.6666666666666" dy="0.71em">
                        Oct
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="750.9999999999999"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="750.9999999999999" dy="0.71em">
                        Nov
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="bottom"
                      width="784"
                      height="30"
                      x="816.3333333333333"
                      y="323"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="middle"
                    >
                      <tspan x="816.3333333333333" dy="0.71em">
                        Dec
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-cartesian-axis recharts-yAxis yAxis">
                <g className="recharts-cartesian-axis-ticks">
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="left"
                      width="60"
                      height="310"
                      x="57"
                      y="315"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="end"
                    >
                      <tspan x="57" dy="0.355em">
                        $0
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="left"
                      width="60"
                      height="310"
                      x="57"
                      y="237.5"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="end"
                    >
                      <tspan x="57" dy="0.355em">
                        $1500
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="left"
                      width="60"
                      height="310"
                      x="57"
                      y="160"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="end"
                    >
                      <tspan x="57" dy="0.355em">
                        $3000
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="left"
                      width="60"
                      height="310"
                      x="57"
                      y="82.5"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="end"
                    >
                      <tspan x="57" dy="0.355em">
                        $4500
                      </tspan>
                    </text>
                  </g>
                  <g className="recharts-layer recharts-cartesian-axis-tick">
                    <text
                      stroke="none"
                      font-size="12"
                      orientation="left"
                      width="60"
                      height="310"
                      x="57"
                      y="9"
                      fill="#888888"
                      className="recharts-text recharts-cartesian-axis-tick-value"
                      text-anchor="end"
                    >
                      <tspan x="57" dy="0.355em">
                        $6000
                      </tspan>
                    </text>
                  </g>
                </g>
              </g>
              <g className="recharts-layer recharts-bar fill-primary">
                <g className="recharts-layer recharts-bar-rectangles">
                  <g className="recharts-layer">
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="246.50166666666667"
                        name="Jan"
                        x="71.53333333333333"
                        y="68.49833333333332"
                        d="M71.53333333333333,72.49833333333332A 4,4,0,0,1,75.53333333333333,68.49833333333332L 119.53333333333333,68.49833333333332A 4,4,0,0,1,
        123.53333333333333,72.49833333333332L 123.53333333333333,315L 71.53333333333333,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="266.96166666666664"
                        name="Feb"
                        x="136.86666666666665"
                        y="48.03833333333334"
                        d="M136.86666666666665,52.03833333333334A 4,4,0,0,1,140.86666666666665,48.03833333333334L 184.86666666666665,48.03833333333334A 4,4,0,0,1,
        188.86666666666665,52.03833333333334L 188.86666666666665,315L 136.86666666666665,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="66.23666666666668"
                        name="Mar"
                        x="202.2"
                        y="248.76333333333332"
                        d="M202.2,252.76333333333332A 4,4,0,0,1,206.2,248.76333333333332L 250.2,248.76333333333332A 4,4,0,0,1,
        254.2,252.76333333333332L 254.2,315L 202.2,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="163.88666666666663"
                        name="Apr"
                        x="267.53333333333336"
                        y="151.11333333333337"
                        d="M267.53333333333336,155.11333333333337A 4,4,0,0,1,271.53333333333336,151.11333333333337L 315.53333333333336,151.11333333333337A 4,4,0,0,1,
        319.53333333333336,155.11333333333337L 319.53333333333336,315L 267.53333333333336,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="136.03833333333336"
                        name="May"
                        x="332.8666666666667"
                        y="178.96166666666664"
                        d="M332.8666666666667,182.96166666666664A 4,4,0,0,1,336.8666666666667,178.96166666666664L 380.8666666666667,178.96166666666664A 4,4,0,0,1,
        384.8666666666667,182.96166666666664L 384.8666666666667,315L 332.8666666666667,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="91.76000000000002"
                        name="Jun"
                        x="398.2"
                        y="223.23999999999998"
                        d="M398.2,227.23999999999998A 4,4,0,0,1,402.2,223.23999999999998L 446.2,223.23999999999998A 4,4,0,0,1,
        450.2,227.23999999999998L 450.2,315L 398.2,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="250.37666666666667"
                        name="Jul"
                        x="463.53333333333336"
                        y="64.62333333333333"
                        d="M463.53333333333336,68.62333333333333A 4,4,0,0,1,467.53333333333336,64.62333333333333L 511.5333333333333,64.62333333333333A 4,4,0,0,1,
        515.5333333333333,68.62333333333333L 515.5333333333333,315L 463.53333333333336,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="188.42833333333334"
                        name="Aug"
                        x="528.8666666666666"
                        y="126.57166666666666"
                        d="M528.8666666666666,130.57166666666666A 4,4,0,0,1,532.8666666666666,126.57166666666666L 576.8666666666666,126.57166666666666A 4,4,0,0,1,
        580.8666666666666,130.57166666666666L 580.8666666666666,315L 528.8666666666666,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="203.87666666666667"
                        name="Sep"
                        x="594.1999999999999"
                        y="111.12333333333333"
                        d="M594.1999999999999,115.12333333333333A 4,4,0,0,1,598.1999999999999,111.12333333333333L 642.1999999999999,111.12333333333333A 4,4,0,0,1,
        646.1999999999999,115.12333333333333L 646.1999999999999,315L 594.1999999999999,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="283.28833333333336"
                        name="Oct"
                        x="659.5333333333333"
                        y="31.711666666666652"
                        d="M659.5333333333333,35.71166666666665A 4,4,0,0,1,663.5333333333333,31.711666666666652L 707.5333333333333,31.711666666666652A 4,4,0,0,1,
        711.5333333333333,35.71166666666665L 711.5333333333333,315L 659.5333333333333,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="194.68"
                        name="Nov"
                        x="724.8666666666666"
                        y="120.32"
                        d="M724.8666666666666,124.32A 4,4,0,0,1,728.8666666666666,120.32L 772.8666666666666,120.32A 4,4,0,0,1,
        776.8666666666666,124.32L 776.8666666666666,315L 724.8666666666666,315Z"
                      ></path>
                    </g>
                    <g
                      className="recharts-layer recharts-bar-rectangle"
                      role="img"
                    >
                      <path
                        fill="currentColor"
                        radius="4,4,0,0"
                        className="recharts-rectangle fill-primary"
                        width="52"
                        height="70.68"
                        name="Dec"
                        x="790.1999999999999"
                        y="244.32"
                        d="M790.1999999999999,248.32A 4,4,0,0,1,794.1999999999999,244.32L 838.1999999999999,244.32A 4,4,0,0,1,
        842.1999999999999,248.32L 842.1999999999999,315L 790.1999999999999,315Z"
                      ></path>
                    </g>
                  </g>
                </g>
                <g className="recharts-layer"></g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
