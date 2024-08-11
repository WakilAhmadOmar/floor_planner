import * as React from "react";
import { Path, Svg } from "react-native-svg";
const SvgComponent = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M3.971 15.385a3.293 3.293 0 0 0 3.286-3.286 3.295 3.295 0 0 0-3.286-3.293A3.296 3.296 0 0 0 .68 12.1a3.295 3.295 0 0 0 3.292 3.286ZM15.239 3.483 13.903 1.17a.617.617 0 0 0-.535-.307h-2.67a.618.618 0 0 0-.536.307L8.826 3.483a.612.612 0 0 0 0 .616l1.336 2.313c.11.191.314.308.535.308h2.671a.617.617 0 0 0 .535-.308L15.24 4.1a.611.611 0 0 0 0-.616ZM15.276 11.274a.977.977 0 0 0-.782-.659l-1.101-.16-.492-.997a.95.95 0 0 0-.868-.535.963.963 0 0 0-.868.535l-.492.997-1.096.16a.96.96 0 0 0-.781.659.97.97 0 0 0 .24.997l.8.769-.19 1.095a.96.96 0 0 0 .387.948c.166.123.37.19.566.19a.976.976 0 0 0 .45-.116l.984-.517.985.517a.96.96 0 0 0 1.021-.074.969.969 0 0 0 .382-.948l-.185-1.095.794-.77a.981.981 0 0 0 .246-.996ZM7.209 2.966a.96.96 0 0 0-.782-.658l-1.095-.16-.493-.991a.958.958 0 0 0-.867-.542.945.945 0 0 0-.868.542l-.492.99-1.102.16a.971.971 0 0 0-.535 1.655l.794.777-.185 1.095a.978.978 0 0 0 .381.948.972.972 0 0 0 1.022.067l.985-.517.984.517c.142.08.296.117.45.117a.971.971 0 0 0 .953-1.132l-.19-1.095.8-.776a.963.963 0 0 0 .24-.997Z"
    />
  </Svg>
);
export default SvgComponent;
