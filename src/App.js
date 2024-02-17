import ProtocolPickupTipCount from "./ProtocolPickupTipCount";
import "./App.css";

function App() {
  const logString = `
  2023-06-23 10:11:16,332 launch
2023-06-23 10:23:28,802 shutdown
2023-06-23 10:45:40,683 launch
2023-06-23 10:47:03,916 shutdown
2023-06-23 10:48:58,514 launch
2023-06-23 10:50:11,182 run "0623_1"
2023-06-23 10:50:11,299 step 1
2023-06-23 10:50:11,304 pickuptip 8ch 200ul
2023-06-23 10:50:11,323 step 2
2023-06-23 10:50:11,329 pickuptip 8ch 200ul
2023-06-23 10:50:11,351 step 3
2023-06-23 10:50:11,359 pickuptip 1ch 200ul
2023-06-23 10:50:11,379 step 4
2023-06-23 10:50:11,385 pickuptip 8ch 200ul
2023-06-23 10:50:11,407 step 5
2023-06-23 10:50:11,417 pickuptip 1ch 200ul
2023-06-23 10:50:11,471 step 6
2023-06-23 10:50:11,482 pickuptip 1ch 200ul
2023-06-23 10:50:29,070 done "0623_1"
2023-06-23 10:50:31,258 repeat
2023-06-23 10:50:42,223 run "0623_1"
2023-06-23 10:50:42,328 step 1
2023-06-23 10:50:42,332 pickuptip 8ch 200ul
2023-06-23 10:50:42,350 step 2
2023-06-23 10:50:42,358 pickuptip 8ch 200ul
2023-06-23 10:50:42,399 step 3
2023-06-23 10:51:07,705 step 4
2023-06-23 10:51:11,199 step 5
2023-06-23 10:51:11,200 done "0623_1"
2023-06-23 10:51:24,613 shutdown
2023-06-23 10:54:09,976 launch
2023-06-23 10:54:20,673 run "0623_1"
2023-06-23 10:54:20,733 step 1
2023-06-23 10:54:20,738 pickuptip 8ch 200ul
2023-06-23 10:54:20,763 step 2
2023-06-23 10:54:20,768 pickuptip 8ch 200ul
2023-06-23 10:54:26,654 done "0623_1"
2023-06-23 10:54:29,070 robot "INITIALIZE"
2023-06-23 10:54:29,898 robot "DROP TIP"
2023-06-23 10:54:37,529 robot "REMOVE LIQUID"
2023-06-23 10:54:38,793 robot "PIPETTE UP"
2023-06-23 10:54:43,342 shutdown
2023-06-23 10:54:51,355 launch
2023-06-23 10:55:40,496 run "0623_1"
2023-06-23 10:55:40,572 step 1
2023-06-23 10:55:40,577 pickuptip 8ch 200ul
2023-06-23 10:55:40,594 step 2
2023-06-23 10:55:40,600 pickuptip 8ch 200ul
2023-06-23 10:55:40,614 step 3
2023-06-23 10:55:40,620 pickuptip 1ch 200ul
2023-06-23 10:55:41,423 pause
2023-06-23 10:55:43,842 resume
2023-06-23 10:55:44,607 pause
2023-06-23 10:55:46,097 stop
2023-06-23 10:55:46,185 stopped "0623_1"
`;

  return (
    <div className="App">
      <ProtocolPickupTipCount log={logString} />
    </div>
  );
}

export default App;
