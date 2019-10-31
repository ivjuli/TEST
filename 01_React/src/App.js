import React from 'react';
import './App.css';

function App() {
  return (
    <div class="wrapper">
    <div class="signal">
        <div><img src="/img/signal.svg" alt="signal_bars" width="20px" height="20px"/></div>
        <div><img src="/img/wifi.svg" alt="wifi" width="20px" height="20px"/></div>
        <div><img src="/img/battery_status.svg" alt="battery_status" width="20px" height="20px"/></div>
      </div>
  <div class="element">
    <div><img src="/img/lypa.svg" alt="lypa" width="25px" height="25px"/></div>
    <div><img src="/img/bell.svg" alt="bell" width="25px" height="25px"/></div>
  </div>
  <div class="text line size_14">Your total balance</div>
  <div class="text white stroka"><div class="size_20">$</div><div class="size_30">1,632.95</div></div>  
  <div class="text line size_16 padding_top_15">24h Changes</div>
  <div class="text line green size_20">+ $37.55 <img src="/img/arrow_green.svg" alt="arrow_green" width="15px" height="15px"/></div>
  <div class="blok margin_top_15">
    <div class="blok_price">
      <div class="logo">
        <div class="logo_icon">
          <img src="/img/bitcoin.svg" alt="bitcoin" width="35px" height="35px"/>
          <div class="logo_text">
            <div class="text white size_16">BTC</div>
            <div class="text size_14">Bitcoin</div>
          </div>
        </div>
          <div class="logo_price margin-left_175">
            <div class="text white size_16">0.241234523</div>
            <div class="text size_14">$1,238.62</div>
          </div>
      </div>
      <div><hr width="325px" size="1" color="60, 60, 65" /></div>
      <div class="logo">
          <div class="logo_text">
              <div class="text white size_16">$6,752.54</div>
              <div class="text size_14">Price</div>
            </div>
          <div class="logo_price margin-left_230">
              <div class="text green size_16">+2.75%</div>
              <div class="text size_14">Profit/Loss</div>
            </div>
      </div>
    </div>
  </div>
  <div class="blok margin_top_15">
      <div class="blok_price">
        <div class="logo">
          <div class="logo_icon">
            <img src="/img/eth.svg" alt="eth" width="35px" height="35px"/>
            <div class="logo_text">
              <div class="text white size_16">ETH</div>
              <div class="text size_14">Ethereum</div>
            </div>
          </div>
            <div class="logo_price margin-left_175">
              <div class="text white size_16">2.6545634</div>
              <div class="text size_14">$574.21</div>
            </div>
        </div>
        <div><hr width="325px" size="1" color="60, 60, 65" /></div>
        <div class="logo">
            <div class="logo_text">
                <div class="text white size_16">$3,122.73</div>
                <div class="text size_14">Price</div>
              </div>
            <div class="logo_price margin-left_230">
                <div class="text red size_16">-2.91%</div>
                <div class="text size_14">Profit/Loss</div>
              </div>
        </div>
      </div>
    </div>
    <div class="blok margin_top_15">
        <div class="blok_price">
          <div class="logo">
            <div class="logo_icon">
              <img src="/img/xrp.svg" alt="xrp" width="35px" height="35px"/>
              <div class="logo_text">
                <div class="text white size_16">XRP</div>
                <div class="text size_14">Ripple</div>
              </div>
            </div>
              <div class="logo_price margin-left_175">
                <div class="text white size_16">135.767835</div>
                <div class="text size_14">$254.82</div>
              </div>
          </div>
          <div><hr width="325px" size="1" color="60, 60, 65" /></div>
          <div class="logo">
              <div class="logo_text">
                  <div class="text white size_16">$0,2355.43</div>
                  <div class="text size_14">Price</div>
                </div>
              <div class="logo_price margin-left_230">
                  <div class="text green size_16">+45.23%</div>
                  <div class="text size_14">Profit/Loss</div>
                </div>
          </div>
        </div>
      </div>
         <div class="margin_top_line"><hr width="155px" size="3" color="60, 60, 65" /></div>
</div>    
  );
}

export default App;
