<template>
  <div class="home">
    <div class="header">
      <!--<div class="clouds"></div>-->
      <div class="backgroundAni">
        <img src="../../assets/image/box_bcg_layer.jpeg"  alt=""/>
      </div>
      <div class="headerBtn">
        <div class="shareBtn" @click="showShare">
          <img src="../../assets/image/coin.png"  alt=""/>
          Share to Earn
        </div>
        <div class="connectWallet">
          {{selectAddress !== '' ? hideMiddle(selectAddress, 5, 5) : 'Connect Wallet'}}
          <div class="accountWrapper">
            <div class="arrow">
              <span></span>
            </div>
            <div class="accountContent">
              <div class="extract">
                <div>My Rewards Account</div>
                <div class="ares">{{gameAccountBalance}} ARES</div>
                <div class="exBtn" @click="extractShow = true">Extract</div>
              </div>
              <div class="balanceWrapper">
                <div>My Wallet Balance</div>
                <div>
                  <img src="../../assets/image/bag.png" alt="/">
                </div>
                <div class="ares">{{num_balance}} ARES</div>
              </div>
            </div>
          </div>
        </div>
        <div class="message">
          <a-badge :count="message.length">
            <a-icon type="bell" theme="filled" style="color: #607FF6" :class="[message.length > 0 ? 'bellAni' : '']"/>
          </a-badge>
          <div class="messageList">
            <div class="messageItem" v-for="(item, index) in message" :key="index">
              <div class="arrow" v-if="index === 0">
                <span></span>
              </div>
              <div class="cancel" @click="readMessage(item)">
                <!--3h ago-->
                <a-icon type="close" />
              </div>
              <div class="messageContent"><div class="label"></div>{{item.content}} </div>
            </div>
          </div>
        </div>
        <div class="language">
          {{lang_type.toUpperCase()}}
          <div class="dropdownMenu">
            <div @click="setAppLang('en')">EN</div>
            <div @click="setAppLang('zh')">ZH</div>
          </div>
        </div>
      </div>
      <div class="account">
        <div class="content">
          <div @click="toWin" class="boxLogo">
            <svg id="eCVXhK8UueL1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 521 416" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><linearGradient id="eCVXhK8UueL17-fill" x1="64.1636" y1="181.0983" x2="64.1636" y2="107.2002" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL17-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL17-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL18-fill" x1="124.3036" y1="183.4564" x2="124.3036" y2="106.7513" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL18-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL18-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL19-fill" x1="167.092" y1="180.8739" x2="167.092" y2="129.3243" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL19-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL19-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL20-fill" x1="251.601" y1="181.0983" x2="251.601" y2="107.2002" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL20-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL20-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL21-fill" x1="305.7886" y1="180.7612" x2="305.7886" y2="130.4475" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL21-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL21-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL22-fill" x1="348.4093" y1="181.2101" x2="348.4093" y2="129.3243" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL22-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL22-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL23-fill" x1="381.874" y1="202.4364" x2="381.874" y2="106.7513" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL23-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL23-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL24-fill" x1="419.4392" y1="180.7612" x2="419.4392" y2="126.9662" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL24-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL24-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL25-fill" x1="470.37" y1="180.1996" x2="470.37" y2="129.0999" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL25-fill-0" offset="0%" stop-color="#b2864c"/><stop id="eCVXhK8UueL25-fill-1" offset="99.5%" stop-color="#b46630"/></linearGradient><linearGradient id="eCVXhK8UueL27-fill" x1="172.953" y1="313.3382" x2="172.953" y2="207.5811" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL27-fill-0" offset="0%" stop-color="#b46630"/><stop id="eCVXhK8UueL27-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="eCVXhK8UueL28-fill" x1="370.9051" y1="314.943" x2="370.9051" y2="205.3339" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL28-fill-0" offset="0%" stop-color="#b46630"/><stop id="eCVXhK8UueL28-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="eCVXhK8UueL44-fill" x1="209.2772" y1="278.1252" x2="287.0895" y2="278.1252" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL44-fill-0" offset="0%" stop-color="#8e612d"/><stop id="eCVXhK8UueL44-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="eCVXhK8UueL45-fill" x1="270.3272" y1="264.5579" x2="337.3764" y2="264.5579" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL45-fill-0" offset="0%" stop-color="#b46630"/><stop id="eCVXhK8UueL45-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="eCVXhK8UueL97-fill" x1="268.182643" y1="239.587839" x2="272.099735" y2="241.863438" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL97-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL97-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL98-fill" x1="268.239456" y1="239.904443" x2="270.303631" y2="242.869271" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL98-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL98-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL145-fill" x1="279.308363" y1="228.06267" x2="284.711427" y2="231.201644" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL145-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL145-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL146-fill" x1="279.386761" y1="228.49935" x2="282.233845" y2="232.589006" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL146-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL146-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL193-fill" x1="293.777821" y1="219.327081" x2="296.556142" y2="222.90486" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL193-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL193-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL194-fill" x1="293.711916" y1="219.641891" x2="294.514084" y2="223.164075" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL194-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL194-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL241-fill" x1="249.322196" y1="233.888989" x2="249.763835" y2="239.509232" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL241-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL241-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL242-fill" x1="249.038119" y1="234.171186" x2="247.4633" y2="238.382102" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL242-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL242-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL289-fill" x1="231.163563" y1="224.491018" x2="236.296615" y2="226.822417" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL289-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL289-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL290-fill" x1="231.273251" y1="224.876017" x2="234.197441" y2="228.290927" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL290-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL290-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL337-fill" x1="240.87306" y1="220.156449" x2="241.314699" y2="225.776692" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL337-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL337-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL338-fill" x1="240.589123" y1="220.438635" x2="239.014229" y2="224.649486" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL338-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL338-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL385-fill" x1="283.745835" y1="216.836422" x2="291.156594" y2="213.657612" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL385-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL385-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL386-fill" x1="284.258493" y1="217.091481" x2="290.685942" y2="217.291564" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL386-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL386-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL433-fill" x1="258.506784" y1="226.644452" x2="266.606332" y2="237.466034" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL433-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL433-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL434-fill" x1="258.293275" y1="227.580074" x2="260.500043" y2="238.131155" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL434-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL434-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL481-fill" x1="241.6747" y1="178.3894" x2="251.5475" y2="188.2623" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL481-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL481-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL482-fill" x1="245.2172" y1="182.8911" x2="248.6319" y2="192.2729" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL482-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL482-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL530-fill" x1="236.871146" y1="223.848035" x2="248.424856" y2="230.861696" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL530-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL530-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL531-fill" x1="237.022382" y1="224.795753" x2="243.00908" y2="233.758728" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL531-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL531-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL578-fill" x1="252.660384" y1="208.862849" x2="263.380219" y2="225.197506" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL578-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL578-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL579-fill" x1="252.268781" y1="210.193689" x2="254.511367" y2="225.612467" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL579-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL579-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL616-fill" x1="265.450404" y1="195.491978" x2="279.082188" y2="206.095112" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL616-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL616-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL617-fill" x1="265.827026" y1="196.939676" x2="272.34308" y2="209.660712" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL617-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL617-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL665-fill" x1="274.893322" y1="216.291097" x2="286.447057" y2="223.304854" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL665-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL665-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL666-fill" x1="275.044559" y1="217.238815" x2="281.031281" y2="226.201886" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL666-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL666-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL713-fill" x1="294.286666" y1="210.505112" x2="301.038925" y2="216.03184" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL713-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL713-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL714-fill" x1="294.297836" y1="211.12453" x2="297.315278" y2="217.3947" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL714-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL714-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL761-fill" x1="226.747142" y1="227.00723" x2="232.253901" y2="233.475029" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL761-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL761-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL762-fill" x1="226.650111" y1="227.602479" x2="228.450349" y2="234.133061" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL762-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL762-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL809-fill" x1="272.090282" y1="235.267199" x2="278.090803" y2="235.324555" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL809-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL809-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL810-fill" x1="272.362931" y1="235.59465" x2="276.680456" y2="237.658428" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL810-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL810-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL857-fill" x1="304.043247" y1="211.209884" x2="307.468819" y2="214.339492" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL857-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL857-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL858-fill" x1="304.031287" y1="211.539131" x2="305.452321" y2="214.955528" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL858-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL858-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient><linearGradient id="eCVXhK8UueL905-fill" x1="218.794855" y1="231.46242" x2="221.523913" y2="234.081191" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL905-fill-0" offset="0%" stop-color="#ffe53b"/><stop id="eCVXhK8UueL905-fill-1" offset="100%" stop-color="#ffa200"/></linearGradient><linearGradient id="eCVXhK8UueL906-fill" x1="218.778472" y1="231.730418" x2="219.868354" y2="234.542998" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="eCVXhK8UueL906-fill-0" offset="0%" stop-color="#fff73b"/><stop id="eCVXhK8UueL906-fill-1" offset="100%" stop-color="#ffba00"/></linearGradient></defs><path d="M489.15,171.05l-2.13,10.09l3.87-.43-1.74-9.66Z" fill="#050505"/><g id="eCVXhK8UueL3"><path d="M289.73,320.81l50.37-34.78-.24-1.61c-.03-.21-3.12-20.92-7.87-42.31-4.8-21.59-10.09-32.8-10.32-33.26l-.57-1.19-2.62-.36c-2.87-.18-11.93-.76-26.54-1.73-17.95-1.2-33.45.04-33.61.05l-.47.08c-.37.1-9.24,2.56-26.12,12.81-13.51,8.2-20.81,13.8-23.3,15.8l-2.12,1.97.29,1.36c.04.19,4.02,19.1,8.45,35c4.45,15.99,13.19,36.58,13.28,36.78l.54,1.27l58.21,11.94l2.64-1.82Zm-2.17,1.5"/><path d="M287.67,325.44L227.02,313l-1.08-2.53c-.09-.21-8.89-20.94-13.39-37.11-4.39-15.75-8.32-34.38-8.49-35.16l-.59-2.81l3.34-3.09c2.56-2.06,9.97-7.74,23.58-16c16.88-10.25,25.83-12.84,26.79-13.1l.93-.16c.15-.01,15.75-1.28,34.01-.06c14.61.97,23.66,1.55,26.53,1.73l.19.02l4.01.54l1.18,2.46c.23.47,5.64,11.9,10.51,33.82c4.8,21.6,7.88,42.29,7.91,42.5l.48,3.22-55.26,38.17Zm-56.92-17.02l55.77,11.44l1.72-1.2l49.03-33.85c-.03-.23-3.08-20.73-7.84-42.13-4.58-20.63-9.55-31.5-10.08-32.62l-1.12-.15c-2.97-.19-11.99-.76-26.45-1.73-17.04-1.14-31.72-.06-33.11.04l-.22.04c-1.09.31-9.6,2.93-25.34,12.49-13.22,8.03-20.41,13.51-22.95,15.55l-.97.9c.33,1.58,4.15,19.53,8.39,34.75c4.41,15.84,13.08,36.26,13.17,36.46v.01Z" fill="#172259"/></g><g id="eCVXhK8UueL6" transform="matrix(.951895 0 0 0.96151 12.610245 8.168925)"><g><path d="M125.38,188.69l3.65,2.65l3.67-2.62c7.28-5.19,12.7-10.78,16.27-16.73c1.18,2.24,2.65,4.34,4.41,6.29l.11.11c5.63,5.91,12.82,8.91,21.39,8.91c4.89,0,8.13-3.8,14.42-16.93l4.3-8.98h-9.96c-.37,0-.64,0-4.33.37l-3.55.41c-2.73-.03-4.12-.38-4.7-.59l19.55-19.01-1.63-3.93c-1.24-3-4.44-6.59-15.99-14.37l-2.42-1.63-2.81.81c-2.17.62-4.32,2.08-6.97,4.74l-3.93,3.93c-2.82,2.82-4.94,5.18-6.49,7.22-.81-1.57-1.76-3.12-2.84-4.65-6.47-9.03-13.86-10.93-18.91-10.93-1.81,0-3.32.62-5.63,2.28c0-4.32.45-10.53,1.31-18.46l.76-6.95h-11.45l-1.56,1.02c-1.81,1.19-3.82,2.39-5.97,3.59l-4.46,2.49l2.24-6.66h-50.94c-5.93,0-11.58,2-16.78,5.96-5.41,3.95-8.72,9.04-9.83,15.13L23.9,135.3l10.33-5.79c-.91,1.67-1.6,3.05-2.1,4.16l-.06.13c-1.81,4.34-2.73,9.05-2.73,13.98c0,10.37,4.09,19.72,12.19,27.82c8,7.91,17.34,11.92,27.77,11.92c4.91,0,11.05-1.69,18.75-5.16l.09-.04c2.38-1.12,7.85-3.7,11.5-7.85v11.34l5.15.93c2.12.38,4.12.52,5.92.43l12.23-.6c.84.84,1.64,1.54,2.44,2.12Zm-1.84-14.06v-25.94c.23-.01.5-.02.8-.02c2.21,0,3.64.72,4.94,2.49l.1.13c1.46,1.88,2.17,4.27,2.17,7.28c0,3.21-.88,6.23-2.69,9.22l-.07.13c-.24.42-.86,1.39-2.33,3.19-.86,1.04-1.83,2.21-2.92,3.52ZM98.04,155.6l-4.59,2.09c-1,.46-2.18,1.07-3.51,1.81-1.28.72-2.79,1.63-4.47,2.7-1.59.94-2.98,1.75-4.18,2.44-1.23.71-2.03,1.08-2.52,1.29-2.2.94-4.24,1.41-6.08,1.41-5.14,0-8.91-2.2-11.86-6.92-2.8-4.5-4.22-10.15-4.22-16.79c0-10.94.97-17.21,1.99-20.78l27.09,3.62c2.82.44,7.82.01,11.7-6.95l1.05,1.8c.82,1.46,1.22,3.06,1.22,4.9v31.54l-1.62-2.16Z"/><path d="M129.02,193.18l-4.52-3.28c-.71-.52-1.41-1.11-2.12-1.79l-11.57.57c-1.94.1-4.04-.05-6.26-.45l-6.39-1.16v-9.06c-3.48,2.91-7.44,4.77-9.36,5.67l-.1.04c-7.92,3.57-14.26,5.3-19.39,5.3-10.84,0-20.54-4.16-28.83-12.35-8.39-8.39-12.64-18.1-12.64-28.89c0-5.13.96-10.03,2.84-14.56l.01-.02-8.86,4.96l2.99-16.27c1.19-6.48,4.7-11.88,10.42-16.07c5.44-4.14,11.39-6.25,17.66-6.25h53.02l-1.67,4.95l1.07-.6c2.12-1.18,4.1-2.37,5.88-3.54l1.94-1.27h13.57l-.94,8.62c-.69,6.33-1.11,11.54-1.25,15.55c1.42-.73,2.67-1.03,4.08-1.03c5.41,0,13.29,2,20.13,11.56.66.93,1.28,1.88,1.84,2.84c1.4-1.67,3.12-3.52,5.21-5.61l3.93-3.93c2.84-2.85,5.19-4.42,7.62-5.12l3.48-1l3,2.02c11.91,8.01,15.16,11.7,16.54,15.04l2.02,4.87-18.17,17.67c.43.03.92.05,1.47.06l3.45-.4c3.79-.38,4.07-.38,4.5-.38h12.34L190.63,171c-5.89,12.3-9.56,17.78-15.77,17.78-8.99,0-16.56-3.16-22.48-9.38l-.12-.13c-1.26-1.39-2.39-2.87-3.37-4.43-3.65,5.35-8.8,10.41-15.34,15.08l-4.53,3.26Zm-2.76-5.71l2.78,2.02l2.8-1.99c7.06-5.03,12.39-10.51,15.86-16.28l1.37-2.28l1.24,2.35c1.13,2.14,2.54,4.15,4.2,5.98l.09.1c5.32,5.59,12.15,8.43,20.29,8.43c3.64,0,6.52-2.41,13.06-16.08l3.27-6.83h-7.58c-.3,0-.57,0-4.18.36l-3.62.42h-.09c-2.83-.03-4.39-.38-5.19-.68l-2.25-.82l20.53-19.97-1.24-2.99c-.99-2.38-3.54-5.69-15.45-13.7l-1.84-1.24-2.14.61c-1.91.55-3.86,1.89-6.33,4.36l-3.93,3.93c-2.76,2.76-4.85,5.08-6.36,7.07l-1.43,1.89-1.09-2.1c-.78-1.51-1.7-3.01-2.73-4.47-6.1-8.51-12.98-10.3-17.69-10.3-1.25,0-2.43.33-4.76,2l-2.38,1.71v-2.93c0-4.37.45-10.63,1.32-18.62l.58-5.29h-9.33l-1.19.78c-1.84,1.2-3.87,2.43-6.06,3.64l-7.85,4.39l2.81-8.36h-48.83c-5.6,0-10.94,1.9-15.87,5.65-5.11,3.73-8.22,8.51-9.26,14.2l-1.83,9.99l12.08-6.77-2.48,4.57c-.88,1.62-1.57,2.98-2.04,4.06l-.05.12c-1.73,4.14-2.61,8.65-2.61,13.39c0,9.96,3.95,18.96,11.75,26.76c7.7,7.62,16.69,11.48,26.71,11.48c4.7,0,10.63-1.64,18.13-5.02l.07-.03c2.26-1.06,7.55-3.55,11.01-7.48l2.63-2.99v14.07l3.92.71c1.99.36,3.86.5,5.57.41l12.9-.64.47.48c.77.76,1.5,1.4,2.24,1.93v0Zm-4.22-8.7v-31.49l1.41-.09c.26-.02.56-.03.9-.03c2.68,0,4.57.96,6.15,3.1l.09.12c1.66,2.14,2.47,4.82,2.47,8.18c0,3.49-.95,6.76-2.91,10l-.06.11c-.32.56-1.01,1.6-2.47,3.38-.85,1.04-1.82,2.22-2.92,3.53l-2.66,3.19Zm3-28.57v20.26c.08-.1.17-.2.25-.3c1.45-1.77,2.02-2.68,2.19-2.99l.08-.13c1.68-2.78,2.49-5.54,2.49-8.47c0-2.67-.61-4.75-1.85-6.36l-.11-.15c-.88-1.2-1.73-1.73-3.05-1.86ZM72.69,168.85c-5.63,0-9.92-2.5-13.13-7.63-2.95-4.75-4.45-10.66-4.45-17.59c0-9.32.69-16.45,2.05-21.19l.36-1.24L85.89,125c2.84.45,6.88-.27,10.2-6.2l1.28-2.3l2.37,4.08c.96,1.71,1.42,3.55,1.42,5.65v36.04l-3.6-4.8-3.49,1.59c-.95.43-2.1,1.02-3.39,1.76-1.27.71-2.75,1.61-4.4,2.66-1.63.97-3.03,1.78-4.24,2.48-1.05.6-1.96,1.07-2.69,1.37-2.38,1-4.63,1.52-6.66,1.52ZM59.72,124.51c-.8,3.36-1.61,9.22-1.61,19.12c0,6.35,1.34,11.74,3.99,16c2.69,4.3,5.95,6.22,10.58,6.22c1.63,0,3.48-.43,5.49-1.29.63-.26,1.42-.67,2.36-1.21c1.2-.69,2.58-1.5,4.17-2.43c1.66-1.05,3.18-1.98,4.5-2.72c1.37-.77,2.59-1.4,3.62-1.87l5.33-2.43v-27.67c0-1.42-.27-2.67-.83-3.8-4.15,5.73-9.11,5.97-11.87,5.53l-25.73-3.45Z" fill="#151f5b"/></g><g><path d="M494.91,129.01c-2.48-2.15-6.56-3.99-12.83-5.79l-2.81-.8-11,7.43c-2.14-2.21-5.03-4.13-8.77-5.84l-3.38-1.55-12.8,9.54c-.82-.52-1.59-.92-2.16-1.22l-5.79-2.9-12.68-7.32-2.22.37c-1.87.31-3.59.99-11.77,7.71-4.86,3.92-8.04,6.64-9.71,8.31-.51.51-.99,1.03-1.46,1.56l-.13-14.29-8.88-.01l10.96-3.51v-20.06h-10.04l-1.52,1.13c-.14.08-.52.28-1.32.67-1.16.56-2.74,1.33-4.75,2.29-5.26,2.52-7.34,3.93-8.57,5.77l-1.05,1.58v17.34l15.45-4.95-1.44,1.23c-.12.1-1.34,1.02-6.91,3.76-5.5,2.7-8.16,4.58-9.56,6.81-4.33-6.42-9.99-10.74-16.87-12.8l-1.91-.57-1.89.64c-7,2.36-13.02,5.77-17.94,10.18-.64.58-1.24,1.18-1.81,1.78-.25-.74-.52-1.51-.85-2.32-.89-2.19-3.62-8.84-9.96-8.84l-.63.03c-1.78.18-2.98.52-9.57,5.81-1.71-2.11-5.27-5.85-10.24-5.85h-.69l-.68.15c-1.54.35-3.12,1.11-7.49,4.39-4.51,3.45-5.61,4.61-6.36,5.91l-.83,1.45v7.38l4.65,1.24c2.24.6,2.64,1.46,2.77,1.74.18.39.77,2,.77,6.24v10.46c-.38-1.39-.95-2.62-1.74-3.67l-3.03-4.04-4.59,2.09c-1,.46-2.18,1.06-3.51,1.81-1.28.72-2.79,1.63-4.47,2.7-1.59.94-2.98,1.75-4.18,2.44-1.24.71-2.03,1.08-2.52,1.29-2.2.94-4.24,1.41-6.08,1.41-5.14,0-8.91-2.2-11.86-6.92-2.8-4.5-4.22-10.15-4.22-16.79c0-10.94.97-17.21,1.99-20.78l27.09,3.62c3,.47,8.45-.04,12.42-8.32l5.74-17.07h-50.93c-5.93,0-11.58,2-16.78,5.96-5.41,3.95-8.72,9.04-9.83,15.13l-2.41,13.13l10.33-5.79c-.91,1.67-1.6,3.05-2.1,4.16l-.06.13c-1.81,4.34-2.73,9.05-2.73,13.98c0,10.37,4.09,19.72,12.19,27.82c8,7.91,17.34,11.92,27.77,11.92c4.91,0,11.05-1.69,18.75-5.16l.09-.04c3.3-1.55,12.58-5.92,14.64-13.43v18.29h23.33v-27.6l1.41-.49c1.82-.63,3.9-1.9,6.54-3.98.29,6.23,2.55,12.75,6.76,19.39c5.55,8.71,12.05,13.12,19.33,13.12c6.34,0,12.59-3.31,19.13-10.13c3.18-3.31,5.56-6.51,7.17-9.64v17.09c0,2.44-.86,4.55-2.7,6.63l-7.46,8.44l5.89,8.83h3.36c1.68,0,3.32-.22,4.92-.67-1.23,2.03-2.32,4.21-3.28,6.3-1.06,2.38-2.02,4.48-2.87,6.3-.41-.64-.84-1.32-1.3-2.05-3.33-5.59-6.3-9.47-9.06-11.86-4.69-4.24-10.19-6.39-16.35-6.39-3,0-5.5.73-21.76,15.79l-11.74,10.87h16c9.78,0,16.62,5.28,21.52,16.6l6.8,15.72c-3.01,9.78-7.33,19-12.85,27.43-7.02,10.58-14.15,16.64-21.17,18.01l-5.07.99.04,15.29h6.01l.48.16h3.44c9.12,0,16.99-2.85,23.37-8.43c5.45-4.72,10.07-11.02,13.73-18.68l3.66-7.52c.2.49.41,1,.62,1.52c2.67,6.55,4.98,10.86,7.29,13.58l.11.12c4.15,4.63,11.85,10.59,23.54,18.23l3.56,2.33L426.11,306v-13.38h-6.27c-1.94,0-6.33-1.09-13.95-8.36-2.47-2.37-4.9-5.05-7.22-7.97-2.38-2.99-4.78-6.31-7.1-9.85-6.2-9.57-7.7-15.22-7.81-18.35.19-.66.99-2.93,4.13-9.1c1.61-3.16,2.67-5.01,3.34-6.06c9.7-.18,16.19-1.36,20.3-3.67l.1-.06c6.51-3.83,10.92-11.4,13.09-22.5l1.46-7.48h-14.56l-1.88,2.45c-2.63,3.42-4.74,3.81-6.07,3.81-.01,0-1.16-.11-3.86-1.94-4.34-2.99-7.05-4.21-9.53-4.3.25-.32.5-.63.75-.96v0c4.65-6.21,6.96-12.49,6.87-18.64l-.01-.95c4.58,5.28,9.68,7.95,15.19,7.95h1.98l1.62-1.13c3.03-2.12,5.57-3.95,7.57-5.44c1.61,2.2,4.08,4.4,7.76,6.39l3.6,1.94l13.31-10.35.01,8.6h23.44v-38.69c2.03-.61,2.79-.62,2.83-.62.57,0,.96.04,1.22.09.11.51.25,1.49.25,3.18v34.91l10.3.77l4.62.12c2.31.24,4.51-.21,6.38-1.33l3.04-1.83v-39.26c-.01-6.48-2.07-11.52-6.1-14.98ZM415.46,147.5c.41-.77.77-1.35,1.07-1.77.4.25.88.57,1.46.96c1.01.68,1.79,1.23,2.41,1.68v12.74c-.94.37-1.44.4-1.59.4-.34,0-1.38,0-3-2.4l-.18-.26c-1.42-1.9-2.11-3.75-2.11-5.67-.01-.79.25-2.57,1.94-5.68Zm-58.74,14.49c-.01.01-.52.52-3.38.3-2.72-.21-5.52-1.36-8.58-4.2-2.93-2.67-4.36-5.16-4.36-7.61c0-.3,0-.5.66-.98l.14-.11c.85-.65,1.75-.95,2.92-.95c3.08,0,6,1.35,8.94,4.12c2.91,2.76,4.33,5.46,4.33,8.25c0,.51-.08.78-.06.78l-.61.4Zm88.88,4.52l-.12-.11c-.11-.1-.21-.19-.3-.27v-13.86l-.58.58.21-5.33c.11-.16.28-.4.56-.73.53-.62,1.01-1.21,1.44-1.78l1.06.44c.69.28.95.42.95.42s0,0,0,0l.05.03.02,23.92c-.6-.8-1.55-1.74-3.29-3.31Z"/><path d="M402.67,324.33l-4.41-2.88c-11.8-7.71-19.6-13.76-23.84-18.49l-.12-.14c-2.23-2.62-4.44-6.59-6.9-12.42l-2.2,4.51c-3.75,7.85-8.49,14.3-14.09,19.16-6.66,5.84-14.85,8.8-24.35,8.8h-3.68l-.48-.16h-7.26l-.05-18.02l6.29-1.23c6.62-1.29,13.42-7.14,20.21-17.37c5.34-8.15,9.54-17.06,12.5-26.51l-6.58-15.21c-4.64-10.71-11.04-15.69-20.15-15.69h-19.83l14.55-13.47c16.7-15.47,19.3-16.19,22.77-16.19c6.54,0,12.38,2.28,17.36,6.77c2.81,2.43,5.81,6.32,9.15,11.88.53-1.17,1.1-2.43,1.7-3.77.6-1.32,1.19-2.52,1.77-3.63-.68.07-1.36.1-2.04.1h-4.16l-6.97-10.46l8.23-9.31c1.6-1.81,2.32-3.55,2.32-5.63v-11.84c-1.29,1.78-2.81,3.58-4.58,5.43-6.83,7.13-13.44,10.59-20.21,10.59-7.82,0-14.75-4.65-20.59-13.82-3.73-5.89-6-11.73-6.75-17.4-1.81,1.25-3.36,2.09-4.8,2.59l-.41.14v28.03h-26.33v-13.82c-3.82,4.73-9.82,7.55-12.5,8.81l-.09.04c-7.92,3.57-14.26,5.3-19.39,5.3-10.84,0-20.54-4.16-28.83-12.35-8.39-8.39-12.64-18.1-12.64-28.89c0-5.13.96-10.03,2.85-14.56l.01-.02-8.86,4.96l2.99-16.27c1.19-6.48,4.7-11.88,10.42-16.07c5.44-4.14,11.39-6.25,17.66-6.25h53.02l-6.48,19.22c-4.41,9.2-10.66,9.68-14.01,9.16l-25.74-3.44c-.8,3.36-1.61,9.22-1.61,19.12c0,6.35,1.34,11.74,3.99,16c2.69,4.3,5.95,6.22,10.58,6.22c1.63,0,3.48-.43,5.49-1.29.64-.26,1.43-.67,2.36-1.21c1.2-.69,2.58-1.5,4.17-2.43c1.65-1.05,3.18-1.98,4.5-2.72c1.36-.77,2.58-1.4,3.62-1.87l5.69-2.59l2.79,3.72v-4.61c0-4.13-.57-5.47-.63-5.61-.14-.3-.83-.66-1.8-.92l-5.77-1.54v-8.93l1.03-1.79c.85-1.49,2.03-2.76,6.75-6.36c4.59-3.44,6.32-4.27,8.07-4.66l1.01-.19h.69c3.68,0,7.27,1.82,10.44,5.27c5.67-4.48,7.1-5.02,9.22-5.23l.7-.04c0,0,0,0,0,0c4.95,0,8.77,3.29,11.42,9.77.02.06.05.12.07.18.06-.06.13-.12.19-.17c5.07-4.54,11.28-8.07,18.47-10.49l2.34-.79l2.37.71c6.58,1.97,12.13,5.91,16.51,11.74c1.12-1.17,2.66-2.3,4.84-3.56l-3.95,1.27v-19.85l1.3-1.96c1.41-2.11,3.63-3.64,9.17-6.3l4.75-2.29c.63-.31.98-.49,1.16-.59l1.83-1.37h12.03v22.65l-2.91.93h.82l.11,12.14c1.85-1.71,4.74-4.15,8.76-7.39c8.18-6.71,10.16-7.63,12.46-8.02l2.75-.46l13.15,7.59l5.71,2.85c.4.21.87.46,1.4.76l12.69-9.48l4.19,1.92c3.43,1.57,6.16,3.31,8.32,5.28l10.57-7.14l3.48,1c6.48,1.85,10.74,3.79,13.4,6.09c4.39,3.76,6.61,9.18,6.61,16.09v40.11l-3.77,2.26c-2.13,1.28-4.63,1.81-7.25,1.55l-4.56-.12-11.76-.88v-36.3c0-.74-.03-1.32-.07-1.76-.16.02-.56.08-1.23.25v39.05h-26.44l-.01-7.04-11.66,9.07-4.46-2.4c-3.02-1.63-5.48-3.52-7.32-5.64-1.8,1.32-3.96,2.86-6.44,4.6l-2.01,1.4h-2.45c-4.94,0-9.56-1.96-13.78-5.84-.48,5.29-2.6,10.62-6.34,15.89c2.1.61,4.48,1.91,7.7,4.13c1.9,1.29,2.89,1.61,3.14,1.68.74-.01,2.42-.21,4.74-3.23l2.33-3.03h17.19l-1.81,9.26c-2.26,11.54-6.9,19.45-13.8,23.51l-.12.07c-4.25,2.39-10.68,3.62-20.19,3.85-.62,1.04-1.55,2.7-2.85,5.26-2.8,5.51-3.69,7.82-3.95,8.62.17,2.9,1.66,8.23,7.56,17.34c2.3,3.5,4.66,6.78,7.01,9.73c2.29,2.87,4.67,5.5,7.09,7.82c7.51,7.17,11.53,7.95,12.91,7.95h7.77v15.66l-24.95,17.55Zm-35.04-41.25l1.27,3.08c.21.5.41,1.01.62,1.53c2.6,6.39,4.84,10.57,7.04,13.16l.09.11c4.05,4.52,11.66,10.4,23.24,17.97l2.71,1.77l22-15.49v-11.1h-4.77c-2.64,0-7.39-1.52-14.99-8.78-2.52-2.42-4.99-5.15-7.36-8.12-2.41-3.02-4.83-6.37-7.18-9.96-5.18-8-7.89-14.43-8.06-19.12l-.01-.24.07-.23c.27-.92,1.18-3.35,4.23-9.36c1.35-2.66,2.5-4.74,3.41-6.18l.43-.69.81-.02c9.33-.17,15.74-1.31,19.6-3.48l.1-.05c6.11-3.59,10.27-10.82,12.36-21.48l1.11-5.69h-12l-1.43,1.86c-2.27,2.96-4.65,4.4-7.26,4.4l-.13-.01c-.36-.03-1.75-.28-4.57-2.2-4.06-2.8-6.59-3.97-8.74-4.04l-2.98-.11l1.86-2.33c.24-.3.49-.61.73-.93c4.45-5.93,6.66-11.9,6.57-17.72l-.05-5.03l2.67,3.08c4.28,4.93,9.01,7.43,14.05,7.43h1.5l1.23-.86c3.03-2.12,5.56-3.94,7.53-5.41l1.21-.91.9,1.22c1.65,2.24,4.09,4.24,7.26,5.95l2.74,1.47l14.95-11.63.01,10.17h20.44v-38.3l1.07-.32c2.11-.63,3.03-.68,3.26-.68.57,0,1.07.04,1.49.12l.98.18.22.97c.13.6.29,1.69.29,3.51v33.52l8.91.67l4.66.12c1.99.21,3.87-.18,5.45-1.13l2.32-1.39v-38.41c0-6-1.87-10.65-5.57-13.82l-.01-.01c-2.31-2.01-6.21-3.75-12.26-5.48l-2.14-.61-11.46,7.74-.88-.9c-2.02-2.08-4.74-3.88-8.32-5.53l-2.58-1.18-12.9,9.63-.87-.55c-.78-.49-1.52-.88-2.06-1.17l-5.76-2.88-12.3-7.1-1.69.28c-1.57.26-3.19.92-11.07,7.39-4.82,3.89-7.96,6.57-9.6,8.21-.49.49-.95.99-1.4,1.49l-2.58,2.9-.15-16.69-7.37-.01-1.33,1.14c-.33.27-1.74,1.27-7.22,3.96-5.22,2.56-7.73,4.32-8.96,6.26l-1.23,1.94-1.28-1.9c-4.15-6.15-9.55-10.26-16.06-12.2l-1.46-.44-1.44.49c-6.8,2.3-12.67,5.62-17.42,9.88-.55.5-1.12,1.06-1.73,1.7l-1.72,1.79-.79-2.35c-.24-.71-.51-1.46-.82-2.25-1.38-3.38-3.78-7.89-8.56-7.89l-.55.03c-1.22.13-2.15.22-8.7,5.48l-1.16.94-.94-1.16c-2.85-3.51-5.9-5.29-9.08-5.29h-.53l-.52.12c-1.31.29-2.79,1.04-6.92,4.13-4.27,3.26-5.32,4.36-5.95,5.46l-.63,1.1v5.83l3.54.95c1.96.52,3.18,1.35,3.74,2.54.35.75.91,2.62.91,6.89v32.85h20.33v-27.16l2.42-.84c1.66-.58,3.6-1.77,6.11-3.74l2.29-1.8.14,2.9c.28,6,2.48,12.27,6.53,18.66c5.25,8.24,11.33,12.43,18.06,12.43c5.9,0,11.81-3.16,18.04-9.67c3.06-3.18,5.38-6.31,6.92-9.29l2.83-5.5v23.29c0,2.79-1,5.28-3.07,7.62l-6.7,7.58l4.8,7.2h2.55c1.53,0,3.05-.21,4.52-.62l3.65-1.02-1.97,3.24c-1.04,1.72-2.09,3.73-3.2,6.15-1.06,2.37-2.02,4.49-2.87,6.31l-1.16,2.47-1.47-2.3c-.41-.64-.84-1.33-1.3-2.06-3.27-5.48-6.13-9.24-8.77-11.52-4.43-4-9.59-6.02-15.37-6.02-2.56,0-5.24,1.04-20.74,15.39l-8.93,8.27h12.18c10.45,0,17.73,5.56,22.9,17.5l7.02,16.23-.16.53c-3.05,9.91-7.43,19.27-13.03,27.81-7.26,10.94-14.7,17.21-22.14,18.66l-3.86.75.03,12.56h4.76l.48.16h3.19c8.75,0,16.28-2.71,22.38-8.06c5.3-4.59,9.79-10.71,13.36-18.2l5.17-10.51ZM225.47,125.66l-2.48,4.57c-.88,1.62-1.57,2.98-2.04,4.06l-.05.12c-1.73,4.14-2.61,8.65-2.61,13.39c0,9.96,3.95,18.96,11.75,26.76c7.7,7.62,16.69,11.48,26.71,11.48c4.7,0,10.63-1.64,18.13-5.02l.07-.03c2.96-1.39,11.95-5.62,13.83-12.47l.66-2.38-.66-2.42c-.33-1.22-.83-2.28-1.49-3.16l-2.3-3.07-3.49,1.59c-.96.44-2.1,1.03-3.39,1.76-1.27.71-2.75,1.61-4.4,2.66-1.63.97-3.03,1.78-4.24,2.48-1.04.6-1.95,1.06-2.69,1.37-2.38,1.01-4.62,1.53-6.66,1.53-5.63,0-9.92-2.5-13.13-7.63-2.95-4.75-4.45-10.66-4.45-17.59c0-9.32.69-16.45,2.05-21.19l.36-1.24l28.37,3.8c3.1.49,7.44-.41,10.83-7.4l5.05-15h-48.84c-5.6,0-10.94,1.9-15.87,5.65-5.11,3.73-8.22,8.51-9.26,14.2l-1.83,9.99l12.07-6.81Zm148.25-13.12v14.83l24.26-7.78v-17.46h-8.04l-1.28.94c-.15.09-.55.3-1.41.72l-4.76,2.29c-4.92,2.36-6.93,3.68-7.98,5.25l-.79,1.21Zm76.69,61.63l-2.69-3.43c-.53-.68-1.41-1.56-3.12-3.12l-.12-.1c-.12-.1-.23-.2-.33-.29l-.48-.44v-10.89l-.73.73.37-9.58.23-.35c.13-.19.34-.48.67-.87.6-.7,1.02-1.23,1.38-1.71l.7-.93l2.14.88c.32.13.55.23.72.31h.07l1.09.64.05.89.05,28.26Zm-3.73-8.71c.26.23.5.45.72.66l-.02-19.26c-.02-.01-.05-.02-.07-.03l-.01-.01c-.23.28-.49.59-.78.93-.09.1-.16.19-.22.27l-.04,1.04.43-.43v16.83Zm-92.02-1.61c-.44,0-.92-.02-1.44-.06-3.33-.26-6.43-1.77-9.48-4.6-3.25-2.96-4.83-5.81-4.83-8.71c0-.93.35-1.52,1.28-2.2l.13-.1c1.1-.84,2.32-1.24,3.81-1.24c3.48,0,6.74,1.48,9.97,4.53c3.23,3.06,4.8,6.11,4.8,9.34c0,.1,0,.2-.01.28l.72.82-2.02,1.3c-.57.43-1.54.64-2.93.64Zm-12.74-13.11c.12,1.96,1.39,3.99,3.86,6.24c2.58,2.4,5.02,3.61,7.68,3.82c1.63.13,2.28-.01,2.44-.06-.03-2.33-1.29-4.65-3.86-7.08-2.64-2.5-5.23-3.71-7.91-3.71-.83,0-1.42.18-2,.64l-.16.12c-.02,0-.04.01-.05.03ZM418.81,163c-.94,0-2.39-.32-4.24-3.06l-.16-.23c-1.6-2.14-2.39-4.29-2.39-6.54c0-1.14.37-3.17,2.13-6.39.39-.73.78-1.37,1.15-1.91l.82-1.18l1.21.76c.41.26.91.58,1.51.99c1.01.69,1.81,1.25,2.44,1.7l.62.45v14.53l-.95.37c-1.07.43-1.75.51-2.14.51Zm-1.82-15.17c-.07.12-.14.25-.21.39v.01c-1.59,2.92-1.76,4.44-1.76,4.96c0,1.58.59,3.14,1.81,4.77l.21.29c.95,1.41,1.57,1.77,1.77,1.77c0,0,.03,0,.09-.01v-10.85c-.49-.35-1.07-.75-1.75-1.21-.05-.05-.11-.09-.16-.12Z" fill="#172259"/></g><g><path d="M214.14,256.29l-10.53-7.77l3.81-2.97c5.12-4.07,7.83-9.6,7.83-15.98c0-6.31-2.34-15.22-13.52-21.93-6.94-4.09-14.65-6.16-22.92-6.16-7.49,0-16.74,2.19-28.21,6.66-7.38,2.78-13.21,4.97-17.48,6.58-5.52,2.07-6.89,2.39-7.1,2.43l-5.16.93v12.99l3.7,1.66c2.55,1.15,5.93,3.68,5.93,12.42v45.58c0,1.16-.45,3.88-3.49,9.06l-5.01,8.68v14.63l8.78-3.83c5.61-2.45,6.95-2.89,7.16-2.95l.74-.27c.39-.17,2.02-.74,6.44-.74c1.97,0,6.08.37,14.45,2.11c7.66,1.6,13.23,2.38,17.01,2.38c9.77,0,20.24-4.02,31.13-11.96l.03-.02c12.24-9.02,18.44-18.71,18.44-28.8-.02-9.01-4.16-16.86-12.03-22.73Zm-30.06-29.67v0c.43.95.64,1.91.64,2.94c0,3.03-2.58,6.24-4.74,8.4-1.42,1.42-4.82,4.09-12.98,8.79-2.27,1.31-4.37,2.59-6.26,3.81l-.23-15.47v-.16c-.14-3.7,1.33-6.73,4.64-9.54c3.47-2.81,7.2-4.17,11.4-4.17c1.03,0,1.99.21,2.94.64c1.05.48,1.91,1.08,2.64,1.84.8.85,1.44,1.8,1.95,2.92ZM166.4,271.36c4.96-3.24,7.12-4.12,7.84-4.35.77.25,3.68,1.58,9.81,8.43c7.7,8.75,7.89,11.77,7.89,11.89c0,1.75-.46,4.44-4.43,7.65-3.48,2.83-6.7,4.21-9.84,4.21-5.82,0-9.69-2.2-12.59-7.21-2.52-4.23-3.89-9.76-4.07-16.44.72-.69,2.24-2.01,5.39-4.18Z"/><path d="M120.47,325.36v-17.32l5.21-9.03c2.97-5.06,3.29-7.5,3.29-8.31v-45.58c0-7.78-2.7-9.99-5.05-11.05l-4.58-2.06v-15.21l6.39-1.15c.02,0,1.23-.26,6.84-2.36c4.27-1.6,10.1-3.79,17.48-6.57c11.65-4.55,21.06-6.76,28.74-6.76c8.54,0,16.51,2.14,23.69,6.37c11.79,7.07,14.26,16.53,14.26,23.23c0,6.86-2.9,12.8-8.39,17.16l-2.26,1.76l8.95,6.6c8.26,6.16,12.62,14.42,12.62,23.9c0,10.59-6.41,20.69-19.05,30.01-11.19,8.15-21.96,12.27-32.05,12.27-3.89,0-9.55-.79-17.32-2.41-8.24-1.72-12.24-2.08-14.14-2.08-4.32,0-5.69.55-5.84.62l-.83.31c-.21.07-1.45.46-7.08,2.92l-10.88,4.74Zm3-16.51v11.94l6.68-2.92c5.53-2.41,7-2.92,7.32-3.01l.65-.25c.65-.29,2.54-.84,6.96-.84c2.04,0,6.26.37,14.75,2.15c7.56,1.58,13.02,2.35,16.7,2.35c9.44,0,19.62-3.93,30.25-11.67c11.85-8.74,17.85-18.02,17.85-27.61c0-8.49-3.95-15.92-11.41-21.49l-12.11-8.94l5.36-4.19c4.74-3.77,7.25-8.89,7.25-14.8c0-5.92-2.22-14.3-12.79-20.65-6.7-3.95-14.15-5.95-22.15-5.95-7.3,0-16.35,2.15-27.67,6.56-7.39,2.79-13.22,4.98-17.5,6.58-5.32,2-6.9,2.41-7.33,2.5l-3.95.71v10.76l2.81,1.27c4.59,2.06,6.82,6.57,6.82,13.78v45.58c0,1.61-.64,4.61-3.7,9.82l-4.79,8.32Zm54.21-8.15c-6.33,0-10.75-2.53-13.89-7.96-2.64-4.43-4.08-10.21-4.27-17.16l-.02-.65.47-.46c.78-.77,2.39-2.14,5.59-4.34l.03-.02c4.94-3.23,7.26-4.22,8.2-4.52l.46-.15.46.15c1.34.43,4.47,2.16,10.47,8.86c7.57,8.6,8.24,12,8.27,12.84c0,2.1-.52,5.25-4.98,8.87-3.76,3.05-7.29,4.54-10.79,4.54Zm-15.14-24.53c.24,6.12,1.53,11.18,3.84,15.04c2.63,4.55,6,6.48,11.3,6.48c2.78,0,5.69-1.27,8.9-3.87c3.76-3.05,3.87-5.43,3.87-6.41-.06-.32-.81-3.36-7.52-10.98-5-5.58-7.72-7.31-8.72-7.81-.93.38-3.01,1.4-6.97,3.98-2.52,1.74-3.94,2.89-4.7,3.57Zm-3.26-22.86l-.27-18.33c-.16-4.12,1.53-7.63,5.17-10.72c3.77-3.05,7.81-4.53,12.37-4.53c1.25,0,2.41.25,3.56.77c1.22.56,2.24,1.27,3.11,2.17.92.96,1.65,2.05,2.23,3.33l.04.08c.5,1.12.74,2.26.74,3.48c0,2.84-1.74,6.03-5.18,9.47-2.12,2.12-6.72,5.25-13.29,9.03-2.25,1.3-4.33,2.56-6.19,3.77l-2.29,1.48Zm17.27-30.58c-3.85,0-7.27,1.26-10.46,3.84-2.94,2.5-4.21,5.07-4.08,8.31v.18l.19,12.81c1.28-.79,2.63-1.6,4.05-2.41c8.02-4.62,11.31-7.2,12.67-8.55c2.78-2.78,4.3-5.38,4.3-7.34c0-.81-.17-1.57-.51-2.32l-.03-.07c-.43-.93-.97-1.73-1.63-2.42-.6-.62-1.31-1.12-2.18-1.51-.75-.35-1.51-.52-2.32-.52Z" fill="#172259"/></g><g><path d="M84.94,176.49c-6.81,3.07-12.2,4.6-16.17,4.6-8.76,0-16.55-3.37-23.36-10.11-6.89-6.89-10.33-14.67-10.33-23.36c0-4.12.75-7.97,2.25-11.57.9-2.02,2.66-5.24,5.28-9.66c2.7-4.42,4.45-7.67,5.28-9.77-2.92,0-5.77.79-8.54,2.36l-7.41,4.16c.82-4.49,3.29-8.24,7.41-11.23c4.12-3.14,8.46-4.72,13.03-4.72h42.22l-2.7,8.09c-1.72,3.59-3.67,5.2-5.84,4.83l-31.9-4.27c-2.92,4.72-4.38,13.93-4.38,27.63c0,7.86,1.72,14.56,5.17,20.1c4.12,6.59,9.84,9.88,17.18,9.88c2.7,0,5.54-.64,8.54-1.91.9-.37,1.97-.92,3.2-1.63c1.24-.71,2.68-1.55,4.32-2.53c1.65-1.05,3.07-1.91,4.27-2.58s2.21-1.2,3.03-1.57c.45.6.75,1.42.9,2.47.01,3.61-3.81,7.2-11.45,10.79Z" fill="url(#eCVXhK8UueL17-fill)"/><path d="M128.52,183.46c-.83-.6-1.72-1.46-2.7-2.58c1.95-2.32,3.59-4.3,4.94-5.95s2.32-2.99,2.92-4.04c2.4-3.97,3.59-8.12,3.59-12.47c0-4.42-1.16-8.12-3.48-11.12-2.47-3.37-5.8-5.05-9.99-5.05-4.72,0-7.08,1.46-7.08,4.38v33.8l-6.85.34c-1.35.07-2.85-.04-4.49-.34v-54.36c0-2.92-.67-5.58-2.02-7.97l-2.02-3.48c2.54-1.42,4.96-2.77,7.24-4.04s4.4-2.54,6.35-3.82h2.58c-.9,8.24-1.35,14.64-1.35,19.2c0,1.05,0,1.98,0,2.81c0,.75.04,1.42.11,2.02l.22,3.37v1.35c0,.15-.02.38-.06.67-.04.3-.09.67-.17,1.12h1.24c.45,0,2.21-1.23,5.28-3.71c2.99-2.47,4.75-3.71,5.28-3.71c5.24,0,9.84,2.77,13.81,8.31c3.59,5.09,5.39,10.33,5.39,15.72.01,10.79-6.24,20.64-18.74,29.55Z" fill="url(#eCVXhK8UueL18-fill)"/><path d="M174.34,180.87c-6.81,0-12.43-2.32-16.85-6.96-4.27-4.72-6.4-10.52-6.4-17.41c0-4.94.75-8.72,2.25-11.34c1.2-2.1,3.67-5.02,7.41-8.76l3.93-3.93c1.8-1.8,3.22-2.84,4.27-3.14c8.23,5.54,12.8,9.4,13.7,11.57L162.1,160.89c1.35,2.92,3.14,4.94,5.39,6.06c1.87.9,4.57,1.35,8.09,1.35l3.82-.45c2.25-.22,3.48-.34,3.71-.34-4.28,8.91-7.2,13.36-8.77,13.36Zm-4.27-35.49c-.53-.6-1.11-1.16-1.74-1.68-.64-.52-1.29-.97-1.97-1.35-.67-.37-1.23-.6-1.68-.67-1.57,0-2.92,1.31-4.04,3.93-.97,2.02-1.46,4.01-1.46,5.95c0,2.55.79,4.19,2.36,4.94l9.66-9.55c-.23-.44-.61-.97-1.13-1.57Z" fill="url(#eCVXhK8UueL19-fill)"/><path d="M272.38,176.49c-6.81,3.07-12.2,4.6-16.17,4.6-8.76,0-16.55-3.37-23.36-10.11-6.89-6.89-10.33-14.67-10.33-23.36c0-4.12.75-7.97,2.25-11.57.9-2.02,2.66-5.24,5.28-9.66c2.7-4.42,4.45-7.67,5.28-9.77-2.92,0-5.77.79-8.54,2.36l-7.41,4.16c.82-4.49,3.29-8.24,7.41-11.23c4.12-3.14,8.46-4.72,13.03-4.72h42.23l-2.7,8.09c-1.72,3.59-3.67,5.2-5.84,4.83l-31.9-4.27c-2.92,4.72-4.38,13.93-4.38,27.63c0,7.86,1.72,14.56,5.17,20.1c4.12,6.59,9.84,9.88,17.18,9.88c2.7,0,5.54-.64,8.54-1.91.9-.37,1.97-.92,3.2-1.63c1.24-.71,2.68-1.55,4.32-2.53c1.65-1.05,3.07-1.91,4.27-2.58s2.21-1.2,3.03-1.57c.45.6.75,1.42.9,2.47-.01,3.61-3.83,7.2-11.46,10.79Z" fill="url(#eCVXhK8UueL20-fill)"/><path d="M319.21,148.3c-3.07,2.62-5.35,4.19-6.85,4.72-.45-2.1-.67-4.38-.67-6.85c0-1.57.11-3.03.34-4.38h-1.91c-.83,0-1.59.3-2.3.9s-1.07,1.27-1.07,2.02v36.05h-10.78v-28.08c0-3.97-.45-6.92-1.35-8.87-1.2-2.55-3.48-4.27-6.85-5.17v-.9c.3-.52,1.87-1.87,4.72-4.04c2.7-2.02,4.38-3.11,5.05-3.26c1.8,0,3.78,1.42,5.95,4.27l3.26,4.27c6.74-5.61,10.48-8.46,11.23-8.54c1.42,0,2.81,1.65,4.16,4.94c1.12,2.85,1.68,5.09,1.68,6.74-.01,1.51-1.54,3.56-4.61,6.18Z" fill="url(#eCVXhK8UueL21-fill)"/><path d="M361.66,173.01c-5.24,5.47-10.11,8.2-14.6,8.2-5.02,0-9.7-3.41-14.04-10.22-3.89-6.14-5.84-11.94-5.84-17.41c0-5.62,2.54-10.74,7.64-15.39c4.27-3.82,9.51-6.78,15.72-8.87c5.76,1.72,10.44,5.43,14.04,11.12c3.37,5.39,5.05,11.23,5.05,17.52.01,4.5-2.65,9.51-7.97,15.05Zm-4.83-25.15c-4.12-3.89-8.54-5.84-13.25-5.84-2.55,0-4.79.75-6.74,2.25-2.17,1.57-3.26,3.59-3.26,6.06c0,4.27,2.13,8.35,6.4,12.24c4.19,3.89,8.46,5.84,12.8,5.84c6.89,0,10.33-2.58,10.33-7.75.01-4.57-2.09-8.84-6.28-12.8Z" fill="url(#eCVXhK8UueL22-fill)"/><path d="M385.47,194.35c-4.04,5.39-8.39,8.09-13.03,8.09l-1.35-2.02l4.27-4.83c2.85-3.22,4.27-6.81,4.27-10.78v-34.93c0-2.25-.41-4.19-1.24-5.84-.3-.52-.77-1.16-1.4-1.91-.64-.75-1.48-1.61-2.53-2.58.6-1.05,2.96-2.58,7.08-4.6c4.42-2.17,7.15-3.71,8.2-4.6h.9l.45,49.19c.07,4.78-1.8,9.72-5.62,14.81Zm-7.53-73.67v-6.85c.45-.67,2.47-1.87,6.06-3.59c2.02-.97,3.61-1.74,4.77-2.3s1.89-.95,2.19-1.18h1.68v9.21l-14.7,4.71Z" fill="url(#eCVXhK8UueL23-fill)"/><path d="M434.43,180.76c-4.87-2.62-7.3-5.73-7.3-9.32l-1.91-.79c-.52.52-1.84,1.59-3.93,3.2-2.1,1.61-5.02,3.73-8.76,6.35-4.19,0-8.2-2.58-12.02-7.75-3.44-4.57-5.17-9.13-5.17-13.7c0-6.66,2.51-12.5,7.52-17.52c1.5-1.5,4.57-4.12,9.21-7.86c5.02-4.12,7.97-6.25,8.87-6.4l10.89,6.29l5.84,2.92c2.84,1.5,4.27,2.73,4.27,3.71c0,.3-.64,1.2-1.91,2.7s-1.95,2.77-2.02,3.82l-.79,20.22c0,.82.15,1.27.45,1.35l.67-.67c0,1.05.82,2.28,2.47,3.71c1.65,1.5,2.54,2.4,2.7,2.7l-9.08,7.04Zm-8.31-35.6c-.9-.82-2.62-2.1-5.17-3.82-2.62-1.8-4.42-2.73-5.39-2.81-2.02,0-4.08,1.95-6.18,5.84-1.8,3.29-2.7,6.18-2.7,8.65c0,3.3,1.12,6.44,3.37,9.43c2.32,3.44,5.05,5.17,8.2,5.17c1.42,0,3.03-.41,4.83-1.24c2.02-.97,3.03-2.21,3.03-3.71v-17.51Z" fill="url(#eCVXhK8UueL24-fill)"/><path d="M491.48,179.98l-4.6-.11-4.49-.34v-29.09c0-3.29-.45-5.61-1.35-6.96-1.12-1.72-3.26-2.58-6.4-2.58-1.27,0-3.07.38-5.39,1.12-2.47.67-3.71,1.61-3.71,2.81v35.38h-10.89v-35.83c0-1.5-1.05-2.85-3.14-4.04-.38-.22-.97-.5-1.8-.84-.82-.34-1.87-.77-3.14-1.29v-1.35l9.77-7.3c3.59,1.65,6.18,3.48,7.75,5.5l2.25,3.15l13.48-9.1c5.24,1.5,8.72,3,10.44,4.49c2.62,2.25,3.93,5.65,3.93,10.22v35.71c-.76.45-1.66.6-2.71.45Z" fill="url(#eCVXhK8UueL25-fill)"/></g><g><path d="M203.44,302.59c-9.84,7.17-18.99,10.75-27.44,10.75-3.32,0-8.56-.75-15.73-2.25s-12.41-2.25-15.73-2.25c-4.07,0-7.06.43-8.99,1.28-1.07.32-3.69,1.39-7.86,3.21v-3.37l4.17-7.22c2.89-4.92,4.33-8.99,4.33-12.2v-45.58c0-9.2-3.21-15.25-9.63-18.13v-3.69c1.18-.21,3.9-1.12,8.18-2.73c4.28-1.6,10.11-3.8,17.49-6.58c10.7-4.17,19.36-6.26,26-6.26c7.17,0,13.75,1.76,19.74,5.3c6.95,4.17,10.43,9.68,10.43,16.53c0,4.49-1.82,8.18-5.46,11.07l-10.27,8.02l17.17,12.68c6.31,4.71,9.47,10.59,9.47,17.65.02,8.04-5.27,15.96-15.87,23.77Zm-14.2-78.72c-.8-1.77-1.85-3.31-3.13-4.65s-2.81-2.41-4.57-3.21-3.61-1.2-5.54-1.2c-5.67,0-10.81,1.87-15.41,5.62-4.81,4.07-7.12,8.93-6.9,14.6l.16,12.84.32,12.68l1.6-.32c.43,0,.75.11.96.32c1.5-1.18,3.32-2.49,5.46-3.93s4.6-2.97,7.38-4.57c7.06-4.06,11.82-7.33,14.28-9.79c4.39-4.39,6.58-8.67,6.58-12.84.02-1.94-.39-3.79-1.19-5.55Zm-1.04,47.26c-6.31-7.06-11.18-10.59-14.6-10.59-1.93,0-5.67,1.82-11.23,5.46-5.46,3.75-8.18,6.37-8.18,7.86c0,8.56,1.66,15.62,4.98,21.18c3.96,6.85,9.95,10.27,17.97,10.27c4.6,0,9.2-1.87,13.8-5.62c4.49-3.64,6.74-7.81,6.74-12.52-.01-3.52-3.17-8.87-9.48-16.04Z" fill="url(#eCVXhK8UueL27-fill)"/><path d="M401.96,314.78c-11.13-7.27-18.56-13-22.31-17.17-1.82-2.14-3.91-6.1-6.26-11.88-1.28-3.21-2.49-5.91-3.61-8.1s-2.11-3.88-2.97-5.06l-9.15,18.78c-3.32,6.96-7.38,12.52-12.2,16.69-5.24,4.6-11.66,6.9-19.26,6.9h-2.41c-.32-.11-.75-.16-1.28-.16v-3.85c8.77-1.71,17.17-8.61,25.2-20.7c6.31-9.63,11.07-20.06,14.28-31.29l-7.7-17.81c-5.89-13.59-14.98-20.38-27.28-20.38c10.16-9.41,15.99-14.12,17.49-14.12c4.6,0,8.67,1.6,12.2,4.81c2.25,1.93,4.87,5.4,7.86,10.43c3.42,5.46,5.88,9.1,7.38,10.91.43-.53,1.31-2.11,2.65-4.73s3.07-6.34,5.22-11.15c3.53-7.7,6.74-11.55,9.63-11.55c1.07,0,3.15,1.07,6.26,3.21c2.99,2.03,5.46,3.05,7.38,3.05c4.17,0,7.86-2.09,11.07-6.26h3.85c-1.82,9.31-5.19,15.41-10.11,18.3-3.43,1.93-10.06,2.89-19.9,2.89-.96,0-3.05,3.16-6.26,9.47s-4.81,10.17-4.81,11.55c0,5.67,2.94,13.05,8.83,22.15c2.46,3.75,4.95,7.2,7.46,10.35c2.51,3.16,5.11,6.02,7.78,8.59c7.06,6.74,13.16,10.11,18.3,10.11v3.85l-17.33,12.17Z" fill="url(#eCVXhK8UueL28-fill)"/></g><path d="M68.73,112.34l24.42,3.88.88-3.88h-25.3Z" fill="#050505"/><path d="M252.71,112.34l27.9,3.88.88-3.88h-28.78Z" fill="#050505"/><path d="M154.06,297.86l-26.79,3.13l1.04,5.79l25.75-8.92Z" fill="#050505"/><path d="M152.35,221.06l-25.14,6.74l1.04,5.79l24.1-12.53Z" fill="#050505"/><path d="M212.36,225.16l-2.34-5.34-15.14,7.07l17.48-1.73Z" fill="#050505"/><path d="M403.52,289.61l-2.97-5.01-14.16,8.86l17.13-3.85Z" fill="#050505"/><path d="M410.96,295.75l-2.44-3.84-14.37,8.41l16.81-4.57Z" fill="#050505"/><path d="M170.4,141.56l8.48-5.86-3.1-2.35-5.38,8.21Z" fill="#050505"/><path d="M424.95,138.96l9.03-4.97-2.85-2.65-6.18,7.62Z" fill="#050505"/><path d="M360.62,147.67l9.03-4.97-2.85-2.65-6.18,7.62Z" fill="#050505"/><path d="M353.59,223.42l-14.77-14.86-4.27,3.99l19.04,10.87Z" fill="#050505"/><polygon points="123.54,173.84 128.86,167.79 131.55,158.57 129.38,151.29 123.54,147.88" fill="#172259"/><polygon points="340.2,149.75 344.13,148.44 351.82,151.48 357.23,159.15 357.34,161.59 351.21,161.59 342.72,155.96" fill="#172259"/><polygon points="413.81,151.34 416.53,145.73 420.4,148.37 421.14,161.28 417.93,161.28 413.81,155.02" fill="#172259"/><path d="" fill="#fff"/></g><path d="M209.28,236.92c0,0,3.95,18.83,8.41,34.84s13.16,36.46,13.16,36.46l56.24,11.12c0,0-1.81-19.56-6.89-41.21s-9.87-30.03-9.87-30.03l-61.05-11.18Z" fill="url(#eCVXhK8UueL44-fill)"/><path d="M319.42,209.78l-49.09,38.31c0,0,4.69,10.46,10.08,36.2c4.88,23.33,6.68,35.04,6.68,35.04l50.29-34.72c0,0-3.05-20.58-7.84-42.13s-10.12-32.7-10.12-32.7Z" fill="url(#eCVXhK8UueL45-fill)"/><g><path d="M209.28,236.92c0,0,7.17-6.18,23.93-16.36s25.45-12.52,25.45-12.52s15.26-1.25,33.22-.05s27.54,1.8,27.54,1.8L270.33,248.1L213.4,237.68l-4.12-.76Z" fill="#360e06"/><path d="M289.83,320.62l50.37-34.78-.24-1.61c-.03-.21-3.12-20.92-7.87-42.31-4.8-21.59-10.09-32.8-10.32-33.26l-.57-1.19-2.62-.36c-2.87-.18-11.93-.76-26.54-1.73-17.95-1.2-33.45.04-33.61.05l-.47.08c-.37.1-9.24,2.56-26.12,12.81-13.51,8.2-20.81,13.8-23.3,15.8l-2.12,1.97.29,1.36c.04.19,4.02,19.1,8.45,35c4.45,15.99,13.19,36.58,13.28,36.78l.54,1.27l58.21,11.94l2.64-1.82Zm44.72-37.23l-45.34,31.3c-.84-7.04-2.82-21.64-6.47-37.17-3.78-16.11-7.41-25-9.12-28.69l11.48-8.96l33.24-25.95c1.84,4.6,5.37,14.41,8.64,29.12c3.96,17.8,6.75,35.11,7.57,40.35Zm-99.98-60.6c14.75-8.96,24.06-13.85,25.46-14.28c2.08-.15,15.4,1,31.68,2.08c9.1.61,19.08-.29,23.72.01l-43.9,34.5-55.4-10.45c3.77-2.79,9.39-6.37,18.44-11.86Zm-14.36,48.26c-3.2-11.47-6.16-24.54-7.55-30.86L257,248.31l11.45,2.1c1.34,3.44,5.17,14.18,9.4,34.43c3.27,15.62,5.16,26.07,6.04,31.21l-51.17-10.12c-1.95-4.7-8.78-21.49-12.51-34.88Z"/></g><rect width="5" height="65.21" rx="0" ry="0" transform="matrix(.1929-.9812 0.9812 0.1929 214.368091 262.154767)"/><rect width="5" height="65.21" rx="0" ry="0" transform="matrix(.1929-.9812 0.9812 0.1929 219.978642 285.063645)"/><rect width="5" height="22.16" rx="0" ry="0" transform="matrix(.9812-.1929 0.1929 0.9812 232.898552 264.084284)"/><rect width="61.17" height="5" rx="0" ry="0" transform="matrix(.7972-.6037 0.6037 0.7972 279.942728 279.158028)"/><circle r="1.74" transform="translate(246.77 277.01)"/><circle r="1.74" transform="translate(228.55 274.14)"/><path d="M331.09,258.34l-27.98,21.63l29.32-16.57-1.34-5.06Z" fill="#050505"/><path d="M333.22,270.48l1.66,3.32-24.03,12.42l22.37-15.74Z" fill="#050505"/><path d="M294.06,252.36l-17.13,9.21l1.83,3.54l15.3-12.75Z" fill="#050505"/><circle r="1.74" transform="translate(317.67 233.69)"/><path d="M247.48,297.36l-21.16-5.76l1.3,3.67l19.86,2.09Z" fill="#050505"/><path d="M282.42,306.92l-21.89-1.32l22.5,5.36" fill="#050505"/><path d="M301.27,172l-2.13,10.09l3.87-.43-1.74-9.66Z" fill="#050505"/><path d="M215.07,235.25c0,0,6.53-5.63,21.81-14.91s23.19-11.41,23.19-11.41s13.91-1.14,30.27-.05s25.09,1.64,25.09,1.64L270.7,245.43l-51.87-9.5-3.76-.68Z" fill="#360e06"/><g><path d="M273.83,239.2c0,0,.11.96-.18,1.69-.36.88-1.32,1.97-2.18,2.33-3.21,1.34-4.68-.27-4.68-.27.03.1.36.68.41.77.68,1.28,2.8,1.47,4.75.44c1.94-1.03,2.97-2.91,2.29-4.18-.04-.1-.35-.71-.41-.78Z" fill="#ed8203"/><g><path d="M267.64,243.47c-.14-.06-.26-.12-.37-.18.13.25.23.51.36.76.06.1.11.21.17.32.13.09.28.17.44.23-.03-.06-.06-.12-.09-.18-.17-.32-.37-.62-.51-.95Z" fill="#c66802"/><path d="M270.66,243.5c.17.33.33.67.5,1.01.13-.05.26-.1.39-.15-.18-.32-.42-.62-.57-.95-.12.03-.22.06-.32.09Z" fill="#c66802"/><path d="M268.74,243.72c.14.27.28.53.41.8.05.09.09.19.13.29.12,0,.24.01.36,0-.2-.36-.4-.71-.58-1.08-.12,0-.22,0-.32-.01Z" fill="#c66802"/><path d="M268.04,243.6c.14.32.35.59.51.9.04.07.07.14.1.22.08.02.17.04.25.05-.17-.37-.33-.75-.52-1.1-.12-.02-.23-.04-.34-.07Z" fill="#c66802"/><path d="M269.38,243.73c.19.35.38.71.58,1.06.09-.01.18-.02.27-.04-.21-.34-.4-.68-.54-1.05-.1.01-.21.02-.31.03Z" fill="#c66802"/><path d="M269.99,243.65c.14.36.34.7.54,1.03.11-.03.23-.06.34-.09-.17-.34-.33-.68-.5-1.02-.13.04-.26.06-.38.08Z" fill="#c66802"/><path d="M271.47,243.21c-.08.03-.15.06-.23.09.15.32.37.62.55.93.05-.03.11-.05.16-.08.07-.03.13-.07.19-.11-.16-.31-.3-.63-.49-.92-.06.03-.12.07-.18.09Z" fill="#c66802"/><path d="M273.12,241.79c-.08.1-.16.2-.24.3.17.32.35.64.54.95.09-.09.17-.18.24-.28-.03-.05-.05-.1-.08-.16-.16-.26-.31-.53-.46-.81Z" fill="#c66802"/><path d="M273.49,241.22c-.06.1-.12.21-.19.31.17.32.36.63.53.95.01.01.01.03.02.04.07-.1.13-.19.18-.29-.05-.1-.1-.2-.15-.31-.12-.24-.26-.47-.39-.7Z" fill="#c66802"/><path d="M273.77,240.47c-.03.14-.07.28-.12.41c0,0,0,0,0,.01.14.26.3.51.43.77.04.08.08.16.12.24.06-.13.1-.25.14-.38-.11-.21-.21-.42-.33-.62-.08-.15-.16-.29-.24-.43Z" fill="#c66802"/><path d="M273.85,239.87c.11.37.31.69.5,1.03.03.05.06.1.09.16.02-.18.01-.35-.01-.52-.2-.34-.4-.68-.58-1.03c0,.1,0,.22,0,.36Z" fill="#c66802"/><path d="M272.41,242.57c.17.31.36.6.54.91.09-.07.17-.15.25-.22-.18-.31-.35-.63-.53-.94-.08.09-.17.17-.26.25Z" fill="#c66802"/><path d="M271.9,242.97c.18.3.33.61.48.92.12-.07.23-.15.34-.23-.18-.3-.36-.59-.53-.89-.1.07-.19.14-.29.2Z" fill="#c66802"/></g><path d="M271.47,243.21c-1.72.72-2.94.59-3.7.31.23.38.48.75.67,1.14.96.3,2.26.14,3.5-.51-.14-.32-.29-.64-.44-.96-.01.01-.02.02-.03.02Z" opacity="0.25" fill="#ffee52"/><path d="M268.67,243.72c.18.35.34.72.5,1.08.58.04,1.24-.04,1.9-.27-.15-.34-.32-.68-.49-1.01-.76.21-1.39.25-1.91.2Z" opacity="0.28" fill="#ffee52"/><g><path d="M269.03,243.74c.21.34.38.71.56,1.07.14-.01.27-.01.42-.03-.19-.35-.38-.7-.57-1.05-.14.01-.27.01-.41.01Z" opacity="0.35" fill="#ffee52"/><path d="M268.67,243.72c.18.35.34.72.5,1.08.03,0,.07,0,.11,0-.19-.37-.37-.73-.59-1.08-.02,0-.02,0-.02,0Z" opacity="0.35" fill="#ffee52"/><path d="M269.76,243.69c.19.34.37.69.56,1.03.06-.01.12-.03.17-.04-.19-.33-.38-.68-.56-1.02-.05.01-.11.03-.17.03Z" opacity="0.35" fill="#ffee52"/><path d="M270.47,243.55c.18.33.36.67.54,1c.02-.01.03-.01.05-.01-.15-.34-.32-.68-.49-1.01-.04,0-.07.01-.1.02Z" opacity="0.35" fill="#ffee52"/></g><path d="M273.65,240.88c-.21.52-.63,1.11-1.12,1.59.18.31.35.62.51.94.71-.62,1.18-1.35,1.34-2.05-.2-.37-.39-.74-.58-1.1-.02.2-.07.42-.15.62Z" opacity="0.32" fill="#7a4103"/><path d="M273.65,240.88c-.14.35-.37.72-.65,1.07.17.33.34.66.51.99.28-.32.51-.65.66-.98-.18-.38-.35-.77-.5-1.16c0,.02-.01.05-.02.08Z" opacity="0.32" fill="#7a4103"/><path d="M273.83,239.2c0,0,.11.96-.18,1.69-.16.4-.46.85-.81,1.25.17.32.36.63.54.94.96-.99,1.34-2.2.86-3.11-.04-.09-.35-.7-.41-.77Z" opacity="0.32" fill="#7a4103"/><path d="M269.08,238.76c-1.95,1.03-2.97,2.91-2.29,4.18.68,1.28,2.8,1.47,4.75.44c1.94-1.03,2.97-2.91,2.29-4.18-.68-1.28-2.8-1.48-4.75-.44Z" fill="#fcd517"/><path d="M269.85,238.42c1.02.4,2.03.89,2.96,1.45.4.24.78.52,1.14.81.14-.53.12-1.05-.12-1.49-.59-1.1-2.27-1.39-3.98-.77Z" fill="#ffbc00"/><path d="M269.08,238.76c-.15.08-.3.17-.44.26.73.1,1.46.22,2.17.4-.51-.25-1.02-.5-1.52-.77-.07.04-.14.07-.21.11Z" fill="#ffbc00"/><path d="M269.48,240.9c-.57-.32-1.22-.73-1.63-1.28-1.11,1.03-1.58,2.34-1.07,3.31.68,1.28,2.8,1.47,4.75.44.82-.43,1.47-1.02,1.9-1.64-.12,0-.24.01-.36.01-1.23-.01-2.5-.23-3.59-.84Z" opacity="0.54" fill="#fff7ab"/><path d="M266.66,241.47c-.14.52-.11,1.03.13,1.47.68,1.28,2.8,1.47,4.75.44.16-.08.31-.18.46-.27-.82.03-1.65-.01-2.45-.17-.84-.17-2.21-.66-2.89-1.47Z" opacity="0.54" fill="#fff7ab"/><path d="M269.48,240.9c-.57-.32-1.22-.73-1.63-1.28-.18.16-.33.33-.47.51.86,1.44,2.57,1.95,4.24,1.95.55,0,1.1-.06,1.64-.12.06-.07.12-.15.17-.22-.12,0-.24.01-.36.01-1.23-.02-2.5-.24-3.59-.85Z" opacity="0.54" fill="#fff7ab"/><g><path d="M271.57,243.11c-2.83,1.35-4.23.39-4.61.1.82,1.03,2.77,1.13,4.57.17c1.47-.78,2.41-2.04,2.49-3.16-.19,1.04-1.06,2.23-2.45,2.89Z" fill="#ffffd7"/></g><path d="M269.29,239.15c-1.55.83-2.43,2.2-1.97,3.07s2.1.91,3.65.09c1.55-.83,2.43-2.2,1.97-3.07-.46-.88-2.1-.92-3.65-.09Z" fill="url(#eCVXhK8UueL97-fill)"/><path d="M268.14,239.97c-.79.75-1.15,1.63-.82,2.25.46.87,2.1.91,3.65.09.37-.2.7-.43.99-.67-.1-.01-.21-.02-.31-.03-1.21-.2-2.61-.75-3.51-1.64Z" fill="url(#eCVXhK8UueL98-fill)"/><path d="M266.79,242.94c0,0-.66-1.5,1.09-3.17.75-.71,1.55-1.11,2.46-1.5-.42.11-.84.27-1.25.49-1.95,1.03-2.98,2.9-2.3,4.18Z" fill="#f9af19"/><g><path d="M270.18,242.24l.19-.36c.01-.02,0-.03-.01-.04l-.42-.23c-.02-.01-.06,0-.07.03l-.19.37c-.01.02,0,.03.01.04l.41.23c.03,0,.07-.01.08-.04" fill="#d67003"/><path d="M269.87,240.95c-.28-.12-.28-.47.01-.73.23-.2.56-.28.78-.18.28.12.28.47-.01.73-.22.19-.55.27-.78.18m.68.58l.92-1.75c.2-.38-.23-.61-.65-.36l-2.81,1.68.49.27.52-.31c.04-.02.09-.03.12-.01l1.09.61c.09.05.26-.01.32-.13" fill="#d67003"/><path d="M269.99,240.72v-.31c0-.03.03-.06.07-.07l.39-.09c.04-.01.07.01.07.04v.31c0,.03-.03.06-.07.07l-.39.09c-.04.01-.07-.01-.07-.04" fill="#d67003"/><path d="M270.18,242.24l.19-.36c.01-.02.04-.15.02-.16l-.01-.01-.44-.1c-.02-.01-.06,0-.07.03l-.17.24-.02.13c-.01.02,0,.03.01.04l.41.23c.03,0,.07-.01.08-.04" fill="#d67003"/><path d="M269.87,240.95c-.28-.12-.28-.47.01-.73.23-.2.56-.28.78-.18.28.12.28.47-.01.73-.22.19-.55.27-.78.18m.68.58l.92-1.75c.2-.38-.23-.61-.65-.36l-2.79,1.54-.02.13.49.27.52-.31c.04-.02.09-.03.12-.01l1.09.61c.09.06.26,0,.32-.12" fill="#d67003"/><path d="M269.99,240.72v-.31c0-.03.03-.06.07-.07l.39-.09c.04-.01.07.01.07.04v.31c0,.03-.03.06-.07.07l-.39.09c-.04.01-.07-.01-.07-.04" fill="#d67003"/><g><path d="M269.89,240.81c-.28-.12-.28-.47.01-.73.23-.2.56-.28.78-.18.28.12.28.47-.01.73-.22.2-.55.28-.78.18m.68.58l.92-1.75c.2-.38-.23-.61-.65-.36l-2.81,1.68.49.27.52-.31c.04-.02.09-.03.12-.01l1.09.61c.09.06.26-.01.32-.13" fill="#ffee52"/><path d="M270.01,240.58v-.31c0-.03.03-.06.07-.07l.39-.09c.04-.01.07.01.07.04v.31c0,.03-.03.06-.07.07l-.39.09c-.04.01-.07-.01-.07-.04" fill="#ffee52"/><path d="M270.2,242.11l.19-.36c.01-.02,0-.03-.01-.04l-.42-.23c-.02-.01-.06,0-.07.03l-.19.37c-.01.02,0,.03.01.04l.41.23c.03,0,.07-.02.08-.04" fill="#ffee52"/></g></g></g><g><path d="M287.11,227.52c0,0,.15,1.33-.25,2.33-.49,1.22-1.81,2.72-3.01,3.22-4.43,1.84-6.46-.38-6.46-.38.04.14.5.94.57,1.07.94,1.76,3.87,2.03,6.55.61c2.68-1.43,4.1-4.01,3.16-5.77-.06-.13-.48-.97-.56-1.08Z" fill="#ed8203"/><g><path d="M278.57,233.42c-.2-.08-.36-.16-.5-.25.17.34.31.7.5,1.04.08.14.15.29.23.43.19.13.39.23.61.32-.04-.08-.08-.17-.13-.25-.25-.42-.52-.83-.71-1.29Z" fill="#c66802"/><path d="M282.72,233.45c.23.46.46.93.68,1.39.18-.06.36-.13.54-.21-.25-.44-.57-.85-.79-1.31-.14.06-.28.09-.43.13Z" fill="#c66802"/><path d="M280.08,233.76c.2.37.38.74.57,1.11.06.13.12.26.18.39.16.01.33.01.49,0-.27-.49-.55-.98-.81-1.48-.15,0-.29-.01-.43-.02Z" fill="#c66802"/><path d="M279.12,233.59c.19.44.48.82.7,1.25.05.1.1.2.14.3.12.02.23.05.35.07-.24-.51-.46-1.03-.72-1.51-.17-.03-.33-.07-.47-.11Z" fill="#c66802"/><path d="M280.96,233.77c.26.49.53.98.8,1.46.12-.01.25-.03.38-.05-.28-.46-.55-.93-.74-1.45-.15.02-.3.03-.44.04Z" fill="#c66802"/><path d="M281.8,233.67c.19.5.46.97.75,1.42.16-.04.31-.08.47-.12-.23-.47-.45-.94-.69-1.41-.18.05-.36.08-.53.11Z" fill="#c66802"/><path d="M283.85,233.06c-.11.04-.21.09-.32.13.2.45.51.85.76,1.28.07-.04.15-.07.22-.11.09-.05.17-.1.26-.15-.22-.43-.42-.87-.67-1.28-.09.05-.17.1-.25.13Z" fill="#c66802"/><path d="M286.12,231.11c-.1.14-.21.28-.33.41.24.44.49.88.74,1.32.12-.12.23-.25.33-.38-.04-.07-.07-.14-.11-.22-.21-.38-.42-.76-.63-1.13Z" fill="#c66802"/><path d="M286.63,230.31c-.08.14-.16.29-.26.43.24.44.49.87.73,1.3.01.02.02.04.03.05.09-.13.18-.27.25-.4-.07-.14-.14-.28-.21-.42-.16-.33-.36-.64-.54-.96Z" fill="#c66802"/><path d="M287.02,229.27c-.04.19-.1.39-.17.57c0,0,0,0,0,.01.19.36.41.7.6,1.06.06.11.11.22.16.34.08-.18.14-.35.19-.53-.15-.29-.29-.58-.46-.86-.11-.19-.21-.39-.32-.59Z" fill="#c66802"/><path d="M287.12,228.45c.16.51.43.96.7,1.42.04.07.08.14.12.21.02-.24.02-.48-.02-.72-.28-.47-.55-.94-.79-1.42c0,.15,0,.32-.01.51Z" fill="#c66802"/><path d="M285.15,232.18c.24.42.5.83.74,1.25.12-.1.24-.2.34-.31-.25-.43-.49-.86-.73-1.3-.11.13-.23.25-.35.36Z" fill="#c66802"/><path d="M284.45,232.73c.25.41.45.85.66,1.27.16-.1.31-.21.46-.32-.24-.41-.5-.82-.74-1.23-.12.1-.25.2-.38.28Z" fill="#c66802"/></g><path d="M283.85,233.06c-2.37.99-4.06.81-5.11.43.32.52.66,1.03.93,1.58c1.32.41,3.12.19,4.82-.7-.2-.45-.4-.89-.61-1.32-.01,0-.02.01-.03.01Z" opacity="0.25" fill="#ffee52"/><path d="M279.98,233.77c.24.49.46.99.69,1.49.81.06,1.71-.06,2.62-.37-.21-.47-.44-.93-.68-1.39-1.04.28-1.91.34-2.63.27Z" opacity="0.28" fill="#ffee52"/><g><path d="M280.49,233.79c.28.48.53.98.78,1.47.19-.01.38-.02.57-.05-.26-.48-.52-.96-.78-1.44-.2.02-.39.02-.57.02Z" opacity="0.35" fill="#ffee52"/><path d="M279.98,233.77c.24.49.46.99.69,1.49.05,0,.1,0,.15,0-.26-.51-.52-1.01-.82-1.49-.01,0-.02,0-.02,0Z" opacity="0.35" fill="#ffee52"/><path d="M281.49,233.73c.26.47.51.95.77,1.42.08-.01.16-.04.24-.05-.27-.46-.52-.93-.77-1.41-.08.01-.16.03-.24.04Z" opacity="0.35" fill="#ffee52"/><path d="M282.47,233.53c.25.46.5.92.75,1.38.02-.01.05-.01.07-.02-.21-.47-.44-.93-.68-1.39-.05.01-.1.02-.14.03Z" opacity="0.35" fill="#ffee52"/></g><path d="M286.86,229.85c-.29.72-.88,1.54-1.55,2.19.25.43.48.86.71,1.3.98-.85,1.63-1.86,1.85-2.83-.27-.51-.53-1.02-.79-1.52-.05.28-.11.58-.22.86Z" opacity="0.32" fill="#7a4103"/><path d="M286.86,229.85c-.19.48-.51.99-.9,1.48.23.45.47.91.71,1.36.39-.43.7-.89.91-1.36-.26-.52-.48-1.06-.68-1.6-.02.03-.03.08-.04.12Z" opacity="0.32" fill="#7a4103"/><path d="M287.11,227.52c0,0,.15,1.33-.25,2.33-.23.56-.63,1.17-1.11,1.73.24.44.5.86.75,1.3c1.32-1.37,1.85-3.04,1.18-4.29-.07-.12-.49-.96-.57-1.07Z" opacity="0.32" fill="#7a4103"/><path d="M280.55,226.92c-2.68,1.43-4.1,4.01-3.16,5.77s3.87,2.03,6.55.6s4.1-4.01,3.16-5.77c-.93-1.76-3.87-2.03-6.55-.6Z" fill="#fcd517"/><path d="M281.61,226.45c1.41.55,2.8,1.22,4.08,2c.55.34,1.07.72,1.57,1.12.2-.73.16-1.44-.16-2.05-.81-1.53-3.13-1.92-5.49-1.07Z" fill="#ffbc00"/><path d="M280.55,226.92c-.21.11-.41.23-.61.36c1.01.13,2.01.3,2.99.55-.7-.35-1.4-.69-2.1-1.06-.08.05-.18.09-.28.15Z" fill="#ffbc00"/><path d="M281.1,229.88c-.79-.44-1.69-1-2.24-1.76-1.53,1.42-2.18,3.23-1.47,4.57.94,1.76,3.87,2.03,6.55.6c1.13-.6,2.02-1.4,2.62-2.26-.17.01-.34.01-.5.01-1.7-.02-3.45-.32-4.96-1.16Z" opacity="0.54" fill="#fff7ab"/><path d="M277.22,230.66c-.19.72-.15,1.42.17,2.03.94,1.76,3.87,2.03,6.55.6.22-.12.43-.24.63-.37-1.13.04-2.28-.02-3.38-.23-1.14-.24-3.03-.92-3.97-2.03Z" opacity="0.54" fill="#fff7ab"/><path d="M281.1,229.88c-.79-.44-1.69-1-2.24-1.76-.24.22-.45.46-.65.7c1.18,1.98,3.54,2.69,5.86,2.69.76,0,1.51-.08,2.27-.17.08-.1.16-.21.23-.31-.17.01-.34.01-.5.01-1.71-.02-3.46-.32-4.97-1.16Z" opacity="0.54" fill="#fff7ab"/><g><path d="M283.99,232.92c-3.9,1.86-5.84.54-6.35.13c1.13,1.42,3.82,1.55,6.3.23c2.03-1.08,3.33-2.82,3.44-4.36-.27,1.46-1.48,3.09-3.39,4Z" fill="#ffffd7"/></g><path d="M280.84,227.45c-2.14,1.14-3.36,3.04-2.72,4.24s2.89,1.26,5.03.12s3.36-3.04,2.72-4.24c-.63-1.2-2.89-1.25-5.03-.12Z" fill="url(#eCVXhK8UueL145-fill)"/><path d="M279.25,228.59c-1.1,1.04-1.59,2.25-1.13,3.11.64,1.2,2.89,1.26,5.03.12.51-.27.97-.59,1.37-.93-.14-.01-.28-.02-.43-.04-1.67-.27-3.6-1.03-4.84-2.26Z" fill="url(#eCVXhK8UueL146-fill)"/><path d="M277.39,232.69c0,0-.91-2.07,1.5-4.38c1.03-.98,2.14-1.53,3.39-2.07-.57.15-1.16.37-1.73.68-2.68,1.42-4.09,4-3.16,5.77Z" fill="#f9af19"/><g><path d="M282.07,231.72l.26-.5c.01-.02.01-.04-.01-.05l-.57-.32c-.03-.02-.08,0-.1.04l-.26.5c-.01.02-.01.04.01.05l.57.32c.03.02.08,0,.1-.04" fill="#d67003"/><path d="M281.65,229.93c-.39-.17-.39-.65.01-1c.31-.28.78-.39,1.08-.25.39.17.39.65-.01,1-.31.28-.78.39-1.08.25m.93.81l1.26-2.41c.27-.52-.32-.85-.9-.5l-3.88,2.32.68.38.72-.43c.05-.03.12-.04.16-.02l1.5.84c.14.07.38-.02.46-.18" fill="#d67003"/><path d="M281.81,229.62v-.43c0-.04.05-.09.1-.1l.54-.13c.06-.01.1.01.1.06v.43c0,.04-.05.09-.1.1l-.54.13c-.06.01-.1-.02-.1-.06" fill="#d67003"/><path d="M282.07,231.72l.26-.5c.01-.02.05-.21.03-.22l-.01-.02-.6-.14c-.03-.02-.08,0-.1.04l-.23.33-.03.18c-.01.02-.01.04.01.05l.57.32c.03.02.08,0,.1-.04" fill="#d67003"/><path d="M281.65,229.93c-.39-.17-.39-.65.01-1c.31-.28.78-.39,1.08-.25.39.17.39.65-.01,1-.31.28-.78.39-1.08.25m.93.81l1.26-2.41c.27-.52-.32-.85-.9-.5l-3.86,2.13-.02.18.68.38.72-.43c.05-.03.12-.04.16-.02l1.5.84c.14.08.38-.01.46-.17" fill="#d67003"/><path d="M281.81,229.62v-.43c0-.04.05-.09.1-.1l.54-.13c.06-.01.1.01.1.06v.43c0,.04-.05.09-.1.1l-.54.13c-.06.01-.1-.02-.1-.06" fill="#d67003"/><g><path d="M281.67,229.75c-.39-.17-.39-.65.01-1c.31-.28.78-.39,1.08-.25.39.17.39.65-.01,1-.3.27-.77.38-1.08.25m.94.8l1.26-2.41c.27-.52-.32-.85-.9-.5l-3.88,2.32.68.38.72-.43c.05-.03.12-.04.16-.02l1.5.84c.14.08.38-.01.46-.18" fill="#ffee52"/><path d="M281.83,229.43v-.43c0-.04.05-.09.1-.1l.54-.13c.06-.01.1.01.1.06v.43c0,.04-.05.09-.1.1l-.54.13c-.05.01-.1-.02-.1-.06" fill="#ffee52"/><path d="M282.1,231.54l.26-.5c.01-.02.01-.04-.01-.05l-.57-.32c-.03-.02-.08,0-.1.04l-.26.5c-.01.02-.01.04.01.05l.57.32c.03.01.08-.01.1-.04" fill="#ffee52"/></g></g></g><g><path d="M299.21,221.08c0,0-.26.94-.8,1.5-.66.69-1.96,1.34-2.9,1.34-3.48.04-4.24-2.01-4.24-2.01-.01.1.08.77.09.87.15,1.44,2.05,2.42,4.24,2.19s3.84-1.58,3.69-3.02c0-.1-.06-.77-.08-.87Z" fill="#ed8203"/><g><path d="M291.87,222.73c-.11-.11-.2-.21-.27-.3.02.28.02.56.05.84.01.12.02.24.04.35.09.13.2.26.32.38-.01-.07-.01-.14-.02-.2-.05-.36-.12-.71-.12-1.07Z" fill="#c66802"/><path d="M294.65,223.88c.03.37.06.75.08,1.12.14.01.28.01.42,0-.05-.37-.15-.73-.17-1.09-.12-.01-.22-.02-.33-.03Z" fill="#c66802"/><path d="M292.79,223.36c.03.3.06.6.08.9.01.1.01.21.01.31.11.05.22.1.33.14-.05-.4-.1-.81-.14-1.22-.1-.03-.19-.08-.28-.13Z" fill="#c66802"/><path d="M292.19,222.99c.01.34.1.68.13,1.03.01.08.01.16.01.24.07.05.14.1.22.14-.02-.41-.03-.82-.07-1.21-.11-.07-.2-.13-.29-.2Z" fill="#c66802"/><path d="M293.38,223.61c.04.4.09.8.14,1.2.09.02.18.05.27.07-.06-.39-.12-.78-.1-1.17-.11-.03-.21-.07-.31-.1Z" fill="#c66802"/><path d="M293.97,223.78c-.01.39.05.78.12,1.16.11.02.23.03.35.04-.03-.38-.05-.76-.08-1.14-.14-.01-.26-.04-.39-.06Z" fill="#c66802"/><path d="M295.51,223.92c-.08,0-.17,0-.25,0c.01.35.11.71.17,1.07.06,0,.12-.01.18-.01.07-.01.14-.02.21-.03-.03-.35-.05-.7-.1-1.04-.07,0-.14.01-.21.01Z" fill="#c66802"/><path d="M297.57,223.22c-.11.07-.22.13-.33.19.04.36.09.72.14,1.09.11-.05.22-.11.33-.17-.01-.06-.01-.12-.02-.18-.04-.31-.08-.62-.12-.93Z" fill="#c66802"/><path d="M298.13,222.83c-.09.07-.19.15-.29.22.04.36.1.72.14,1.08c0,.01,0,.03,0,.04.1-.06.19-.13.28-.2-.01-.11-.02-.23-.03-.34-.02-.27-.06-.54-.1-.8Z" fill="#c66802"/><path d="M298.68,222.24c-.08.12-.17.24-.27.34c0,0,0,0-.01,0c.03.29.09.58.11.88.01.09.01.18.02.27.1-.1.19-.2.27-.3-.02-.23-.04-.47-.07-.7-.02-.17-.04-.33-.05-.49Z" fill="#c66802"/><path d="M298.97,221.71c-.03.38.03.76.08,1.14.01.06.01.12.02.18.08-.16.14-.32.18-.49-.06-.39-.12-.78-.15-1.17-.03.1-.07.22-.13.34Z" fill="#c66802"/><path d="M296.63,223.68c.05.35.11.7.16,1.04.11-.03.21-.07.31-.11-.05-.36-.09-.71-.14-1.07-.11.05-.22.1-.33.14Z" fill="#c66802"/><path d="M296,223.86c.06.34.07.69.1,1.04.13-.03.27-.06.4-.09-.05-.34-.11-.69-.16-1.03-.11.03-.22.06-.34.08Z" fill="#c66802"/></g><path d="M295.51,223.92c-1.86.02-2.95-.56-3.55-1.1.07.44.17.87.2,1.31.78.64,2.05.98,3.43.84-.01-.35-.02-.7-.05-1.05-.01,0-.02,0-.03,0Z" opacity="0.25" fill="#ffee52"/><path d="M292.72,223.34c.03.39.04.79.06,1.19.52.26,1.16.42,1.86.46-.01-.37-.04-.75-.08-1.12-.77-.08-1.38-.28-1.84-.53Z" opacity="0.28" fill="#ffee52"/><g><path d="M293.06,223.5c.06.4.09.8.12,1.2.13.05.26.09.4.13-.05-.39-.09-.79-.13-1.18-.14-.05-.27-.1-.39-.15Z" opacity="0.35" fill="#ffee52"/><path d="M292.72,223.34c.03.39.04.79.06,1.19.03.02.07.03.1.04-.03-.41-.07-.82-.15-1.22c0,0,0-.01-.01-.01Z" opacity="0.35" fill="#ffee52"/><path d="M293.75,223.73c.04.39.09.78.13,1.16.06.01.12.02.18.03-.05-.38-.1-.77-.14-1.16-.06-.01-.12-.02-.17-.03Z" opacity="0.35" fill="#ffee52"/><path d="M294.46,223.86c.04.38.09.75.13,1.13.02,0,.04,0,.05.01-.01-.37-.04-.75-.08-1.12-.03-.01-.07-.02-.1-.02Z" opacity="0.35" fill="#ffee52"/></g><path d="M298.41,222.58c-.39.41-1.01.8-1.64,1.05.05.35.09.71.12,1.06.89-.3,1.6-.81,2.01-1.4-.05-.41-.08-.83-.12-1.24-.1.19-.22.37-.37.53Z" opacity="0.32" fill="#7a4103"/><path d="M298.41,222.58c-.26.27-.61.53-1.01.75.03.37.07.74.11,1.11.38-.19.71-.41.98-.66-.03-.42-.04-.84-.02-1.26-.02.01-.04.04-.06.06Z" opacity="0.32" fill="#7a4103"/><path d="M299.21,221.08c0,0-.26.94-.8,1.5-.3.31-.74.62-1.22.86.04.36.1.72.15,1.08c1.26-.56,2.07-1.54,1.96-2.56-.01-.11-.07-.78-.09-.88Z" opacity="0.32" fill="#7a4103"/><path d="M294.97,218.89c-2.19.23-3.84,1.58-3.69,3.02s2.05,2.42,4.24,2.19s3.84-1.58,3.69-3.02-2.05-2.41-4.24-2.19Z" fill="#fcd517"/><path d="M295.81,218.87c.8.76,1.55,1.58,2.2,2.46.28.38.52.77.75,1.18.33-.44.5-.93.45-1.42-.13-1.26-1.59-2.15-3.4-2.22Z" fill="#ffbc00"/><path d="M294.97,218.89c-.17.02-.34.05-.5.08.64.37,1.27.75,1.86,1.19-.38-.42-.76-.85-1.12-1.28-.09,0-.16.01-.24.01Z" fill="#ffbc00"/><path d="M294.53,221.03c-.41-.51-.86-1.13-1.03-1.79-1.41.54-2.34,1.58-2.23,2.67.15,1.44,2.05,2.42,4.24,2.19.92-.1,1.74-.39,2.38-.81-.11-.04-.23-.09-.34-.13-1.14-.47-2.23-1.15-3.02-2.13Z" opacity="0.54" fill="#fff7ab"/><path d="M291.71,220.5c-.32.43-.49.91-.43,1.41.15,1.44,2.05,2.42,4.24,2.19.18-.02.35-.05.52-.08-.77-.28-1.53-.63-2.21-1.08-.71-.46-1.79-1.43-2.12-2.44Z" opacity="0.54" fill="#fff7ab"/><path d="M294.53,221.03c-.41-.51-.86-1.13-1.03-1.79-.22.09-.43.19-.63.29.26,1.65,1.65,2.77,3.21,3.4.51.21,1.04.36,1.57.5.08-.05.16-.09.24-.14-.11-.04-.23-.09-.34-.13-1.14-.47-2.23-1.15-3.02-2.13Z" opacity="0.54" fill="#fff7ab"/><g><path d="M295.65,223.87c-3.13.19-4.07-1.22-4.31-1.64.37,1.26,2.15,2.08,4.17,1.87c1.66-.17,3-.99,3.5-2-.57.9-1.83,1.67-3.36,1.77Z" fill="#ffffd7"/></g><path d="M295.02,219.33c-1.75.18-3.08,1.13-2.98,2.11s1.6,1.63,3.35,1.45s3.08-1.13,2.98-2.11c-.11-.98-1.61-1.63-3.35-1.45Z" fill="url(#eCVXhK8UueL193-fill)"/><path d="M293.64,219.66c-1.02.4-1.68,1.08-1.61,1.78.1.98,1.6,1.63,3.35,1.45.42-.04.81-.13,1.17-.25-.09-.05-.19-.09-.27-.14-1.05-.64-2.14-1.67-2.64-2.84Z" fill="url(#eCVXhK8UueL194-fill)"/><path d="M291.28,221.91c0,0-.05-1.64,2.2-2.53.96-.38,1.86-.45,2.84-.47-.43-.05-.88-.06-1.35-.01-2.19.22-3.84,1.58-3.69,3.01Z" fill="#f9af19"/><g><path d="M294.68,222.54l.31-.27c.01-.01.02-.03.01-.04l-.3-.37c-.02-.02-.06-.02-.08,0l-.31.27c-.01.01-.02.03-.01.04l.3.37c.02.02.06.02.08,0" fill="#d67003"/><path d="M294.88,221.22c-.22-.22-.08-.54.28-.67.29-.1.63-.05.8.12.22.22.08.54-.28.67-.28.11-.63.06-.8-.12m.41.8l1.5-1.27c.32-.27.01-.66-.47-.58l-3.24.5.35.44.6-.1c.05-.01.09.01.11.03l.78.97c.09.09.27.09.37.01" fill="#d67003"/><path d="M295.08,221.05l.12-.29c.01-.03.06-.05.1-.04l.4.06c.04.01.06.04.05.06l-.12.29c-.01.03-.06.05-.1.04l-.4-.06c-.04,0-.07-.03-.05-.06" fill="#d67003"/><path d="M294.68,222.54l.31-.27c.01-.01.09-.13.08-.14v-.01l-.37-.26c-.02-.02-.06-.02-.08,0l-.25.16-.07.11c-.01.01-.02.03-.01.04l.3.37c.03.02.07.02.09,0" fill="#d67003"/><path d="M294.88,221.22c-.22-.22-.08-.54.28-.67.29-.1.63-.05.8.12.22.22.08.54-.28.67-.28.11-.63.06-.8-.12m.41.8l1.5-1.27c.32-.27.01-.66-.47-.58l-3.17.38-.07.12.35.44.6-.1c.05-.01.09.01.11.03l.78.97c.09.09.27.09.37.01" fill="#d67003"/><path d="M295.08,221.05l.12-.29c.01-.03.05-.05.1-.04l.4.06c.04.01.06.04.05.06l-.12.29c-.01.03-.06.05-.1.04l-.4-.06c-.04,0-.07-.03-.05-.06" fill="#d67003"/><g><path d="M294.95,221.1c-.22-.22-.08-.54.28-.67.29-.1.63-.05.8.12.22.22.08.54-.28.67-.28.11-.63.06-.8-.12m.41.8l1.5-1.27c.32-.27.01-.66-.47-.58l-3.24.5.35.44.6-.1c.05-.01.09.01.11.03l.78.97c.09.09.27.1.37.01" fill="#ffee52"/><path d="M295.15,220.93l.12-.29c.01-.03.05-.05.1-.04l.4.06c.04.01.06.04.05.06l-.12.29c-.01.03-.06.05-.1.04l-.4-.06c-.04,0-.07-.03-.05-.06" fill="#ffee52"/><path d="M294.75,222.42l.31-.27c.01-.01.02-.03.01-.04l-.3-.37c-.02-.02-.06-.02-.08,0l-.31.27c-.01.01-.02.03-.01.04l.3.37c.02.02.06.02.08,0" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL207" transform="translate(1-8)"><path d="M253.73,239.36c0,0-.91.8-1.85,1.01-1.16.26-2.95.05-3.93-.58-3.64-2.34-3.03-4.99-3.03-4.99-.08.1-.44.85-.5.97-.83,1.6.48,3.91,2.91,5.17s5.08.98,5.9-.61c.05-.11.46-.85.5-.97Z" fill="#ed8203"/><g><path d="M244.97,236.05c-.04-.19-.06-.35-.08-.5-.17.3-.36.59-.52.9-.07.13-.14.26-.2.39c0,.2.03.41.07.61.04-.07.08-.15.12-.22.2-.39.37-.8.61-1.18Z" fill="#c66802"/><path d="M247.08,239.15c-.22.41-.45.82-.68,1.22.14.1.28.2.43.29.2-.41.34-.86.57-1.26-.12-.08-.22-.16-.32-.25Z" fill="#c66802"/><path d="M245.49,237.35c-.17.33-.35.66-.53.99-.06.11-.13.22-.2.33.08.12.16.25.25.37.22-.46.45-.91.69-1.36-.08-.11-.15-.22-.21-.33Z" fill="#c66802"/><path d="M245.12,236.55c-.23.36-.36.78-.57,1.16-.05.09-.1.17-.15.26.04.1.08.2.13.3.26-.44.53-.87.75-1.31-.06-.15-.11-.28-.16-.41Z" fill="#c66802"/><path d="M245.94,238.01c-.23.44-.45.89-.68,1.34.07.09.15.17.23.25.2-.45.41-.89.7-1.29-.09-.1-.17-.2-.25-.3Z" fill="#c66802"/><path d="M246.44,238.58c-.27.4-.48.84-.67,1.29.11.1.22.19.33.29.23-.41.47-.82.69-1.24-.13-.11-.24-.23-.35-.34Z" fill="#c66802"/><path d="M247.94,239.79c-.09-.06-.17-.11-.26-.17-.23.38-.37.81-.56,1.22.06.04.13.07.19.11.08.04.16.08.24.11.21-.38.43-.75.6-1.15-.06-.04-.14-.08-.21-.12Z" fill="#c66802"/><path d="M250.56,240.47c-.16-.01-.32-.02-.47-.03-.2.41-.4.81-.6,1.22.15.02.31.04.45.05.03-.06.07-.13.1-.2.18-.34.35-.69.52-1.04Z" fill="#c66802"/><path d="M251.42,240.44c-.14.02-.3.03-.45.03-.2.4-.39.81-.59,1.21-.01.02-.02.03-.02.05.15,0,.29-.01.43-.02.07-.12.14-.24.21-.37.14-.29.27-.6.42-.9Z" fill="#c66802"/><path d="M252.38,240.2c-.17.07-.34.13-.51.17c0,0-.01,0-.01,0-.17.33-.31.67-.48.99-.05.1-.11.2-.17.29.17-.03.33-.07.49-.13.14-.26.28-.52.4-.78.1-.18.19-.36.28-.54Z" fill="#c66802"/><path d="M253.04,239.86c-.3.38-.49.81-.69,1.24-.03.07-.07.13-.1.2.19-.11.37-.23.52-.38.21-.45.41-.9.65-1.32-.1.08-.23.16-.38.26Z" fill="#c66802"/><path d="M249.26,240.3c-.19.39-.36.8-.55,1.19.14.04.27.07.4.1.19-.4.39-.8.59-1.21-.14-.02-.29-.05-.44-.08Z" fill="#c66802"/><path d="M248.49,240.06c-.17.4-.4.77-.6,1.14.16.07.32.12.48.18.18-.39.35-.79.54-1.18-.15-.04-.28-.08-.42-.14Z" fill="#c66802"/></g><path d="M247.94,239.79c-1.95-1.26-2.68-2.6-2.94-3.57-.22.51-.43,1.02-.69,1.5.37,1.19,1.46,2.42,3,3.22.23-.37.46-.75.67-1.13-.02-.01-.03-.02-.04-.02Z" opacity="0.25" fill="#ffee52"/><path d="M245.44,237.28c-.24.43-.5.85-.75,1.28.37.63.92,1.23,1.62,1.75.24-.4.47-.8.68-1.22-.75-.62-1.24-1.24-1.55-1.81Z" opacity="0.28" fill="#ffee52"/><g><path d="M245.68,237.67c-.21.46-.45.89-.69,1.33.1.14.21.27.33.4.22-.44.45-.88.67-1.32-.12-.14-.22-.27-.31-.41Z" opacity="0.35" fill="#ffee52"/><path d="M245.44,237.28c-.24.43-.5.85-.75,1.28.02.04.05.07.07.11.24-.45.49-.9.68-1.37c0-.01,0-.02,0-.02Z" opacity="0.35" fill="#ffee52"/><path d="M246.24,238.38c-.22.43-.44.86-.66,1.3.05.05.11.1.16.15.21-.44.43-.87.65-1.3-.05-.05-.1-.1-.15-.15Z" opacity="0.35" fill="#ffee52"/><path d="M246.89,239c-.21.42-.43.84-.64,1.26.02.01.03.03.05.04.24-.4.47-.8.68-1.22-.03-.02-.06-.05-.09-.08Z" opacity="0.35" fill="#ffee52"/></g><path d="M251.87,240.37c-.69.15-1.59.14-2.42-.03-.19.4-.39.8-.6,1.19c1.13.29,2.22.26,3.05-.08.24-.46.48-.92.72-1.37-.23.13-.49.23-.75.29Z" opacity="0.32" fill="#7a4103"/><path d="M251.87,240.37c-.45.1-1,.13-1.56.09-.22.41-.43.81-.65,1.22.52.06,1.02.06,1.48-.02.26-.46.53-.9.84-1.33-.03.02-.07.03-.11.04Z" opacity="0.32" fill="#7a4103"/><path d="M253.73,239.36c0,0-.91.8-1.85,1.01-.53.12-1.19.14-1.85.06-.2.4-.38.82-.58,1.22c1.69.28,3.2-.19,3.79-1.32.04-.11.45-.85.49-.97Z" opacity="0.32" fill="#7a4103"/><path d="M250.81,234.19c-2.43-1.26-5.08-.98-5.9.61-.83,1.6.48,3.91,2.91,5.17s5.08.99,5.9-.61c.83-1.59-.47-3.91-2.91-5.17Z" fill="#fcd517"/><path d="M251.7,234.74c.31,1.33.53,2.71.61,4.06.03.58.02,1.16-.02,1.74.64-.23,1.15-.62,1.44-1.17.71-1.4-.18-3.32-2.03-4.63Z" fill="#ffbc00"/><path d="M250.81,234.19c-.19-.1-.38-.19-.58-.27.42.82.81,1.65,1.12,2.5-.1-.7-.21-1.4-.29-2.1-.08-.04-.16-.08-.25-.13Z" fill="#ffbc00"/><path d="M248.9,236.12c-.08-.81-.12-1.77.16-2.57-1.84-.41-3.52.04-4.15,1.25-.83,1.6.48,3.91,2.91,5.17c1.02.53,2.08.78,3.02.79-.09-.12-.18-.24-.26-.37-.86-1.27-1.53-2.72-1.68-4.27Z" opacity="0.54" fill="#fff7ab"/><path d="M246.32,233.64c-.63.23-1.13.62-1.41,1.17-.83,1.6.48,3.91,2.91,5.17.2.1.4.19.6.28-.61-.82-1.16-1.7-1.56-2.63-.42-.98-.88-2.73-.54-3.99Z" opacity="0.54" fill="#fff7ab"/><path d="M248.9,236.12c-.08-.81-.12-1.77.16-2.57-.29-.06-.58-.1-.85-.12-.86,1.89-.18,4,1.01,5.72.39.57.83,1.09,1.29,1.6.12.01.23.01.35.02-.09-.12-.18-.24-.26-.37-.88-1.28-1.55-2.73-1.7-4.28Z" opacity="0.54" fill="#fff7ab"/><g><path d="M248.12,239.82c-3.38-1.94-3.4-4.05-3.36-4.65-.47,1.57.81,3.63,3.06,4.8c1.84.95,3.8,1.03,5,.32-1.21.54-3.04.48-4.7-.47Z" fill="#ffffd7"/></g><path d="M250.56,234.68c-1.94-1-3.98-.93-4.54.16-.57,1.09.55,2.79,2.5,3.8c1.94,1.01,3.98.93,4.54-.16s-.56-2.8-2.5-3.8Z" fill="url(#eCVXhK8UueL241-fill)"/><path d="M248.91,234.08c-1.33-.28-2.49-.02-2.89.76-.57,1.09.55,2.79,2.5,3.8.47.24.93.42,1.39.54-.06-.11-.13-.22-.19-.34-.66-1.39-1.1-3.21-.81-4.76Z" fill="url(#eCVXhK8UueL242-fill)"/><path d="M244.91,234.8c0,0,1.07-1.74,4.02-1.13c1.26.26,2.24.8,3.28,1.45-.41-.35-.87-.67-1.39-.94-2.44-1.25-5.08-.97-5.91.62Z" fill="#f9af19"/><g><path d="M248.02,237.78l.51-.06c.02,0,.04-.02.03-.04l-.06-.59c0-.03-.04-.06-.08-.06l-.51.07c-.02,0-.03.02-.03.04l.06.59c.01.03.05.06.08.05" fill="#d67003"/><path d="M249.13,236.55c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.36-.08-.68-.37-.74-.67m-.11,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.71-1.69.07.7.69.31c.05.02.09.07.09.11l.15,1.54c0,.15.19.28.36.26" fill="#d67003"/><path d="M249.45,236.51l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.04-.03-.04-.08-.01-.1" fill="#d67003"/><path d="M248.02,237.78l.51-.06c.02,0,.18-.07.18-.09l.01-.02-.21-.52c0-.03-.04-.06-.08-.06l-.36-.01-.15.07c-.02,0-.03.02-.03.04l.06.59c0,.04.04.07.07.06" fill="#d67003"/><path d="M249.13,236.55c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.36-.08-.68-.37-.74-.67m-.11,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.56-1.77-.15.08.07.7.69.31c.05.02.09.07.09.11l.15,1.54c0,.15.19.28.36.26" fill="#d67003"/><path d="M249.45,236.51l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.04-.03-.04-.08-.01-.1" fill="#d67003"/><g><path d="M249.29,236.47c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.36-.08-.68-.37-.74-.67m-.12,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.71-1.69.07.7.69.31c.05.02.09.07.09.11l.15,1.54c.01.15.2.28.36.26" fill="#ffee52"/><path d="M249.6,236.43l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.03-.03-.04-.08-.01-.1" fill="#ffee52"/><path d="M248.18,237.71l.51-.06c.02,0,.04-.02.03-.04l-.06-.59c0-.03-.04-.06-.08-.06l-.51.07c-.02,0-.03.02-.03.04l.06.59c0,.02.04.05.08.05" fill="#ffee52"/></g></g></g><g><path d="M238.1,223.32c0,0,.26,1.18-.02,2.11-.33,1.14-1.38,2.61-2.41,3.16-3.81,2.05-5.83.24-5.83.24.05.12.53.8.61.91c1,1.5,3.66,1.48,5.94-.05c2.28-1.52,3.32-3.97,2.32-5.46-.07-.1-.52-.82-.61-.91Z" fill="#ed8203"/><g><path d="M230.97,229.39c-.18-.05-.34-.12-.48-.18.19.29.34.6.54.89.08.12.16.25.25.37.18.1.37.17.57.23-.05-.07-.09-.14-.14-.21-.25-.37-.52-.71-.74-1.1Z" fill="#c66802"/><path d="M234.71,229.04c.25.39.49.79.74,1.19.15-.07.31-.15.46-.24-.27-.37-.59-.71-.83-1.1-.13.06-.25.1-.37.15Z" fill="#c66802"/><path d="M232.36,229.55c.21.31.41.63.61.94.07.11.13.22.2.34.15-.01.29-.02.44-.04-.29-.42-.58-.83-.86-1.26-.14.02-.27.02-.39.02Z" fill="#c66802"/><path d="M231.48,229.49c.21.37.51.69.74,1.05.05.08.1.17.15.26.11.01.21.02.32.03-.26-.44-.5-.89-.78-1.29-.15-.01-.3-.03-.43-.05Z" fill="#c66802"/><path d="M233.15,229.48c.28.42.56.83.85,1.24.11-.02.22-.05.33-.08-.3-.39-.58-.79-.79-1.23-.13.03-.26.05-.39.07Z" fill="#c66802"/><path d="M233.9,229.32c.22.43.5.83.8,1.21.14-.05.27-.1.41-.15-.25-.4-.49-.81-.75-1.2-.16.05-.31.1-.46.14Z" fill="#c66802"/><path d="M235.68,228.59c-.09.05-.18.1-.27.14.22.38.53.72.8,1.08.06-.04.12-.07.19-.12.08-.05.15-.11.22-.16-.23-.37-.45-.74-.72-1.08-.08.05-.15.1-.22.14Z" fill="#c66802"/><path d="M237.54,226.63c-.08.13-.17.27-.26.4.26.37.52.75.78,1.11.1-.12.18-.25.26-.37-.04-.06-.08-.12-.12-.18-.21-.32-.44-.64-.66-.96Z" fill="#c66802"/><path d="M237.93,225.87c-.06.13-.12.27-.19.41.25.37.52.73.77,1.11.01.01.02.03.03.04.07-.13.13-.26.19-.38-.07-.12-.15-.24-.23-.36-.17-.29-.38-.55-.57-.82Z" fill="#c66802"/><path d="M238.19,224.9c-.02.18-.05.36-.1.53c0,0,0,0,0,.01.2.31.43.59.63.9.06.09.12.19.18.29.06-.16.1-.33.13-.49-.16-.25-.32-.5-.49-.73-.13-.17-.24-.34-.35-.51Z" fill="#c66802"/><path d="M238.21,224.16c.19.44.47.82.75,1.21.04.06.08.12.12.18c0-.22-.03-.44-.08-.64-.29-.4-.58-.8-.84-1.21.02.13.04.28.05.46Z" fill="#c66802"/><path d="M236.77,227.68c.25.36.52.7.78,1.06.1-.1.19-.2.28-.31-.26-.36-.52-.73-.77-1.1-.1.12-.19.24-.29.35Z" fill="#c66802"/><path d="M236.19,228.24c.26.34.48.72.71,1.08.13-.11.26-.22.39-.33-.26-.35-.52-.69-.77-1.04-.12.1-.22.2-.33.29Z" fill="#c66802"/></g><path d="M235.68,228.59c-2.04,1.1-3.57,1.09-4.55.85.34.44.69.87.98,1.33c1.23.25,2.82-.11,4.27-1.07-.22-.38-.44-.76-.67-1.13-.01.01-.02.02-.03.02Z" opacity="0.25" fill="#ffee52"/><path d="M232.27,229.57c.26.42.51.85.75,1.27.73-.02,1.53-.21,2.32-.57-.23-.41-.48-.8-.74-1.19-.9.36-1.68.49-2.33.49Z" opacity="0.28" fill="#ffee52"/><g><path d="M232.73,229.55c.3.4.56.83.83,1.25.17-.02.34-.05.51-.09-.28-.41-.55-.82-.83-1.23-.18.03-.35.05-.51.07Z" opacity="0.35" fill="#ffee52"/><path d="M232.27,229.57c.26.42.51.85.75,1.27.04,0,.09-.01.13-.01-.28-.43-.55-.86-.87-1.26c0,0-.01,0-.01,0Z" opacity="0.35" fill="#ffee52"/><path d="M233.62,229.4c.27.4.54.8.82,1.21.07-.02.14-.05.21-.07-.28-.39-.55-.79-.82-1.2-.07.02-.14.04-.21.06Z" opacity="0.35" fill="#ffee52"/><path d="M234.48,229.13c.26.39.53.78.8,1.17.02-.01.04-.02.06-.02-.23-.41-.48-.8-.74-1.19-.04.01-.08.03-.12.04Z" opacity="0.35" fill="#ffee52"/></g><path d="M238.09,225.43c-.2.67-.65,1.46-1.19,2.1.26.36.51.73.75,1.1.8-.85,1.3-1.82,1.41-2.71-.29-.43-.57-.87-.85-1.29-.01.27-.05.54-.12.8Z" opacity="0.32" fill="#7a4103"/><path d="M238.09,225.43c-.13.45-.37.94-.68,1.41.25.39.5.77.76,1.16.31-.43.55-.86.7-1.3-.28-.45-.53-.9-.76-1.38-.01.03-.01.08-.02.11Z" opacity="0.32" fill="#7a4103"/><path d="M238.1,223.32c0,0,.26,1.18-.02,2.11-.15.52-.46,1.11-.84,1.65.25.37.53.73.79,1.1c1.06-1.35,1.38-2.89.67-3.95-.06-.1-.51-.82-.6-.91Z" opacity="0.32" fill="#7a4103"/><path d="M232.17,223.37c-2.28,1.52-3.32,3.97-2.32,5.46c1,1.5,3.66,1.48,5.94-.05c2.28-1.52,3.32-3.97,2.32-5.46s-3.66-1.47-5.94.05Z" fill="#fcd517"/><path d="M233.08,222.85c1.32.37,2.62.85,3.84,1.43.53.25,1.03.55,1.51.86.11-.67.02-1.31-.33-1.83-.86-1.29-2.98-1.44-5.02-.46Z" fill="#ffbc00"/><path d="M232.17,223.37c-.18.12-.35.25-.51.38.92.03,1.84.09,2.74.23-.66-.25-1.32-.49-1.98-.76-.09.05-.17.09-.25.15Z" fill="#ffbc00"/><path d="M232.93,225.98c-.75-.32-1.6-.75-2.17-1.38-1.25,1.41-1.67,3.1-.91,4.23c1,1.5,3.66,1.48,5.94-.05.96-.64,1.69-1.44,2.15-2.26-.15.02-.3.04-.45.05-1.54.14-3.13.02-4.56-.59Z" opacity="0.54" fill="#fff7ab"/><path d="M229.51,227.03c-.11.66-.01,1.29.34,1.8c1,1.5,3.66,1.48,5.94-.05.19-.12.36-.26.53-.39-1.01.14-2.05.19-3.06.09-1.05-.1-2.81-.54-3.75-1.45Z" opacity="0.54" fill="#fff7ab"/><path d="M232.93,225.98c-.75-.32-1.6-.75-2.17-1.38-.2.22-.37.45-.52.69c1.24,1.67,3.42,2.09,5.5,1.88.69-.07,1.35-.2,2.02-.35.06-.1.13-.2.18-.3-.15.02-.3.04-.45.05-1.54.14-3.13.02-4.56-.59Z" opacity="0.54" fill="#fff7ab"/><g><path d="M235.8,228.45c-3.34,2.02-5.19,1.01-5.69.69c1.14,1.17,3.57,1.05,5.68-.36c1.72-1.15,2.73-2.83,2.7-4.22-.12,1.32-1.06,2.9-2.69,3.89Z" fill="#ffffd7"/></g><path d="M232.47,223.83c-1.82,1.22-2.74,3.03-2.06,4.05s2.71.87,4.53-.35c1.82-1.21,2.74-3.03,2.06-4.05s-2.71-.87-4.53.35Z" fill="url(#eCVXhK8UueL289-fill)"/><path d="M231.15,224.98c-.89,1.03-1.22,2.16-.74,2.89.68,1.02,2.71.87,4.53-.35.44-.29.82-.62,1.14-.96-.13,0-.26.01-.39,0-1.52-.07-3.32-.58-4.54-1.58Z" fill="url(#eCVXhK8UueL290-fill)"/><path d="M229.85,228.83c0,0-1-1.78.95-4.06.84-.98,1.78-1.57,2.86-2.16-.5.19-1,.44-1.49.76-2.28,1.52-3.32,3.97-2.32,5.46Z" fill="#f9af19"/><g><path d="M233.96,227.55l.19-.48c.01-.02,0-.04-.02-.05l-.54-.24c-.03-.01-.07.01-.09.04l-.19.48c-.01.02,0,.04.02.05l.54.23c.03.02.08,0,.09-.03" fill="#d67003"/><path d="M233.42,225.98c-.37-.12-.4-.55-.08-.9.25-.28.66-.42.95-.33.37.12.4.55.08.9-.25.28-.66.42-.95.33m.92.64l.92-2.28c.2-.49-.36-.73-.85-.37l-3.27,2.43.64.28.6-.45c.05-.03.1-.05.14-.03l1.42.61c.13.06.33-.04.4-.19" fill="#d67003"/><path d="M233.54,225.68l-.03-.38c0-.04.03-.08.08-.1l.48-.16c.05-.02.09,0,.09.04l.03.38c0,.04-.03.08-.08.1l-.48.16c-.05.02-.09,0-.09-.04" fill="#d67003"/><path d="M233.96,227.55l.19-.48c.01-.02.03-.19.01-.2l-.01-.01-.56-.07c-.03-.01-.07.01-.09.04l-.18.32-.01.16c-.01.02,0,.04.02.05l.54.23c.03.01.08-.01.09-.04" fill="#d67003"/><path d="M233.42,225.98c-.37-.12-.4-.55-.08-.9.25-.28.66-.42.95-.33.37.12.4.55.08.9-.25.28-.66.42-.95.33m.92.64l.92-2.28c.2-.49-.36-.73-.85-.37l-3.27,2.26v.17l.64.28.6-.45c.05-.03.1-.05.14-.03l1.42.61c.13.06.33-.04.4-.19" fill="#d67003"/><path d="M233.54,225.68l-.03-.38c0-.04.03-.08.08-.1l.48-.16c.05-.02.09,0,.09.04l.03.38c0,.04-.03.08-.08.1l-.48.16c-.05.02-.09,0-.09-.04" fill="#d67003"/><g><path d="M233.43,225.81c-.37-.12-.4-.55-.08-.9.25-.28.66-.42.95-.33.37.12.4.55.08.9-.26.28-.66.42-.95.33m.91.64l.92-2.28c.2-.49-.36-.73-.85-.37l-3.27,2.43.64.28.6-.45c.05-.03.1-.05.14-.03l1.42.61c.14.06.34-.04.4-.19" fill="#ffee52"/><path d="M233.54,225.51l-.03-.38c0-.04.03-.08.08-.1l.48-.16c.05-.02.09,0,.09.04l.03.38c0,.04-.03.08-.08.1l-.48.16c-.04.02-.08,0-.09-.04" fill="#ffee52"/><path d="M233.97,227.38l.19-.48c.01-.02,0-.04-.02-.05l-.54-.24c-.03-.01-.07.01-.09.04l-.19.48c-.01.02,0,.04.02.05l.54.23c.03.02.08,0,.09-.03" fill="#ffee52"/></g></g></g><g><path d="M245.28,225.63c0,0-.91.8-1.85,1.01-1.16.26-2.95.05-3.93-.58-3.64-2.34-3.03-4.99-3.03-4.99-.08.1-.44.85-.5.97-.83,1.6.48,3.91,2.91,5.17s5.08.98,5.9-.61c.05-.11.46-.85.5-.97Z" fill="#ed8203"/><g><path d="M236.52,222.32c-.04-.19-.06-.35-.08-.5-.17.3-.36.59-.52.9-.07.13-.14.26-.2.39c0,.2.03.41.07.61.04-.07.08-.15.12-.22.2-.39.37-.8.61-1.18Z" fill="#c66802"/><path d="M238.63,225.42c-.22.41-.45.82-.68,1.22.14.1.28.2.43.29.2-.41.34-.86.57-1.26-.12-.08-.22-.16-.32-.25Z" fill="#c66802"/><path d="M237.04,223.61c-.17.33-.35.66-.53.99-.06.11-.13.22-.2.33.08.12.16.25.25.37.22-.46.45-.91.69-1.36-.08-.11-.15-.22-.21-.33Z" fill="#c66802"/><path d="M236.67,222.82c-.23.36-.36.78-.57,1.16-.05.09-.1.17-.15.26.04.1.08.2.13.3.26-.44.53-.87.75-1.31-.06-.15-.11-.28-.16-.41Z" fill="#c66802"/><path d="M237.49,224.28c-.23.44-.45.89-.68,1.34.07.09.15.17.23.25.2-.45.41-.89.7-1.29-.09-.1-.17-.2-.25-.3Z" fill="#c66802"/><path d="M237.99,224.85c-.27.4-.48.84-.67,1.29.11.1.22.19.33.29.23-.41.47-.82.69-1.24-.13-.12-.24-.23-.35-.34Z" fill="#c66802"/><path d="M239.49,226.06c-.09-.06-.17-.11-.26-.17-.23.38-.37.81-.56,1.22.06.04.13.07.19.11.08.04.16.08.24.11.21-.38.43-.75.6-1.15-.06-.04-.14-.08-.21-.12Z" fill="#c66802"/><path d="M242.11,226.74c-.16-.01-.32-.02-.47-.03-.2.41-.4.81-.6,1.22.15.02.31.04.45.05.03-.06.07-.13.1-.2.18-.35.35-.69.52-1.04Z" fill="#c66802"/><path d="M242.97,226.71c-.14.02-.3.03-.45.03-.2.4-.39.81-.59,1.21-.01.02-.02.03-.02.05.15,0,.29-.01.43-.02.07-.12.14-.24.21-.37.14-.3.27-.6.42-.9Z" fill="#c66802"/><path d="M243.93,226.47c-.17.07-.34.13-.51.17c0,0-.01,0-.01,0-.17.33-.31.67-.48.99-.05.1-.11.2-.17.29.17-.03.33-.07.49-.13.14-.26.28-.52.4-.78.1-.18.19-.36.28-.54Z" fill="#c66802"/><path d="M244.59,226.12c-.3.38-.49.81-.69,1.24-.03.07-.07.13-.1.2.19-.11.37-.23.52-.38.21-.45.41-.9.65-1.32-.1.08-.23.17-.38.26Z" fill="#c66802"/><path d="M240.81,226.57c-.19.39-.36.8-.55,1.19.14.04.27.07.4.1.19-.4.39-.8.59-1.21-.14-.02-.29-.05-.44-.08Z" fill="#c66802"/><path d="M240.04,226.33c-.17.4-.4.77-.6,1.14.16.07.32.12.48.18.18-.39.35-.79.54-1.18-.15-.04-.28-.09-.42-.14Z" fill="#c66802"/></g><path d="M239.49,226.06c-1.95-1.26-2.68-2.6-2.94-3.57-.22.51-.43,1.02-.69,1.5.37,1.19,1.46,2.42,3,3.22.23-.37.46-.75.67-1.13-.02-.01-.03-.02-.04-.02Z" opacity="0.25" fill="#ffee52"/><path d="M236.99,223.55c-.24.43-.5.85-.75,1.28.37.63.92,1.23,1.62,1.75.24-.4.47-.8.68-1.22-.75-.63-1.24-1.25-1.55-1.81Z" opacity="0.28" fill="#ffee52"/><g><path d="M237.23,223.94c-.21.46-.45.89-.69,1.33.1.14.21.27.33.4.22-.44.45-.88.67-1.32-.12-.14-.22-.28-.31-.41Z" opacity="0.35" fill="#ffee52"/><path d="M236.99,223.55c-.24.43-.5.85-.75,1.28.02.04.05.07.07.11.24-.45.49-.9.68-1.37c0-.02,0-.02,0-.02Z" opacity="0.35" fill="#ffee52"/><path d="M237.79,224.65c-.22.43-.44.86-.66,1.3.05.05.11.1.16.15.21-.44.43-.87.65-1.3-.05-.05-.1-.1-.15-.15Z" opacity="0.35" fill="#ffee52"/><path d="M238.44,225.27c-.21.42-.43.84-.64,1.26.02.01.03.03.05.04.24-.4.47-.8.68-1.22-.03-.02-.06-.05-.09-.08Z" opacity="0.35" fill="#ffee52"/></g><path d="M243.42,226.64c-.69.15-1.59.14-2.42-.03-.19.4-.39.8-.6,1.19c1.13.29,2.22.26,3.05-.08.24-.46.48-.92.72-1.37-.23.12-.49.23-.75.29Z" opacity="0.32" fill="#7a4103"/><path d="M243.42,226.64c-.45.1-1,.13-1.56.09-.22.41-.43.81-.65,1.22.52.06,1.02.06,1.48-.02.26-.46.53-.9.84-1.33-.03.01-.07.03-.11.04Z" opacity="0.32" fill="#7a4103"/><path d="M245.28,225.63c0,0-.91.8-1.85,1.01-.53.12-1.19.14-1.85.06-.2.4-.38.82-.58,1.22c1.69.28,3.2-.19,3.79-1.32.04-.11.45-.85.49-.97Z" opacity="0.32" fill="#7a4103"/><path d="M242.36,220.46c-2.43-1.26-5.08-.98-5.9.61-.83,1.6.48,3.91,2.91,5.17s5.08.99,5.9-.61c.83-1.6-.47-3.91-2.91-5.17Z" transform="translate(0 0.000001)" fill="#fcd517"/><path d="M243.25,221.01c.31,1.33.53,2.71.61,4.06.03.58.02,1.16-.02,1.74.64-.23,1.15-.62,1.44-1.17.71-1.4-.18-3.33-2.03-4.63Z" fill="#ffbc00"/><path d="M242.36,220.46c-.19-.1-.38-.19-.58-.27.42.82.81,1.65,1.12,2.5-.1-.7-.21-1.4-.29-2.1-.08-.04-.16-.09-.25-.13Z" fill="#ffbc00"/><path d="M240.45,222.39c-.08-.81-.12-1.77.16-2.57-1.84-.41-3.52.04-4.15,1.25-.83,1.6.48,3.91,2.91,5.17c1.02.53,2.08.78,3.02.79-.09-.12-.18-.24-.26-.37-.86-1.27-1.53-2.73-1.68-4.27Z" opacity="0.54" fill="#fff7ab"/><path d="M237.88,219.9c-.63.23-1.13.62-1.41,1.17-.83,1.6.48,3.91,2.91,5.17.2.1.4.19.6.28-.61-.82-1.16-1.7-1.56-2.63-.42-.97-.89-2.72-.54-3.99Z" opacity="0.54" fill="#fff7ab"/><path d="M240.45,222.39c-.08-.81-.12-1.77.16-2.57-.29-.06-.58-.1-.85-.12-.86,1.89-.18,4,1.01,5.72.39.57.83,1.09,1.29,1.6.12.01.23.01.35.02-.09-.12-.18-.24-.26-.37-.88-1.28-1.55-2.74-1.7-4.28Z" opacity="0.54" fill="#fff7ab"/><g><path d="M239.67,226.09c-3.38-1.94-3.4-4.05-3.36-4.65-.47,1.57.81,3.63,3.06,4.8c1.84.95,3.8,1.03,5,.32-1.21.54-3.04.48-4.7-.47Z" fill="#ffffd7"/></g><path d="M242.11,220.95c-1.94-1-3.98-.93-4.54.16-.57,1.09.55,2.79,2.5,3.8c1.94,1.01,3.98.93,4.54-.16.56-1.1-.56-2.8-2.5-3.8Z" fill="url(#eCVXhK8UueL337-fill)"/><path d="M240.46,220.35c-1.33-.28-2.49-.02-2.89.76-.57,1.09.55,2.79,2.5,3.8.47.24.93.42,1.39.54-.06-.11-.13-.22-.19-.34-.66-1.39-1.1-3.21-.81-4.76Z" fill="url(#eCVXhK8UueL338-fill)"/><path d="M236.46,221.07c0,0,1.07-1.74,4.02-1.13c1.26.26,2.24.8,3.28,1.45-.41-.35-.87-.67-1.39-.94-2.44-1.25-5.08-.98-5.91.62Z" fill="#f9af19"/><g><path d="M239.57,224.05l.51-.06c.02,0,.04-.02.03-.04l-.06-.59c0-.03-.04-.06-.08-.06l-.51.07c-.02,0-.03.02-.03.04l.06.59c.01.02.05.05.08.05" fill="#d67003"/><path d="M240.69,222.82c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.37-.09-.69-.37-.74-.67m-.12,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.71-1.69.07.7.69.31c.05.02.09.07.09.11l.15,1.54c0,.15.19.28.36.26" fill="#d67003"/><path d="M241,222.77l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.04-.03-.04-.07-.01-.1" fill="#d67003"/><path d="M239.57,224.05l.51-.06c.02,0,.18-.07.18-.09l.01-.02-.21-.52c0-.03-.04-.06-.08-.06l-.36-.01-.15.07c-.02,0-.03.02-.03.04l.06.59c0,.03.04.06.07.06" fill="#d67003"/><path d="M240.69,222.82c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.37-.09-.69-.37-.74-.67m-.12,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.56-1.77-.15.08.07.7.69.31c.05.02.09.07.09.11l.15,1.54c0,.15.19.28.36.26" fill="#d67003"/><path d="M241,222.78l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.04-.04-.04-.08-.01-.1" fill="#d67003"/><g><path d="M240.84,222.74c-.07-.38.28-.62.75-.51.37.09.69.38.74.67.07.38-.28.62-.75.51-.36-.08-.68-.37-.74-.67m-.12,1.11l2.44-.3c.52-.06.46-.67-.09-.93l-3.71-1.69.07.7.69.31c.05.02.09.07.09.11l.15,1.54c.01.15.2.28.36.26" fill="#ffee52"/><path d="M241.15,222.7l.32-.22c.03-.02.09-.01.13.02l.37.34c.04.03.04.08.01.1l-.32.22c-.03.02-.09.01-.13-.02l-.37-.34c-.03-.03-.04-.08-.01-.1" fill="#ffee52"/><path d="M239.73,223.97l.51-.06c.02,0,.04-.02.03-.04l-.06-.59c0-.03-.04-.06-.08-.06l-.51.07c-.02,0-.03.02-.03.04l.06.59c0,.03.04.06.08.05" fill="#ffee52"/></g></g></g><g><path d="M289.13,208.32c0,0,1.49.87,2.22,2.05.88,1.45,1.42,3.97,1.02,5.59-1.5,6.01-5.36,6.4-5.36,6.4.18.06,1.35.21,1.54.23c2.54.39,5.08-2.44,5.67-6.32s-1-7.33-3.54-7.72c-.18-.02-1.38-.24-1.55-.23Z" fill="#ed8203"/><g><path d="M288.67,221.7c-.23.14-.45.24-.64.33.49.08.97.22,1.46.29.21.03.42.07.63.1.27-.1.54-.22.8-.38-.12-.02-.24-.04-.36-.06-.64-.09-1.27-.13-1.89-.28Z" fill="#c66802"/><path d="M291.9,217.42c.66.11,1.31.24,1.97.36.07-.23.14-.47.19-.72-.65-.08-1.32-.06-1.96-.19-.06.2-.13.37-.2.55Z" fill="#c66802"/><path d="M290.18,220.4c.53.08,1.06.17,1.58.27.18.03.36.07.54.12.13-.16.26-.33.38-.51-.72-.1-1.44-.19-2.16-.31-.1.15-.22.29-.34.43Z" fill="#c66802"/><path d="M289.27,221.27c.6.14,1.22.13,1.83.24.14.02.28.06.42.09.11-.1.23-.2.34-.31-.71-.15-1.42-.32-2.12-.42-.16.14-.32.28-.47.4Z" fill="#c66802"/><path d="M290.87,219.49c.71.11,1.41.21,2.13.3.08-.14.16-.28.24-.43-.7-.06-1.39-.15-2.07-.35-.1.17-.2.33-.3.48Z" fill="#c66802"/><path d="M291.42,218.54c.67.19,1.36.26,2.05.32.08-.19.16-.38.23-.58-.66-.12-1.33-.26-1.99-.37-.09.23-.19.43-.29.63Z" fill="#c66802"/><path d="M292.36,215.96c-.04.15-.08.29-.11.43.62.13,1.27.13,1.91.19.02-.1.04-.2.06-.31.02-.13.03-.26.04-.38-.61-.11-1.22-.23-1.84-.29-.02.12-.03.25-.06.36Z" fill="#c66802"/><path d="M292.08,212.1c.06.21.12.44.17.66.64.09,1.29.17,1.93.25-.04-.22-.09-.43-.14-.64-.1-.02-.21-.03-.31-.05-.54-.07-1.1-.15-1.65-.22Z" fill="#c66802"/><path d="M291.65,210.95c.09.19.17.39.25.6.64.09,1.28.16,1.91.25.03,0,.05.01.08.01-.07-.2-.14-.39-.22-.57-.2-.04-.39-.08-.6-.11-.47-.08-.95-.12-1.42-.18Z" fill="#c66802"/><path d="M290.88,209.75c.17.19.33.4.46.62c0,0,0,.01,0,.01.52.08,1.04.11,1.56.2.16.03.32.06.47.09-.12-.22-.25-.42-.39-.61-.41-.07-.83-.14-1.24-.19-.29-.03-.57-.07-.86-.12Z" fill="#c66802"/><path d="M290.11,209.02c.65.23,1.32.29,2,.37.11.01.21.03.31.04-.23-.21-.49-.39-.75-.53-.7-.07-1.4-.15-2.09-.28.16.11.34.24.53.4Z" fill="#c66802"/><path d="M292.45,213.94c.62.08,1.25.13,1.87.19-.01-.2-.03-.4-.05-.59-.63-.08-1.27-.16-1.9-.24.03.21.06.42.08.64Z" fill="#c66802"/><path d="M292.48,215.08c.62.05,1.22.18,1.83.29.02-.24.02-.49.02-.73-.62-.07-1.23-.12-1.84-.19c0,.23,0,.43-.01.63Z" fill="#c66802"/></g><path d="M292.36,215.96c-.8,3.22-2.29,4.82-3.49,5.62.79.07,1.58.11,2.35.25c1.45-1.06,2.6-3.09,2.98-5.54-.61-.14-1.22-.27-1.84-.38.01.02.01.03,0,.05Z" opacity="0.25" fill="#ffee52"/><path d="M290.11,220.51c.69.13,1.38.28,2.07.43.68-.79,1.25-1.81,1.63-3-.65-.15-1.31-.26-1.96-.36-.5,1.29-1.11,2.24-1.74,2.93Z" opacity="0.28" fill="#ffee52"/><g><path d="M290.53,220c.71.07,1.42.21,2.12.33.14-.2.27-.41.39-.63-.7-.1-1.4-.2-2.1-.3-.13.21-.27.41-.41.6Z" opacity="0.35" fill="#ffee52"/><path d="M290.11,220.51c.69.13,1.38.28,2.07.43.04-.05.08-.1.12-.15-.72-.12-1.44-.24-2.17-.3-.01,0-.01.01-.02.02Z" opacity="0.35" fill="#ffee52"/><path d="M291.23,218.91c.69.1,1.37.2,2.06.3.05-.09.09-.19.13-.29-.68-.08-1.37-.18-2.05-.29-.04.09-.09.19-.14.28Z" opacity="0.35" fill="#ffee52"/><path d="M291.78,217.75c.67.1,1.34.19,2,.28.01-.03.02-.06.03-.09-.65-.15-1.31-.26-1.96-.36-.02.06-.05.11-.07.17Z" opacity="0.35" fill="#ffee52"/></g><path d="M291.35,210.37c.52.86.92,2.09,1.07,3.29.63.08,1.26.16,1.89.27-.12-1.67-.67-3.12-1.51-4.1-.73-.11-1.46-.23-2.19-.35.28.26.54.56.74.89Z" opacity="0.32" fill="#7a4103"/><path d="M291.35,210.37c.35.57.63,1.3.83,2.07.65.11,1.3.21,1.95.31-.15-.73-.39-1.41-.7-1.99-.74-.14-1.47-.31-2.18-.53.03.05.07.09.1.14Z" opacity="0.32" fill="#7a4103"/><path d="M289.13,208.32c0,0,1.49.87,2.22,2.05.4.66.73,1.56.93,2.48.64.09,1.28.14,1.92.23-.4-2.42-1.72-4.25-3.53-4.52-.17-.03-1.37-.25-1.54-.24Z" opacity="0.32" fill="#7a4103"/><path d="M283.46,214.64c-.59,3.88,1,7.33,3.54,7.72s5.08-2.44,5.67-6.32-1-7.33-3.54-7.72-5.08,2.44-5.67,6.32Z" fill="#fcd517"/><path d="M283.79,213.18c1.66-1.03,3.42-1.96,5.22-2.68.77-.31,1.57-.55,2.37-.77-.6-.77-1.37-1.28-2.25-1.41-2.21-.34-4.41,1.76-5.34,4.86Z" fill="#ffbc00"/><path d="M283.46,214.64c-.05.31-.07.6-.09.9.92-.94,1.86-1.85,2.88-2.67-.9.46-1.8.92-2.71,1.36-.03.13-.06.27-.08.41Z" fill="#ffbc00"/><path d="M286.95,216.35c-1.06.48-2.34.97-3.55.97.29,2.68,1.67,4.75,3.6,5.04c2.54.39,5.08-2.44,5.67-6.32.25-1.63.11-3.18-.32-4.46-.12.18-.25.35-.38.53-1.33,1.75-2.99,3.32-5.02,4.24Z" opacity="0.54" fill="#fff7ab"/><path d="M284.77,220.97c.6.75,1.36,1.25,2.23,1.38c2.54.39,5.08-2.44,5.67-6.32.05-.32.08-.63.1-.94-.83,1.21-1.77,2.35-2.85,3.32-1.12,1.01-3.28,2.45-5.15,2.56Z" opacity="0.54" fill="#fff7ab"/><path d="M286.95,216.35c-1.06.48-2.34.97-3.55.97.05.42.13.83.23,1.21c2.96.3,5.51-1.6,7.29-4c.59-.79,1.09-1.63,1.57-2.47-.04-.16-.09-.32-.14-.48-.12.18-.25.35-.38.53-1.33,1.75-2.99,3.32-5.02,4.24Z" opacity="0.54" fill="#fff7ab"/><g><path d="M292.33,215.7c-1.08,5.47-3.93,6.46-4.75,6.68c2.34-.08,4.55-2.76,5.1-6.35.45-2.93-.35-5.61-1.87-6.92c1.28,1.4,2.04,3.91,1.52,6.59Z" fill="#ffffd7"/></g><path d="M284.24,214.76c-.47,3.09.56,5.82,2.3,6.08s3.53-2.03,4-5.12-.56-5.82-2.3-6.08c-1.74-.27-3.53,2.02-4,5.12Z" fill="url(#eCVXhK8UueL385-fill)"/><path d="M284.19,217.27c.23,1.93,1.11,3.38,2.35,3.57c1.74.26,3.53-2.03,4-5.12.11-.74.14-1.46.09-2.13-.12.14-.24.28-.37.41-1.57,1.52-3.84,2.94-6.07,3.27Z" fill="url(#eCVXhK8UueL386-fill)"/><path d="M287,222.35c0,0-2.85-.66-3.38-4.92-.23-1.82.06-3.4.47-5.11-.28.71-.5,1.49-.63,2.31-.59,3.88,1,7.34,3.54,7.72Z" fill="#f9af19"/><g><path d="M289.61,216.77l-.32-.66c-.01-.03-.04-.04-.06-.03l-.77.35c-.04.02-.06.09-.04.14l.32.66c.01.03.04.04.06.03l.77-.35c.04-.02.06-.09.04-.14" fill="#d67003"/><path d="M287.43,215.83c-.48.27-.97-.1-1.03-.78-.05-.54.19-1.1.57-1.32.48-.27.97.1,1.03.78.05.54-.2,1.1-.57,1.32m1.56-.35l-1.52-3.16c-.33-.68-1.12-.32-1.21.55l-.59,5.8.91-.41.1-1.07c.01-.08.05-.15.11-.18l2.02-.91c.19-.09.28-.41.18-.62" fill="#d67003"/><path d="M287.22,215.42l-.44-.33c-.04-.03-.06-.12-.03-.18l.29-.66c.03-.07.09-.09.13-.06l.44.33c.04.03.06.12.03.18l-.29.66c-.02.07-.08.1-.13.06" fill="#d67003"/><path d="M289.61,216.77l-.32-.66c-.01-.03-.18-.21-.2-.2h-.03l-.61.52c-.04.02-.06.09-.04.14l.16.5.16.16c.01.03.04.04.06.03l.77-.35c.05-.02.07-.09.05-.14" fill="#d67003"/><path d="M287.43,215.83c-.48.27-.97-.1-1.03-.78-.05-.54.19-1.1.57-1.32.48-.27.97.1,1.03.78.05.54-.2,1.1-.57,1.32m1.56-.35l-1.52-3.16c-.33-.68-1.12-.32-1.21.55l-.76,5.63.17.17.91-.41.1-1.07c.01-.08.05-.15.11-.18l2.02-.91c.19-.09.28-.41.18-.62" fill="#d67003"/><path d="M287.22,215.42l-.44-.33c-.04-.03-.06-.12-.03-.18l.29-.66c.03-.07.09-.09.13-.06l.44.33c.04.03.06.12.03.18l-.29.66c-.02.07-.08.1-.13.06" fill="#d67003"/><g><path d="M287.25,215.65c-.48.27-.97-.1-1.03-.78-.05-.54.19-1.1.57-1.32.48-.27.97.1,1.03.78.05.55-.19,1.11-.57,1.32m1.56-.34l-1.52-3.16c-.33-.68-1.12-.32-1.21.55l-.59,5.8.91-.41.1-1.07c.01-.08.05-.15.11-.18l2.02-.91c.19-.1.28-.41.18-.62" fill="#ffee52"/><path d="M287.05,215.25l-.44-.33c-.04-.03-.06-.12-.03-.18l.29-.66c.03-.07.09-.09.13-.06l.44.33c.04.03.06.12.03.18l-.29.66c-.03.06-.09.09-.13.06" fill="#ffee52"/><path d="M289.43,216.6l-.32-.66c-.01-.03-.04-.04-.06-.03l-.77.35c-.04.02-.06.09-.04.14l.32.66c.01.03.04.04.06.03l.77-.35c.04-.03.06-.1.04-.14" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL399" transform="translate(0-17)"><path d="M274.51,232.16c0,0-.82,2.78-2.47,4.42-2.01,2.01-5.91,3.88-8.71,3.86-10.38-.08-12.53-6.22-12.53-6.22-.03.31.2,2.29.23,2.61.37,4.3,5.98,7.32,12.53,6.75s11.55-4.51,11.18-8.81c-.03-.3-.16-2.33-.23-2.61Z" fill="#ed8203"/><g><path d="M252.52,236.68c-.32-.32-.57-.63-.8-.92.06.83.02,1.66.11,2.5.03.35.06.71.09,1.06.26.41.57.79.94,1.15-.01-.2-.02-.4-.04-.61-.12-1.06-.3-2.1-.3-3.18Z" fill="#c66802"/><path d="M260.76,240.26c.08,1.12.13,2.23.19,3.35.41.02.82.04,1.25.03-.13-1.09-.42-2.18-.46-3.27-.35-.02-.66-.07-.98-.11Z" fill="#c66802"/><path d="M255.24,238.63c.08.9.14,1.79.19,2.69.02.31.02.62.02.93.32.15.64.3.98.42-.13-1.21-.25-2.42-.35-3.64-.3-.12-.58-.25-.84-.4Z" fill="#c66802"/><path d="M253.46,237.49c.01,1.03.27,2.03.34,3.07.02.24.02.48.02.72.21.15.42.29.64.43-.04-1.22-.03-2.44-.15-3.62-.31-.19-.59-.39-.85-.6Z" fill="#c66802"/><path d="M256.99,239.4c.1,1.19.22,2.39.35,3.58.26.08.52.15.8.22-.17-1.16-.3-2.33-.25-3.51-.32-.09-.61-.19-.9-.29Z" fill="#c66802"/><path d="M258.75,239.92c-.04,1.16.11,2.32.28,3.47.34.06.68.11,1.04.15-.06-1.13-.11-2.26-.19-3.39-.4-.06-.77-.15-1.13-.23Z" fill="#c66802"/><path d="M263.33,240.44c-.25,0-.5-.01-.74-.02.02,1.06.3,2.12.44,3.19.18-.01.35-.01.52-.03.22-.02.43-.05.64-.08-.07-1.04-.1-2.08-.26-3.11-.2.02-.4.05-.6.05Z" fill="#c66802"/><path d="M269.51,238.46c-.32.19-.66.37-1,.54.11,1.08.23,2.17.36,3.25.34-.15.67-.31.99-.48-.01-.17-.03-.35-.05-.53-.1-.92-.2-1.85-.3-2.78Z" fill="#c66802"/><path d="M271.21,237.31c-.27.22-.57.43-.88.64.11,1.07.25,2.14.35,3.22c0,.04.01.09.01.13.3-.19.57-.38.84-.59-.02-.33-.03-.67-.06-1.02-.05-.8-.18-1.59-.26-2.38Z" fill="#c66802"/><path d="M272.86,235.59c-.25.35-.52.7-.82.99-.01.01-.01.01-.02.01.07.88.23,1.74.29,2.62.02.27.03.54.04.8.31-.28.58-.58.83-.88-.05-.7-.09-1.4-.18-2.1-.05-.48-.11-.96-.14-1.44Z" fill="#c66802"/><path d="M273.76,234.04c-.12,1.14.04,2.27.19,3.41.02.18.03.35.05.53.26-.46.45-.95.57-1.44-.15-1.17-.31-2.35-.37-3.51-.12.29-.26.63-.44,1.01Z" fill="#c66802"/><path d="M266.66,239.78c.12,1.04.28,2.08.42,3.12.32-.1.64-.2.94-.32-.12-1.06-.24-2.13-.35-3.2-.33.15-.67.29-1.01.4Z" fill="#c66802"/><path d="M264.8,240.29c.16,1.02.18,2.06.24,3.09.4-.07.8-.15,1.19-.25-.14-1.03-.29-2.05-.42-3.08-.34.1-.68.18-1.01.24Z" fill="#c66802"/></g><path d="M263.33,240.44c-5.56-.04-8.76-1.82-10.53-3.47.2,1.31.45,2.61.51,3.93c2.29,1.94,6.05,3.03,10.2,2.68-.01-1.05-.04-2.1-.1-3.15-.03,0-.05.01-.08.01Z" opacity="0.25" fill="#ffee52"/><path d="M255.03,238.56c.07,1.18.08,2.36.12,3.54c1.55.8,3.45,1.32,5.53,1.48-.01-1.12-.08-2.23-.18-3.34-2.31-.3-4.1-.93-5.47-1.68Z" opacity="0.28" fill="#ffee52"/><g><path d="M256.03,239.05c.16,1.19.22,2.39.31,3.58.38.14.77.28,1.18.39-.12-1.18-.22-2.36-.34-3.54-.41-.13-.79-.27-1.15-.43Z" opacity="0.35" fill="#ffee52"/><path d="M255.03,238.56c.07,1.18.08,2.36.12,3.54.09.05.2.08.29.13-.08-1.22-.17-2.45-.37-3.66-.01,0-.03,0-.04-.01Z" opacity="0.35" fill="#ffee52"/><path d="M258.08,239.76c.11,1.16.21,2.32.33,3.48.17.04.35.06.52.1-.14-1.15-.25-2.3-.34-3.46-.17-.03-.35-.07-.51-.12Z" opacity="0.35" fill="#ffee52"/><path d="M260.19,240.2c.11,1.12.22,2.25.33,3.37.06.01.1.01.16.02-.01-1.12-.08-2.23-.18-3.34-.11-.02-.21-.04-.31-.05Z" opacity="0.35" fill="#ffee52"/></g><path d="M272.04,236.58c-1.19,1.19-3.04,2.32-4.93,3.05.13,1.06.23,2.12.31,3.18c2.67-.86,4.82-2.32,6.08-4.07-.11-1.24-.2-2.48-.29-3.7-.33.54-.72,1.09-1.17,1.54Z" opacity="0.32" fill="#7a4103"/><path d="M272.04,236.58c-.79.79-1.86,1.54-3.04,2.17.08,1.1.17,2.2.26,3.31c1.14-.54,2.14-1.19,2.97-1.93-.07-1.25-.07-2.51,0-3.77-.07.08-.13.16-.19.22Z" opacity="0.32" fill="#7a4103"/><path d="M274.51,232.16c0,0-.82,2.78-2.47,4.42-.92.92-2.25,1.81-3.68,2.5.1,1.08.27,2.14.39,3.22c3.79-1.61,6.25-4.48,5.98-7.53-.02-.3-.15-2.33-.22-2.61Z" opacity="0.32" fill="#7a4103"/><path d="M261.98,225.41c-6.55.57-11.55,4.51-11.18,8.81.37,4.29,5.98,7.32,12.53,6.75s11.55-4.51,11.18-8.81c-.38-4.29-5.99-7.31-12.53-6.75Z" fill="#fcd517"/><path d="M264.48,225.39c2.34,2.3,4.54,4.81,6.43,7.44.82,1.14,1.52,2.34,2.18,3.56c1.01-1.28,1.54-2.73,1.41-4.23-.32-3.73-4.61-6.49-10.02-6.77Z" fill="#ffbc00"/><path d="M261.98,225.41c-.52.04-1.01.12-1.51.2c1.9,1.12,3.75,2.3,5.49,3.63-1.1-1.29-2.21-2.56-3.28-3.88-.24.03-.47.03-.7.05Z" fill="#ffbc00"/><path d="M260.57,231.77c-1.19-1.54-2.51-3.42-2.97-5.4-4.25,1.53-7.08,4.59-6.79,7.85.37,4.29,5.98,7.32,12.53,6.75c2.75-.24,5.22-1.08,7.14-2.28-.34-.13-.68-.27-1.01-.41-3.4-1.47-6.62-3.56-8.9-6.51Z" opacity="0.54" fill="#fff7ab"/><path d="M252.17,230.04c-.99,1.27-1.5,2.7-1.37,4.18.37,4.29,5.98,7.32,12.53,6.75.54-.05,1.06-.12,1.57-.21-2.29-.88-4.52-1.96-6.53-3.33-2.09-1.42-5.27-4.38-6.2-7.39Z" opacity="0.54" fill="#fff7ab"/><path d="M260.57,231.77c-1.19-1.54-2.51-3.42-2.97-5.4-.67.24-1.29.53-1.88.85.68,4.94,4.77,8.34,9.38,10.3c1.52.64,3.08,1.13,4.65,1.59.25-.13.49-.27.72-.41-.34-.13-.68-.27-1.01-.41-3.39-1.48-6.61-3.57-8.89-6.52Z" opacity="0.54" fill="#fff7ab"/><g><path d="M263.74,240.28c-9.35.4-12.08-3.86-12.76-5.11c1.05,3.78,6.3,6.33,12.35,5.8c4.95-.43,9.01-2.79,10.54-5.77-1.77,2.65-5.56,4.88-10.13,5.08Z" fill="#ffffd7"/></g><path d="M262.09,226.73c-5.23.46-9.25,3.21-9,6.14.25,2.94,4.7,4.95,9.92,4.49c5.23-.45,9.25-3.2,9-6.14-.25-2.93-4.69-4.95-9.92-4.49Z" fill="url(#eCVXhK8UueL433-fill)"/><path d="M257.98,227.64c-3.06,1.14-5.07,3.14-4.89,5.23.25,2.94,4.7,4.95,9.92,4.49c1.25-.11,2.43-.35,3.5-.69-.27-.15-.55-.28-.81-.45-3.1-1.94-6.31-5.07-7.72-8.58Z" fill="url(#eCVXhK8UueL434-fill)"/><path d="M250.8,234.22c0,0-.05-4.9,6.69-7.44c2.88-1.09,5.56-1.24,8.5-1.25-1.27-.18-2.62-.24-4.02-.11-6.54.56-11.54,4.51-11.17,8.8Z" fill="#f9af19"/><g><path d="M260.92,236.27l.95-.78c.04-.03.05-.08.02-.12l-.87-1.12c-.05-.06-.17-.07-.24-.01l-.95.78c-.04.03-.05.08-.02.12l.87,1.12c.05.06.18.06.24.01" fill="#d67003"/><path d="M261.6,232.35c-.63-.67-.22-1.61.87-1.99.86-.29,1.87-.12,2.37.41.63.67.22,1.61-.87,1.99-.86.29-1.87.12-2.37-.41m1.18,2.4l4.56-3.72c.98-.8.08-1.96-1.37-1.76l-9.68,1.33l1.03,1.33l1.79-.25c.13-.02.27.02.33.1l2.28,2.93c.21.27.75.29,1.06.04" fill="#d67003"/><path d="M262.18,231.86l.37-.85c.04-.09.17-.14.29-.12l1.19.21c.12.02.19.11.15.19l-.37.85c-.04.09-.17.14-.29.12l-1.19-.21c-.12-.02-.19-.11-.15-.19" fill="#d67003"/><path d="M260.92,236.27l.95-.78c.04-.03.27-.37.24-.41l-.01-.04-1.08-.79c-.05-.06-.17-.07-.24-.01l-.74.45-.2.33c-.04.03-.05.08-.02.12l.87,1.12c.04.06.17.06.23.01" fill="#d67003"/><path d="M261.6,232.35c-.63-.67-.22-1.61.87-1.99.86-.29,1.87-.12,2.37.41.63.67.22,1.61-.87,1.99-.86.29-1.87.12-2.37-.41m1.18,2.4l4.56-3.72c.98-.8.08-1.96-1.37-1.76l-9.48.98-.2.35l1.03,1.33l1.79-.25c.13-.02.27.02.33.1l2.28,2.93c.21.27.75.29,1.06.04" fill="#d67003"/><path d="M262.18,231.86l.37-.85c.04-.09.17-.14.29-.12l1.19.21c.12.02.19.11.15.19l-.37.85c-.04.09-.17.14-.29.12l-1.19-.21c-.12-.02-.19-.11-.15-.19" fill="#d67003"/><g><path d="M261.81,232c-.63-.67-.22-1.61.87-1.99.86-.29,1.87-.12,2.37.41.63.67.22,1.61-.87,1.99-.85.29-1.87.12-2.37-.41m1.19,2.4l4.56-3.72c.98-.8.08-1.96-1.37-1.76l-9.68,1.33l1.03,1.33l1.79-.25c.13-.02.27.02.33.1l2.28,2.93c.2.27.75.29,1.06.04" fill="#ffee52"/><path d="M262.4,231.51l.37-.85c.04-.09.17-.14.29-.12l1.19.21c.12.02.19.11.15.19l-.37.85c-.04.09-.17.14-.29.12l-1.19-.21c-.12-.02-.19-.11-.15-.19" fill="#ffee52"/><path d="M261.14,235.92l.95-.78c.04-.03.05-.08.02-.12l-.87-1.12c-.05-.06-.17-.07-.24-.01l-.95.78c-.04.03-.05.08-.02.12l.87,1.12c.05.06.17.06.24.01" fill="#ffee52"/></g></g></g><path d="M256.53,174.52c.34.68.64,1.43.8,2.18.43,1.97.37,4.57-.13,6.94c1.15.56,2.28,1.14,3.4,1.75.86-3.25.78-6.36-.16-8.77-1.32-.68-2.62-1.4-3.91-2.1Z" opacity="0.32" fill="#7a4103"/><path d="M257.23,176.38c.03.11.07.22.1.32.28,1.3.35,2.87.22,4.47c1.16.63,2.33,1.26,3.5,1.88.19-1.5.19-2.93-.02-4.24-1.31-.74-2.58-1.55-3.8-2.43Z" opacity="0.32" fill="#7a4103"/><path d="M257.25,172.81c-.32-.17-2.45-1.36-2.78-1.46c0,0,2.27,2.63,2.86,5.35.33,1.53.36,3.43.13,5.32c1.15.6,2.33,1.12,3.5,1.7.83-4.86-.46-9.2-3.71-10.91Z" opacity="0.32" fill="#7a4103"/><g id="eCVXhK8UueL450" transform="matrix(.773619 0.633651-.633651 0.773619 173.453504-144.104064)"><path d="M257.25,172.81c-.32-.17-2.45-1.36-2.78-1.46c0,0,2.27,2.63,2.86,5.35.72,3.33.08,8.47-1.76,11.28-6.8,10.42-14.38,8.61-14.38,8.61.29.23,2.43,1.28,2.77,1.46c4.57,2.41,11.25-1.29,14.92-8.26s2.94-14.57-1.63-16.98Z" fill="#ed8203"/><g><path d="M244.79,196.44c-.53.11-1.01.17-1.44.21.87.48,1.69,1.06,2.59,1.51.38.19.75.4,1.12.59.58,0,1.17-.07,1.77-.2-.21-.12-.42-.24-.64-.35-1.15-.57-2.33-1.06-3.4-1.76Z" fill="#c66802"/><path d="M253.73,190.46c1.17.64,2.33,1.32,3.49,1.97.29-.39.58-.8.84-1.23-1.19-.57-2.47-.99-3.6-1.65-.23.32-.48.61-.73.91Z" fill="#c66802"/><path d="M248.51,194.97c.95.5,1.9,1.02,2.83,1.54.33.19.64.38.96.58.35-.22.71-.45,1.06-.71-1.3-.65-2.6-1.31-3.89-2.01-.33.23-.65.42-.96.6Z" fill="#c66802"/><path d="M246.21,196.02c1.04.66,2.22,1.05,3.31,1.65.25.14.49.29.74.44.28-.11.57-.23.85-.37-1.25-.74-2.48-1.55-3.74-2.19-.41.19-.79.34-1.16.47Z" fill="#c66802"/><path d="M250.42,193.7c1.27.67,2.55,1.33,3.84,1.97.25-.21.49-.43.73-.66-1.28-.58-2.54-1.2-3.69-2.02-.3.25-.59.48-.88.71Z" fill="#c66802"/><path d="M252.08,192.26c1.14.8,2.4,1.39,3.68,1.96.28-.3.55-.62.83-.95-1.18-.68-2.35-1.36-3.54-2.01-.33.36-.65.69-.97,1Z" fill="#c66802"/><path d="M255.57,187.98c-.16.26-.33.49-.49.73c1.08.66,2.33,1.08,3.49,1.62.1-.19.21-.36.31-.55.12-.23.23-.46.34-.69-1.08-.6-2.16-1.24-3.3-1.75-.11.21-.22.44-.35.64Z" fill="#c66802"/><path d="M257.59,180.47c-.02.45-.06.91-.1,1.36c1.16.59,2.33,1.17,3.5,1.74.07-.44.12-.87.16-1.3-.18-.1-.37-.2-.56-.3-1.01-.49-2-1-3-1.5Z" fill="#c66802"/><path d="M260.1,179.28c-.84-.46-1.72-.84-2.57-1.27.04.42.07.85.08,1.3c1.15.59,2.32,1.14,3.47,1.73.05.02.09.05.13.07c0-.42-.02-.83-.04-1.23-.36-.2-.71-.4-1.07-.6Z" fill="#c66802"/><path d="M258.42,176.02c-.53-.25-1.05-.51-1.56-.8.2.48.36.98.47,1.48c0,.01,0,.02,0,.02.93.5,1.91.9,2.83,1.41.28.15.56.31.84.48-.09-.49-.21-.96-.35-1.41-.74-.41-1.48-.82-2.23-1.18Z" fill="#c66802"/><path d="M255.14,172.22c.22.31.47.68.73,1.1c1.08.86,2.32,1.43,3.56,2.03.19.09.38.2.56.29-.3-.56-.66-1.07-1.08-1.52-1.27-.6-2.55-1.21-3.77-1.9Z" fill="#c66802"/><path d="M257.07,184.2c1.13.55,2.28,1.06,3.42,1.59.11-.39.21-.78.29-1.16-1.16-.56-2.31-1.14-3.45-1.72-.08.44-.16.87-.26,1.29Z" fill="#c66802"/><path d="M256.37,186.4c1.14.5,2.2,1.15,3.28,1.76.19-.45.36-.91.52-1.36-1.12-.53-2.26-1.03-3.38-1.57-.12.4-.26.79-.42,1.17Z" fill="#c66802"/></g><path d="M255.57,187.98c-3.64,5.58-7.51,7.65-10.31,8.37c1.45.65,2.92,1.25,4.29,2.03c3.44-1.05,6.98-4.14,9.31-8.55-1.07-.67-2.14-1.32-3.24-1.94-.02.03-.02.06-.05.09Z" opacity="0.25" fill="#ffee52"/><path d="M248.31,195.13c1.23.69,2.44,1.45,3.65,2.18c1.82-1.04,3.57-2.62,5.07-4.61-1.13-.71-2.3-1.36-3.49-1.98-1.8,2.12-3.59,3.51-5.23,4.41Z" opacity="0.28" fill="#ffee52"/><g><path d="M249.44,194.44c1.3.61,2.55,1.32,3.81,2.01.39-.29.78-.6,1.16-.94-1.26-.65-2.52-1.3-3.78-1.95-.4.33-.8.62-1.19.88Z" opacity="0.35" fill="#ffee52"/><path d="M248.31,195.13c1.23.69,2.44,1.45,3.65,2.18.11-.06.21-.14.32-.21-1.29-.71-2.57-1.41-3.93-1.99-.02,0-.03.01-.04.02Z" opacity="0.35" fill="#ffee52"/><path d="M251.49,192.83c1.24.65,2.47,1.28,3.72,1.92.15-.14.29-.31.44-.46-1.25-.6-2.48-1.24-3.7-1.89-.16.14-.31.3-.46.43Z" opacity="0.35" fill="#ffee52"/><path d="M253.3,190.99c1.2.62,2.4,1.24,3.61,1.85.04-.05.08-.1.12-.15-1.13-.71-2.3-1.36-3.49-1.98-.08.1-.17.18-.24.28Z" opacity="0.35" fill="#ffee52"/></g><path d="M254.47,171.35c-4.57-2.41-11.25,1.29-14.92,8.26s-2.93,14.57,1.64,16.98c4.57,2.4,11.25-1.29,14.92-8.26c3.66-6.97,2.93-14.57-1.64-16.98Z" fill="#fcd517"/><path d="M254.47,171.35c-3.97-2.09-9.53.45-13.32,5.71c3.83-.87,7.78-1.45,11.67-1.65c1.68-.09,3.34-.02,5,.1-.64-1.85-1.76-3.32-3.35-4.16Z" fill="#ffbc00"/><path d="M239.55,179.61c-.29.55-.54,1.1-.78,1.66c2.36-1.19,4.76-2.29,7.23-3.18-2.01.28-4.02.58-6.04.8-.13.23-.28.47-.41.72Z" fill="#ffbc00"/><path d="M245.05,185.15c-2.32.21-5.07.31-7.38-.51-1.21,5.27.04,10.11,3.52,11.94c4.57,2.4,11.25-1.29,14.92-8.26c1.54-2.92,2.29-5.96,2.32-8.68-.35.26-.71.51-1.06.75-3.68,2.47-7.87,4.36-12.32,4.76Z" opacity="0.54" fill="#fff7ab"/><path d="M237.87,192.49c.64,1.82,1.75,3.26,3.32,4.09c4.57,2.4,11.25-1.29,14.92-8.26.3-.57.56-1.15.8-1.72-2.37,1.75-4.91,3.29-7.59,4.43-2.78,1.18-7.83,2.47-11.45,1.46Z" opacity="0.54" fill="#fff7ab"/><path d="M245.05,185.15c-2.32.21-5.07.31-7.38-.51-.19.83-.3,1.65-.37,2.45c5.43,2.52,11.51.6,16.47-2.78c1.64-1.12,3.13-2.37,4.61-3.66.02-.34.05-.67.05-1-.35.26-.71.51-1.06.75-3.68,2.46-7.87,4.35-12.32,4.75Z" opacity="0.54" fill="#fff7ab"/><g><path d="M255.68,187.46c-5.65,9.68-11.71,9.68-13.42,9.55c4.49,1.39,10.46-2.24,13.85-8.69c2.77-5.27,3.03-10.89,1.01-14.37c1.52,3.51,1.32,8.78-1.44,13.51Z" fill="#ffffd7"/></g><path d="M251.91,173.26c-3.13-1.65-8.04,1.53-10.96,7.09-2.93,5.56-2.77,11.41.36,13.05c3.13,1.65,8.03-1.53,10.96-7.09c2.93-5.57,2.77-11.41-.36-13.05Z" fill="url(#eCVXhK8UueL481-fill)"/><path d="M239.2,185.08c-.84,3.82-.13,7.14,2.11,8.32c3.13,1.65,8.03-1.53,10.96-7.09.7-1.33,1.22-2.68,1.57-3.98-.32.18-.64.37-.98.53-3.97,1.87-9.21,3.07-13.66,2.22Z" fill="url(#eCVXhK8UueL482-fill)"/><path d="M240.95,180.35c-2.93,5.56-2.77,11.41.36,13.05.18.09.36.17.55.23-2.64-1.98-2.63-7.48.13-12.73s7.29-8.37,10.42-7.32c-.15-.12-.32-.23-.5-.32-3.13-1.65-8.03,1.52-10.96,7.09Z" fill="#ed8203"/><path d="M242.27,175.63c-1.01,1.16-1.94,2.49-2.72,3.97-3.67,6.97-2.93,14.57,1.64,16.98c0,0-4.97-3.12-3.17-11.57.76-3.61,2.35-6.4,4.25-9.38Z" fill="#f9af19"/><g><path d="M251.08,186.64l-.12-1.18c0-.05-.05-.08-.11-.08l-1.81.07c-.1,0-.19.1-.18.18l.13,1.18c.01.05.05.08.11.08l1.8-.07c.1-.01.19-.1.18-.18" fill="#d67003"/><path d="M247.46,183.94c-1.16.12-1.85-.72-1.46-1.78.31-.84,1.24-1.54,2.15-1.64c1.17-.12,1.85.72,1.46,1.78-.31.84-1.23,1.54-2.15,1.64m3.38.4l-.6-5.63c-.13-1.21-2-1.14-2.84.1l-5.64,8.34l2.14-.08l1.03-1.54c.08-.12.22-.2.35-.2l4.73-.17c.45-.02.87-.44.83-.82" fill="#d67003"/><path d="M247.37,183.21l-.62-.76c-.06-.08-.02-.21.08-.29l1.08-.82c.11-.08.25-.09.31-.01l.62.76c.06.08.02.21-.08.29l-1.08.82c-.11.09-.25.09-.31.01" fill="#d67003"/><path d="M251.08,186.64l-.12-1.18c0-.05-.19-.42-.25-.42l-.05-.01-1.62.42c-.1,0-.19.1-.18.18l-.06.84.2.34c.01.05.05.08.11.08l1.8-.07c.09-.01.18-.1.17-.18" fill="#d67003"/><path d="M247.46,183.94c-1.17.12-1.85-.72-1.46-1.78.31-.84,1.24-1.54,2.15-1.63c1.17-.13,1.85.72,1.46,1.78-.31.83-1.23,1.53-2.15,1.63m3.38.4l-.6-5.63c-.13-1.21-2-1.14-2.84.1l-5.86,7.99.22.35l2.14-.08l1.03-1.54c.08-.12.22-.2.35-.2l4.73-.17c.45-.02.87-.44.83-.82" fill="#d67003"/><path d="M247.37,183.21l-.62-.76c-.06-.08-.02-.21.08-.29l1.08-.82c.11-.08.25-.09.31-.01l.62.76c.06.08.02.21-.08.29l-1.08.82c-.11.09-.25.09-.31.01" fill="#d67003"/><g><path d="M247.25,183.58c-1.16.12-1.85-.72-1.46-1.78.31-.84,1.24-1.54,2.15-1.64c1.17-.12,1.85.72,1.46,1.78-.31.84-1.24,1.54-2.15,1.64m3.38.4l-.6-5.63c-.13-1.21-2-1.14-2.84.1l-5.64,8.34l2.14-.08l1.03-1.54c.08-.12.22-.2.35-.2l4.73-.17c.44-.03.87-.44.83-.82" fill="#ffee52"/><path d="M247.16,182.85l-.62-.76c-.06-.08-.02-.21.08-.29l1.08-.82c.11-.08.25-.09.31-.01l.62.76c.06.08.02.21-.08.29l-1.08.82c-.11.08-.25.09-.31.01" fill="#ffee52"/><path d="M250.87,186.27l-.12-1.18c0-.05-.05-.08-.11-.08l-1.81.07c-.1,0-.19.1-.18.18l.13,1.18c.01.05.05.08.11.08l1.8-.07c.09,0,.19-.09.18-.18" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL496" transform="translate(-3-22)"><path d="M253.82,222.99c0,0,.27,2.88-.64,5.02-1.11,2.62-4.04,5.81-6.64,6.83-9.66,3.8-13.95-1.09-13.95-1.09.09.3,1.04,2.05,1.19,2.33c1.95,3.85,8.28,4.55,14.14,1.58s9.03-8.5,7.08-12.35c-.13-.25-1.01-2.08-1.18-2.32Z" fill="#ed8203"/><g><path d="M235.11,235.4c-.42-.18-.77-.37-1.08-.56.36.75.64,1.54,1.03,2.28.16.32.32.63.48.95.4.28.83.52,1.3.72-.09-.18-.17-.37-.27-.55-.5-.94-1.06-1.84-1.46-2.84Z" fill="#c66802"/><path d="M244.09,235.64c.49,1.01.95,2.02,1.42,3.03.39-.13.78-.27,1.17-.43-.53-.97-1.2-1.87-1.65-2.86-.32.11-.63.18-.94.26Z" fill="#c66802"/><path d="M238.36,236.19c.41.8.8,1.61,1.18,2.42.13.28.25.57.37.86.35.02.7.04,1.07.03-.57-1.08-1.14-2.15-1.68-3.24-.33-.01-.64-.03-.94-.07Z" fill="#c66802"/><path d="M236.28,235.8c.39.95,1.01,1.79,1.46,2.72.1.21.2.44.29.66.25.06.5.12.76.16-.49-1.11-.94-2.25-1.49-3.3-.37-.07-.7-.15-1.02-.24Z" fill="#c66802"/><path d="M240.27,236.25c.54,1.07,1.1,2.13,1.66,3.19.27-.02.54-.05.82-.1-.59-1.02-1.15-2.04-1.54-3.16-.32.04-.63.06-.94.07Z" fill="#c66802"/><path d="M242.1,236.08c.39,1.09.96,2.11,1.56,3.11.34-.07.68-.15,1.02-.25-.48-1.03-.94-2.06-1.44-3.07-.4.09-.78.15-1.14.21Z" fill="#c66802"/><path d="M246.54,234.85c-.23.09-.47.18-.69.26.42.97,1.07,1.86,1.6,2.79.16-.07.32-.14.48-.22.2-.1.38-.21.56-.31-.45-.94-.87-1.89-1.4-2.79-.19.09-.37.19-.55.27Z" fill="#c66802"/><path d="M251.54,230.71c-.23.3-.48.59-.73.87.5.97,1.02,1.92,1.55,2.88.26-.26.51-.54.74-.81-.08-.16-.15-.32-.24-.47-.45-.83-.89-1.65-1.32-2.47Z" fill="#c66802"/><path d="M252.68,229c-.17.3-.36.61-.57.92.5.95,1.03,1.9,1.53,2.85.02.04.04.08.06.11.21-.29.39-.57.56-.86-.14-.3-.28-.61-.43-.92-.36-.71-.77-1.39-1.15-2.1Z" fill="#c66802"/><path d="M253.57,226.78c-.1.42-.22.84-.39,1.23c0,.01-.01.01-.01.02.39.79.86,1.53,1.25,2.32.12.24.23.49.34.73.18-.38.32-.75.44-1.13-.31-.63-.61-1.27-.95-1.88-.24-.42-.47-.85-.68-1.29Z" fill="#c66802"/><path d="M253.82,225.01c.32,1.1.89,2.09,1.45,3.09.09.15.16.31.25.47.06-.53.06-1.04,0-1.55-.58-1.03-1.16-2.06-1.66-3.11c0,.32-.01.69-.04,1.1Z" fill="#c66802"/><path d="M249.39,232.99c.5.92,1.04,1.83,1.56,2.74.26-.21.52-.43.76-.65-.51-.94-1.02-1.89-1.52-2.83-.27.26-.53.51-.8.74Z" fill="#c66802"/><path d="M247.85,234.15c.53.89.94,1.85,1.38,2.78.35-.21.69-.44,1.02-.67-.51-.9-1.04-1.79-1.54-2.7-.29.22-.58.42-.86.59Z" fill="#c66802"/></g><path d="M246.54,234.85c-5.18,2.04-8.81,1.58-11.06.72.67,1.14,1.39,2.26,1.94,3.45c2.85.94,6.75.55,10.46-1.32-.4-.97-.82-1.93-1.27-2.88-.02,0-.04.02-.07.03Z" opacity="0.25" fill="#ffee52"/><path d="M238.14,236.21c.5,1.07.96,2.16,1.43,3.24c1.74.16,3.69-.06,5.68-.69-.43-1.03-.91-2.04-1.42-3.03-2.25.57-4.14.66-5.69.48Z" opacity="0.28" fill="#ffee52"/><g><path d="M239.24,236.28c.6,1.04,1.1,2.13,1.62,3.21.41-.01.82-.03,1.24-.08-.55-1.05-1.09-2.1-1.63-3.16-.42.04-.83.05-1.23.03Z" opacity="0.35" fill="#ffee52"/><path d="M238.14,236.21c.5,1.07.96,2.16,1.43,3.24.1.01.21.01.32.01-.53-1.1-1.07-2.21-1.71-3.25-.01-.01-.02,0-.04,0Z" opacity="0.35" fill="#ffee52"/><path d="M241.42,236.18c.53,1.03,1.06,2.07,1.6,3.1.17-.03.35-.07.52-.1-.56-1.01-1.09-2.04-1.61-3.08-.17.03-.35.06-.51.08Z" opacity="0.35" fill="#ffee52"/><path d="M243.54,235.79c.52,1,1.04,2.01,1.57,3.01.05-.01.1-.03.15-.04-.43-1.03-.91-2.04-1.42-3.03-.11.02-.2.04-.3.06Z" opacity="0.35" fill="#ffee52"/></g><path d="M253.18,228.01c-.66,1.55-1.96,3.29-3.44,4.67.51.94,1,1.88,1.48,2.83c2.16-1.8,3.6-3.96,4.12-6.05-.57-1.11-1.11-2.22-1.65-3.32-.1.64-.26,1.28-.51,1.87Z" opacity="0.32" fill="#7a4103"/><path d="M253.18,228.01c-.44,1.02-1.15,2.12-2.01,3.15.49.99.98,1.98,1.48,2.97.85-.92,1.54-1.9,2.03-2.9-.53-1.14-1-2.3-1.41-3.49-.03.1-.05.19-.09.27Z" opacity="0.32" fill="#7a4103"/><path d="M253.82,222.99c0,0,.27,2.88-.64,5.02-.51,1.2-1.41,2.51-2.48,3.69.5.96,1.05,1.89,1.56,2.85c2.91-2.91,4.12-6.49,2.73-9.22-.12-.27-1-2.1-1.17-2.34Z" opacity="0.32" fill="#7a4103"/><path d="M239.67,221.41c-5.86,2.97-9.03,8.5-7.08,12.35c1.95,3.84,8.28,4.55,14.14,1.58s9.03-8.5,7.08-12.34c-1.95-3.85-8.28-4.56-14.14-1.59Z" fill="#fcd517"/><path d="M241.99,220.45c3.03,1.26,6,2.76,8.74,4.5c1.18.75,2.28,1.6,3.35,2.49.46-1.57.41-3.11-.27-4.45-1.69-3.34-6.7-4.29-11.82-2.54Z" fill="#ffbc00"/><path d="M239.67,221.41c-.46.23-.9.49-1.33.75c2.18.33,4.34.73,6.45,1.32-1.5-.78-3.01-1.55-4.49-2.37-.21.11-.42.2-.63.3Z" fill="#ffbc00"/><path d="M240.74,227.84c-1.68-.98-3.6-2.24-4.78-3.9-3.37,3.01-4.85,6.9-3.37,9.82c1.95,3.84,8.28,4.55,14.14,1.58c2.46-1.24,4.44-2.95,5.77-4.78-.36,0-.73.01-1.09,0-3.68-.11-7.45-.84-10.67-2.72Z" opacity="0.54" fill="#fff7ab"/><path d="M232.3,229.37c-.44,1.55-.38,3.07.29,4.39c1.95,3.84,8.28,4.55,14.14,1.58.48-.24.94-.51,1.38-.78-2.45.04-4.93-.13-7.31-.65-2.45-.54-6.51-2.1-8.5-4.54Z" opacity="0.54" fill="#fff7ab"/><path d="M240.74,227.84c-1.68-.98-3.6-2.24-4.78-3.9-.53.48-1,.98-1.43,1.49c2.48,4.33,7.54,5.95,12.55,6.05c1.65.03,3.28-.1,4.91-.26.18-.22.36-.44.52-.65-.36,0-.73.01-1.09,0-3.69-.12-7.46-.85-10.68-2.73Z" opacity="0.54" fill="#fff7ab"/><g><path d="M246.86,234.55c-8.52,3.86-12.64.93-13.75.02c2.39,3.12,8.2,3.52,13.62.77c4.43-2.24,7.32-5.95,7.62-9.29-.64,3.12-3.32,6.61-7.49,8.5Z" fill="#ffffd7"/></g><path d="M240.27,222.59c-4.68,2.37-7.39,6.43-6.05,9.06c1.33,2.63,6.21,2.84,10.88.46c4.68-2.37,7.39-6.43,6.06-9.06-1.34-2.62-6.21-2.83-10.89-.46Z" fill="url(#eCVXhK8UueL530-fill)"/><path d="M236.79,224.97c-2.41,2.2-3.53,4.8-2.58,6.68c1.33,2.63,6.21,2.84,10.88.46c1.12-.57,2.12-1.23,2.99-1.95-.31-.03-.61-.06-.92-.11-3.6-.64-7.75-2.35-10.37-5.08Z" fill="url(#eCVXhK8UueL531-fill)"/><path d="M232.59,233.76c0,0-1.88-4.52,3.43-9.4c2.27-2.09,4.69-3.23,7.42-4.34-1.24.3-2.52.76-3.77,1.39-5.86,2.98-9.03,8.5-7.08,12.35Z" fill="#f9af19"/><g><path d="M242.75,231.88l.59-1.08c.03-.05.02-.09-.02-.12l-1.23-.72c-.07-.04-.18,0-.22.08l-.59,1.08c-.02.05-.01.09.02.11l1.22.71c.07.05.19.01.23-.06" fill="#d67003"/><path d="M241.91,227.99c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.68.59-1.69.8-2.35.5m2,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.48,4.85l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.3.15.82-.03,1.01-.37" fill="#d67003"/><path d="M242.27,227.31l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.12.03-.21-.02-.21-.12" fill="#d67003"/><path d="M242.75,231.88l.59-1.08c.03-.05.11-.44.07-.47l-.02-.03-1.3-.33c-.07-.04-.18,0-.22.08l-.52.7-.07.38c-.02.05-.02.09.02.11l1.22.71c.07.04.19,0,.23-.07" fill="#d67003"/><path d="M241.91,227.99c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.68.59-1.69.8-2.35.5m2,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.43,4.45-.06.4l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.31.15.83-.03,1.02-.37" fill="#d67003"/><path d="M242.27,227.31l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.12.03-.21-.02-.21-.12" fill="#d67003"/><g><path d="M241.98,227.58c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.68.59-1.69.81-2.35.5m1.99,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.48,4.85l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.31.16.82-.03,1.01-.37" fill="#ffee52"/><path d="M242.34,226.91l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.12.03-.21-.03-.21-.12" fill="#ffee52"/><path d="M242.82,231.47l.59-1.08c.03-.05.02-.09-.02-.12l-1.23-.72c-.07-.04-.18,0-.22.08l-.59,1.08c-.02.05-.02.09.02.11l1.22.71c.07.06.19.02.23-.06" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL544" transform="matrix(.918264-.395969 0.395969 0.918264-66.248889 96.230311)"><path d="M275.26,218.26c0,0-1.44,3.93-3.95,6.15-3.08,2.72-8.88,5.07-12.91,4.79-14.97-1.04-17.53-10.09-17.53-10.09-.07.45.08,3.32.1,3.78.15,6.23,7.98,11.09,17.47,10.86c9.5-.24,17.07-5.48,16.91-11.72-.01-.42-.01-3.36-.09-3.77Z" fill="#ed8203"/><g><path d="M243.14,222.83c-.44-.5-.77-.96-1.07-1.4.01,1.2-.11,2.4-.07,3.61.02.51.02,1.02.04,1.54.34.61.76,1.19,1.25,1.74c0-.29.01-.59-.01-.88-.07-1.54-.25-3.07-.14-4.61Z" fill="#c66802"/><path d="M254.71,228.73c.01,1.62-.01,3.23-.03,4.84.59.07,1.18.13,1.8.16-.09-1.59-.41-3.18-.38-4.76-.49-.07-.94-.16-1.39-.24Z" fill="#c66802"/><path d="M246.88,225.88c.04,1.3.05,2.6.04,3.89c0,.45-.02.9-.05,1.35.44.24.9.48,1.37.7-.08-1.76-.15-3.52-.18-5.28-.42-.21-.81-.43-1.18-.66Z" fill="#c66802"/><path d="M244.42,224.07c-.08,1.48.2,2.96.21,4.46c0,.34-.01.69-.03,1.04.29.23.58.46.89.68.05-1.76.17-3.53.1-5.23-.43-.32-.81-.63-1.17-.95Z" fill="#c66802"/><path d="M249.34,227.15c.04,1.73.11,3.46.19,5.2.37.14.74.27,1.13.38-.14-1.7-.23-3.38-.04-5.08-.45-.16-.87-.33-1.28-.5Z" fill="#c66802"/><path d="M251.83,228.05c-.17,1.67-.05,3.35.1,5.03.49.12.98.22,1.49.31.02-1.64.05-3.27.03-4.91-.58-.13-1.1-.28-1.62-.43Z" fill="#c66802"/><path d="M258.4,229.21c-.36-.03-.72-.06-1.07-.09-.06,1.53.24,3.08.35,4.64.26,0,.5.01.76.01.32-.01.62-.04.93-.06c0-1.5.04-3.01-.09-4.5-.3-.01-.6.01-.88,0Z" fill="#c66802"/><path d="M267.49,226.91c-.48.25-.99.47-1.49.69.06,1.57.14,3.14.23,4.72.51-.18.99-.39,1.46-.6c0-.25-.01-.51-.02-.76-.07-1.36-.13-2.7-.18-4.05Z" fill="#c66802"/><path d="M270.04,225.4c-.41.29-.86.57-1.32.84.06,1.56.17,3.11.22,4.67c0,.06,0,.13,0,.18.45-.24.86-.5,1.27-.77.01-.48.01-.97.01-1.47-.02-1.15-.13-2.3-.18-3.45Z" fill="#c66802"/><path d="M272.58,223.05c-.39.49-.82.96-1.27,1.36-.01.01-.02.01-.02.01.02,1.28.17,2.54.19,3.81.01.39,0,.78-.02,1.16.47-.38.89-.78,1.28-1.2-.01-1.01-.01-2.03-.07-3.04-.05-.7-.09-1.4-.09-2.1Z" fill="#c66802"/><path d="M274.01,220.9c-.27,1.64-.14,3.28-.03,4.94.02.26.02.51.03.77.41-.65.73-1.33.96-2.03-.12-1.7-.23-3.41-.23-5.09-.2.4-.44.89-.73,1.41Z" fill="#c66802"/><path d="M263.26,228.56c.08,1.52.22,3.03.33,4.54.48-.11.94-.24,1.39-.37-.08-1.54-.16-3.1-.22-4.65-.5.17-1,.34-1.5.48Z" fill="#c66802"/><path d="M260.53,229.12c.13,1.49.08,2.99.07,4.48.59-.06,1.17-.15,1.74-.25-.11-1.5-.24-2.99-.33-4.48-.5.11-.99.19-1.48.25Z" fill="#c66802"/></g><path d="M258.4,229.21c-8.02-.56-12.48-3.41-14.88-5.94.17,1.9.41,3.81.39,5.71c3.13,3,8.46,4.91,14.48,4.77.08-1.52.13-3.03.13-4.55-.05,0-.09.01-.12.01Z" opacity="0.25" fill="#ffee52"/><path d="M246.59,225.76c-.01,1.71-.09,3.42-.15,5.12c2.17,1.3,4.86,2.21,7.84,2.63.08-1.61.08-3.23.03-4.84-3.29-.64-5.81-1.71-7.72-2.91Z" opacity="0.28" fill="#ffee52"/><g><path d="M247.98,226.55c.13,1.73.1,3.47.12,5.2.54.24,1.09.47,1.67.67-.06-1.71-.11-3.42-.17-5.13-.57-.24-1.11-.48-1.62-.74Z" opacity="0.35" fill="#ffee52"/><path d="M246.59,225.76c-.01,1.71-.09,3.42-.15,5.12.13.08.27.14.41.21-.01-1.77-.03-3.55-.21-5.31-.01,0-.03-.01-.05-.02Z" opacity="0.35" fill="#ffee52"/><path d="M250.88,227.77c.05,1.68.1,3.36.16,5.04.24.07.5.12.74.19-.1-1.67-.15-3.34-.19-5.02-.23-.07-.48-.14-.71-.21Z" opacity="0.35" fill="#ffee52"/><path d="M253.89,228.57c.05,1.63.11,3.27.17,4.9.08.01.15.03.23.04.08-1.61.08-3.23.03-4.84-.15-.03-.29-.06-.43-.1Z" opacity="0.35" fill="#ffee52"/></g><path d="M271.31,224.42c-1.83,1.61-4.6,3.07-7.39,3.95.09,1.54.14,3.07.16,4.62c3.93-1,7.16-2.92,9.14-5.33-.06-1.8-.07-3.59-.09-5.36-.52.75-1.13,1.5-1.82,2.12Z" opacity="0.32" fill="#7a4103"/><path d="M271.31,224.42c-1.2,1.07-2.82,2.06-4.58,2.86.02,1.6.05,3.19.08,4.79c1.69-.68,3.2-1.52,4.45-2.52.02-1.82.12-3.63.33-5.43-.1.1-.19.21-.28.3Z" opacity="0.32" fill="#7a4103"/><path d="M275.26,218.26c0,0-1.44,3.93-3.95,6.15-1.41,1.25-3.4,2.4-5.53,3.28.05,1.56.2,3.11.27,4.69c5.61-1.99,9.41-5.91,9.3-10.34-.01-.43-.01-3.37-.09-3.78Z" opacity="0.32" fill="#7a4103"/><path d="M257.78,207.41c-9.5.24-17.06,5.48-16.91,11.71.16,6.23,7.98,11.09,17.48,10.85s17.07-5.48,16.91-11.71-7.99-11.09-17.48-10.85Z" fill="#fcd517"/><path d="M261.4,207.59c3.17,3.52,6.12,7.34,8.61,11.31c1.08,1.71,1.99,3.51,2.83,5.33c1.57-1.76,2.47-3.81,2.42-5.97-.14-5.41-6.08-9.77-13.86-10.67Z" fill="#ffbc00"/><path d="M257.78,207.41c-.75.02-1.47.08-2.2.16c2.64,1.79,5.21,3.66,7.59,5.73-1.47-1.95-2.96-3.89-4.39-5.88-.33-.01-.66-.02-1-.01Z" fill="#ffbc00"/><path d="M255.18,216.46c-1.59-2.33-3.31-5.16-3.81-8.06-6.27,1.83-10.62,5.99-10.5,10.72.16,6.23,7.98,11.09,17.48,10.85c3.98-.1,7.62-1.09,10.5-2.65-.48-.22-.95-.44-1.42-.68-4.76-2.43-9.21-5.73-12.25-10.18Z" opacity="0.54" fill="#fff7ab"/><path d="M243.22,213.21c-1.54,1.74-2.4,3.76-2.35,5.91.16,6.23,7.98,11.09,17.48,10.85.78-.02,1.54-.08,2.28-.16-3.23-1.47-6.35-3.23-9.13-5.39-2.88-2.23-7.21-6.79-8.28-11.21Z" opacity="0.54" fill="#fff7ab"/><path d="M255.18,216.46c-1.59-2.33-3.31-5.16-3.81-8.06-.99.29-1.92.65-2.79,1.05.54,7.19,6.14,12.46,12.62,15.7c2.14,1.07,4.34,1.91,6.57,2.71.37-.17.74-.35,1.08-.53-.48-.22-.95-.44-1.42-.68-4.76-2.44-9.21-5.74-12.25-10.19Z" opacity="0.54" fill="#fff7ab"/><g><path d="M259,229.01c-13.52-.26-17.08-6.64-17.95-8.52c1.18,5.55,8.52,9.69,17.3,9.47c7.18-.18,13.25-3.22,15.72-7.38-2.79,3.67-8.46,6.56-15.07,6.43Z" fill="#ffffd7"/></g><path d="M257.83,209.31c-7.58.19-13.64,3.8-13.53,8.06s6.33,7.56,13.91,7.37s13.64-3.8,13.53-8.05c-.1-4.26-6.33-7.56-13.91-7.38Z" fill="url(#eCVXhK8UueL578-fill)"/><path d="M251.81,210.26c-4.52,1.37-7.59,4.07-7.51,7.11.11,4.26,6.33,7.56,13.91,7.37c1.82-.04,3.54-.29,5.12-.69-.38-.23-.76-.46-1.13-.72-4.31-3.07-8.66-7.88-10.39-13.07Z" fill="url(#eCVXhK8UueL579-fill)"/><path d="M240.87,219.12c0,0,.36-7.07,10.31-10.14c4.26-1.31,8.13-1.3,12.38-1.05-1.81-.38-3.76-.57-5.78-.52-9.5.23-17.06,5.48-16.91,11.71Z" fill="#f9af19"/><g><path d="M255.29,222.98l1.44-1.04c.06-.04.08-.11.04-.17l-1.16-1.7c-.06-.09-.24-.11-.34-.04l-1.44,1.05c-.06.04-.08.11-.04.16l1.15,1.69c.08.1.25.12.35.05" fill="#d67003"/><path d="M256.62,217.38c-.85-1.03-.17-2.35,1.43-2.79c1.26-.35,2.71,0,3.38.8.85,1.03.17,2.35-1.43,2.79-1.26.35-2.71.01-3.38-.8m1.49,3.57l6.9-4.96c1.48-1.07.29-2.82-1.82-2.66l-14.08,1.05l1.37,2l2.6-.2c.2-.02.38.06.47.18l3.03,4.43c.28.41,1.07.49,1.53.16" fill="#d67003"/><path d="M257.5,216.72l.61-1.19c.06-.12.25-.19.43-.14l1.69.4c.17.04.26.17.2.29l-.61,1.19c-.06.12-.25.19-.43.14l-1.69-.4c-.17-.03-.26-.17-.2-.29" fill="#d67003"/><path d="M255.29,222.98l1.44-1.04c.06-.04.43-.51.39-.56l-.01-.06-1.49-1.24c-.06-.09-.24-.11-.34-.04l-1.11.59-.32.46c-.06.04-.08.11-.04.16l1.15,1.69c.06.09.23.11.33.04" fill="#d67003"/><path d="M256.62,217.38c-.85-1.03-.17-2.35,1.43-2.79c1.26-.35,2.71,0,3.38.8.85,1.03.17,2.35-1.43,2.79-1.26.35-2.71.01-3.38-.8m1.49,3.57l6.9-4.96c1.48-1.07.29-2.82-1.82-2.66l-13.76.57-.32.48l1.37,2l2.6-.2c.2-.02.38.06.47.18l3.03,4.43c.28.41,1.07.49,1.53.16" fill="#d67003"/><path d="M257.5,216.72l.61-1.19c.06-.12.25-.19.42-.14l1.7.4c.17.04.26.17.2.29l-.61,1.19c-.06.12-.25.19-.42.14l-1.69-.4c-.18-.03-.27-.17-.21-.29" fill="#d67003"/><g><path d="M256.96,216.89c-.85-1.03-.17-2.35,1.43-2.79c1.26-.35,2.71,0,3.38.8.85,1.03.17,2.35-1.43,2.79-1.26.35-2.71.01-3.38-.8m1.49,3.57l6.9-4.96c1.48-1.07.29-2.82-1.82-2.66l-14.08,1.05l1.37,2l2.6-.2c.2-.02.38.06.47.18l3.03,4.43c.28.41,1.07.5,1.53.16" fill="#ffee52"/><path d="M257.85,216.23l.61-1.19c.06-.12.25-.19.43-.14l1.69.4c.17.04.26.17.2.29l-.61,1.19c-.06.12-.25.19-.43.14l-1.69-.4c-.18-.03-.27-.17-.2-.29" fill="#ffee52"/><path d="M255.64,222.49l1.44-1.04c.06-.04.08-.11.04-.17l-1.16-1.7c-.06-.09-.24-.11-.34-.04l-1.44,1.05c-.06.04-.08.11-.04.16l1.15,1.69c.07.1.24.12.35.05" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL592" transform="matrix(.723947-.689855 0.689855 0.723947-63.985841 208.379598)"><path d="M287.69,193.03c0,0,.78,4.11-.24,7.31-1.26,3.91-5.04,8.89-8.65,10.71-13.4,6.77-20.22.3-20.22.3.17.42,1.77,2.81,2.02,3.2c3.32,5.27,12.53,5.45,20.57.39s11.87-13.44,8.54-18.71c-.23-.36-1.74-2.88-2.02-3.2Z" fill="#ed8203"/><g><path d="M262.43,213.38c-.63-.2-1.16-.43-1.63-.66.62,1.03,1.13,2.13,1.79,3.15.28.43.54.87.82,1.3.61.35,1.26.64,1.97.86-.15-.25-.3-.51-.46-.76-.86-1.29-1.79-2.5-2.49-3.89Z" fill="#c66802"/><path d="M275.39,212.54c.83,1.38,1.64,2.78,2.45,4.17.54-.24,1.08-.5,1.62-.78-.89-1.32-1.98-2.52-2.76-3.9-.45.2-.88.34-1.31.51Z" fill="#c66802"/><path d="M267.2,214.1c.69,1.09,1.37,2.21,2.02,3.32.23.39.44.78.65,1.19.5-.01,1.01-.04,1.54-.1-.97-1.47-1.93-2.95-2.85-4.45-.47.04-.92.04-1.36.04Z" fill="#c66802"/><path d="M264.17,213.8c.69,1.31,1.68,2.44,2.46,3.72.18.3.34.6.51.91.36.05.73.1,1.1.13-.85-1.53-1.66-3.11-2.59-4.55-.52-.04-1.02-.12-1.48-.21Z" fill="#c66802"/><path d="M269.97,213.92c.92,1.47,1.86,2.93,2.82,4.38.38-.07.77-.15,1.16-.25-.99-1.38-1.93-2.79-2.64-4.34-.46.09-.91.16-1.34.21Z" fill="#c66802"/><path d="M272.57,213.43c.71,1.52,1.67,2.91,2.66,4.26.48-.15.96-.31,1.44-.49-.82-1.41-1.63-2.84-2.49-4.23-.56.18-1.09.33-1.61.46Z" fill="#c66802"/><path d="M278.8,211.06c-.32.17-.64.31-.96.46.73,1.35,1.78,2.53,2.67,3.81.22-.13.44-.25.65-.38.27-.17.52-.35.78-.52-.77-1.29-1.5-2.6-2.39-3.82-.25.15-.5.33-.75.45Z" fill="#c66802"/><path d="M285.44,204.44c-.29.46-.6.91-.93,1.35.85,1.32,1.73,2.63,2.61,3.93.34-.42.66-.84.95-1.27-.13-.22-.26-.44-.41-.65-.75-1.1-1.49-2.23-2.22-3.36Z" fill="#c66802"/><path d="M286.86,201.83c-.21.46-.45.93-.71,1.4.85,1.31,1.73,2.59,2.58,3.9.03.05.06.11.09.16.26-.43.49-.87.7-1.31-.24-.42-.48-.85-.74-1.27-.6-.98-1.29-1.92-1.92-2.88Z" fill="#c66802"/><path d="M287.84,198.52c-.08.62-.21,1.24-.39,1.82c0,.01-.01.02-.01.02.66,1.09,1.44,2.09,2.11,3.18.21.33.4.67.59,1.01.21-.56.36-1.13.49-1.68-.53-.87-1.05-1.75-1.62-2.58-.42-.58-.81-1.17-1.17-1.77Z" fill="#c66802"/><path d="M287.86,194.35c.05.45.09.99.11,1.59.6,1.55,1.55,2.89,2.49,4.27.14.21.28.43.41.64.02-.77-.05-1.51-.21-2.23-.96-1.41-1.94-2.82-2.8-4.27Z" fill="#c66802"/><path d="M282.65,208.02c.84,1.26,1.74,2.48,2.61,3.73.35-.34.69-.68,1-1.03-.87-1.28-1.72-2.58-2.57-3.88-.34.41-.68.8-1.04,1.18Z" fill="#c66802"/><path d="M280.59,209.9c.88,1.21,1.59,2.53,2.36,3.82.48-.36.93-.73,1.37-1.11-.85-1.23-1.73-2.44-2.57-3.68-.39.34-.77.67-1.16.97Z" fill="#c66802"/></g><path d="M287.45,200.35c-.75,2.31-2.38,4.99-4.33,7.18.86,1.28,1.7,2.57,2.5,3.88c2.86-2.87,4.66-6.17,5.13-9.26-.96-1.51-1.9-3.05-2.83-4.56-.05.92-.19,1.87-.47,2.76Z" opacity="0.32" fill="#7a4103"/><path d="M267.12,192.65c-8.04,5.06-11.86,13.44-8.54,18.71s12.53,5.44,20.57.39c8.04-5.06,11.87-13.44,8.54-18.71-3.32-5.28-12.53-5.45-20.57-.39Z" fill="#fcd517"/><path d="M270.33,190.95c4.52,1.41,9.01,3.18,13.18,5.32c1.8.92,3.51,1.99,5.16,3.13.46-2.32.18-4.53-.98-6.37-2.88-4.58-10.22-5.28-17.36-2.08Z" fill="#ffbc00"/><path d="M267.12,192.65c-.63.4-1.23.82-1.81,1.26c3.18.19,6.35.48,9.46,1.04-2.27-.93-4.54-1.83-6.78-2.81-.29.17-.58.32-.87.51Z" fill="#ffbc00"/><path d="M269.51,201.75c-2.55-1.19-5.48-2.74-7.39-4.98-4.45,4.77-6.06,10.58-3.54,14.59c3.32,5.27,12.53,5.44,20.57.39c3.38-2.12,6-4.83,7.67-7.65-.52.05-1.04.11-1.56.14-5.34.34-10.86-.22-15.75-2.49Z" opacity="0.54" fill="#fff7ab"/><path d="M269.51,201.75c-2.55-1.19-5.48-2.74-7.39-4.98-.7.75-1.31,1.54-1.87,2.33c4.14,5.9,11.66,7.57,18.88,7.04c2.39-.17,4.71-.58,7.03-1.03.23-.34.46-.67.66-1.01-.52.05-1.04.11-1.56.14-5.34.34-10.86-.22-15.75-2.49Z" opacity="0.54" fill="#fff7ab"/><g><path d="M279.22,210.59c-11.74,6.69-18.07,3.03-19.78,1.86c3.85,4.17,12.28,3.98,19.71-.71c6.08-3.83,9.74-9.54,9.74-14.39-.53,4.58-3.93,9.96-9.67,13.24Z" fill="#ffffd7"/></g><path d="M268.14,194.26c-6.41,4.04-9.77,10.24-7.5,13.85s9.32,3.26,15.73-.78c6.42-4.04,9.78-10.24,7.51-13.85-2.28-3.61-9.33-3.26-15.74.78Z" fill="url(#eCVXhK8UueL616-fill)"/><path d="M263.45,198.15c-3.18,3.49-4.44,7.39-2.82,9.96c2.27,3.61,9.32,3.26,15.73-.78c1.54-.97,2.89-2.06,4.04-3.21-.45-.01-.89,0-1.34-.03-5.27-.46-11.47-2.36-15.61-5.94Z" fill="url(#eCVXhK8UueL617-fill)"/><path d="M268.14,194.26c-6.41,4.04-9.77,10.24-7.5,13.85.13.21.27.39.44.57-1.56-3.66,1.77-9.4,7.83-13.21c6.05-3.81,12.67-4.33,15.3-1.35-.09-.22-.2-.43-.33-.64-2.28-3.61-9.33-3.26-15.74.78Z" fill="#ed8203"/><path d="M258.58,211.36c0,0-3.3-6.26,3.67-13.99c2.99-3.3,6.33-5.27,10.1-7.23-1.75.6-3.52,1.43-5.24,2.51-8.02,5.06-11.85,13.44-8.53,18.71Z" fill="#f9af19"/><g><path d="M272.88,208.07l.9-1.32c.04-.06.03-.13-.02-.17l-1.48-1.46c-.08-.08-.23-.06-.3.03l-.89,1.33c-.04.06-.03.12.02.17l1.47,1.46c.09.07.24.05.3-.04" fill="#d67003"/><path d="M272.33,202.24c-1.02-.86-.85-2.31.37-3.06.96-.6,2.28-.54,3.08.14c1.02.86.85,2.31-.37,3.06-.96.59-2.28.53-3.08-.14m2.32,3.26l4.32-6.3c.93-1.35-.6-2.87-2.32-2.3l-11.51,3.81l1.75,1.73l2.12-.72c.16-.05.34-.02.44.09l3.86,3.82c.36.37,1.05.3,1.34-.13" fill="#d67003"/><path d="M272.88,201.41l.16-1.3c.02-.13.16-.23.31-.23l1.54.07c.16.01.27.12.26.25l-.16,1.3c-.02.13-.16.23-.31.23l-1.54-.07c-.16-.01-.28-.12-.26-.25" fill="#d67003"/><path d="M272.88,208.07l.9-1.32c.04-.06.21-.59.16-.64l-.03-.06-1.62-.94c-.08-.08-.23-.06-.3.03l-.76.81-.13.52c-.04.06-.03.12.02.17l1.47,1.46c.08.08.23.06.29-.03" fill="#d67003"/><path d="M272.33,202.24c-1.02-.86-.85-2.31.37-3.06.96-.6,2.28-.54,3.08.14c1.02.86.85,2.31-.37,3.06-.96.59-2.28.53-3.08-.14m2.32,3.26l4.32-6.3c.93-1.35-.6-2.87-2.32-2.3l-11.39,3.27-.13.55l1.75,1.73l2.12-.72c.16-.05.34-.02.45.09l3.86,3.82c.36.36,1.05.29,1.34-.14" fill="#d67003"/><path d="M272.88,201.41l.16-1.3c.02-.13.16-.23.31-.23l1.54.07c.16.01.27.12.26.25l-.16,1.3c-.02.13-.16.23-.31.23l-1.54-.07c-.16-.01-.28-.12-.26-.25" fill="#d67003"/><g><path d="M272.47,201.68c-1.02-.86-.85-2.31.37-3.06.96-.6,2.28-.54,3.08.14c1.02.86.85,2.31-.37,3.06-.95.59-2.28.54-3.08-.14m2.32,3.27l4.32-6.3c.93-1.35-.6-2.87-2.32-2.3l-11.51,3.81l1.75,1.73l2.12-.72c.16-.05.34-.02.44.09l3.86,3.82c.36.36,1.05.29,1.34-.13" fill="#ffee52"/><path d="M273.02,200.85l.16-1.3c.02-.13.16-.23.31-.23l1.54.07c.16.01.27.12.26.25l-.16,1.3c-.02.13-.16.23-.31.23l-1.54-.07c-.16,0-.28-.11-.26-.25" fill="#ffee52"/><path d="M273.03,207.52l.9-1.32c.04-.06.03-.13-.01-.17l-1.48-1.46c-.08-.08-.23-.06-.3.03l-.89,1.33c-.04.06-.03.12.02.17l1.47,1.46c.07.07.22.05.29-.04" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL631" transform="translate(0-18)"><path d="M291.84,215.44c0,0,.27,2.88-.64,5.02-1.11,2.62-4.04,5.81-6.64,6.83-9.66,3.8-13.95-1.09-13.95-1.09.09.3,1.04,2.05,1.19,2.33c1.95,3.85,8.28,4.55,14.14,1.58s9.03-8.5,7.08-12.35c-.13-.25-1.01-2.09-1.18-2.32Z" fill="#ed8203"/><g><path d="M273.14,227.84c-.42-.18-.77-.37-1.08-.56.36.75.64,1.54,1.03,2.28.16.32.32.63.48.95.4.28.83.52,1.3.72-.09-.18-.17-.37-.27-.55-.5-.94-1.07-1.84-1.46-2.84Z" fill="#c66802"/><path d="M282.12,228.08c.49,1.01.95,2.02,1.42,3.03.39-.13.78-.27,1.17-.43-.53-.97-1.2-1.87-1.65-2.86-.33.11-.63.18-.94.26Z" fill="#c66802"/><path d="M276.38,228.64c.41.8.8,1.61,1.18,2.42.13.28.25.57.37.86.35.02.7.04,1.07.03-.57-1.08-1.14-2.15-1.68-3.24-.33-.02-.64-.04-.94-.07Z" fill="#c66802"/><path d="M274.31,228.24c.39.95,1.01,1.79,1.46,2.72.1.21.2.44.29.66.25.06.5.12.76.16-.49-1.11-.94-2.25-1.49-3.3-.37-.07-.71-.15-1.02-.24Z" fill="#c66802"/><path d="M278.3,228.7c.54,1.07,1.1,2.13,1.66,3.19.27-.02.54-.05.82-.1-.59-1.02-1.15-2.04-1.54-3.16-.33.03-.64.05-.94.07Z" fill="#c66802"/><path d="M280.12,228.52c.39,1.09.96,2.11,1.56,3.11.34-.07.68-.15,1.02-.25-.48-1.03-.94-2.06-1.44-3.07-.4.09-.77.15-1.14.21Z" fill="#c66802"/><path d="M284.57,227.29c-.23.09-.47.18-.69.26.42.97,1.07,1.86,1.6,2.79.16-.07.32-.14.48-.22.2-.1.38-.21.56-.31-.45-.94-.87-1.89-1.4-2.79-.19.09-.37.2-.55.27Z" fill="#c66802"/><path d="M289.56,223.15c-.23.3-.48.59-.73.87.5.97,1.02,1.92,1.55,2.88.26-.26.51-.54.74-.81-.08-.16-.15-.32-.24-.47-.45-.82-.89-1.65-1.32-2.47Z" fill="#c66802"/><path d="M290.7,221.44c-.17.3-.36.61-.57.92.5.95,1.03,1.9,1.53,2.85.02.04.04.08.06.11.21-.29.39-.57.56-.86-.14-.3-.28-.61-.43-.92-.36-.71-.77-1.39-1.15-2.1Z" fill="#c66802"/><path d="M291.59,219.23c-.1.42-.22.84-.39,1.23c0,.01-.01.01-.01.02.39.79.86,1.53,1.25,2.32.12.24.23.49.34.73.18-.38.32-.75.44-1.13-.31-.63-.61-1.27-.95-1.88-.24-.43-.47-.86-.68-1.29Z" fill="#c66802"/><path d="M291.84,217.45c.32,1.1.89,2.09,1.45,3.09.09.15.16.31.25.47.06-.53.06-1.04,0-1.55-.58-1.03-1.16-2.06-1.66-3.11c0,.32-.01.69-.04,1.1Z" fill="#c66802"/><path d="M287.41,225.44c.5.92,1.04,1.83,1.56,2.74.26-.21.52-.43.76-.65-.51-.94-1.02-1.89-1.52-2.83-.26.25-.53.5-.8.74Z" fill="#c66802"/><path d="M285.87,226.6c.53.89.94,1.85,1.38,2.78.35-.21.69-.44,1.02-.67-.51-.9-1.04-1.79-1.54-2.7-.29.21-.57.41-.86.59Z" fill="#c66802"/></g><path d="M284.57,227.29c-5.18,2.04-8.81,1.58-11.06.72.67,1.14,1.39,2.26,1.94,3.45c2.85.94,6.75.55,10.46-1.32-.4-.97-.82-1.93-1.27-2.88-.03,0-.05.02-.07.03Z" opacity="0.25" fill="#ffee52"/><path d="M276.17,228.65c.5,1.07.96,2.16,1.43,3.24c1.74.16,3.69-.06,5.68-.69-.43-1.03-.91-2.04-1.42-3.03-2.25.58-4.14.66-5.69.48Z" opacity="0.28" fill="#ffee52"/><g><path d="M277.27,228.72c.6,1.04,1.1,2.13,1.62,3.21.41-.01.82-.03,1.24-.08-.55-1.05-1.09-2.1-1.63-3.16-.43.04-.84.05-1.23.03Z" opacity="0.35" fill="#ffee52"/><path d="M276.17,228.65c.5,1.07.96,2.16,1.43,3.24.1.01.21.01.32.01-.53-1.1-1.07-2.21-1.71-3.25-.02,0-.03,0-.04,0Z" opacity="0.35" fill="#ffee52"/><path d="M279.44,228.62c.53,1.03,1.06,2.07,1.6,3.1.17-.03.35-.07.52-.1-.56-1.01-1.09-2.04-1.61-3.08-.16.03-.34.07-.51.08Z" opacity="0.35" fill="#ffee52"/><path d="M281.56,228.24c.52,1,1.04,2.01,1.57,3.01.05-.01.1-.03.15-.04-.43-1.03-.91-2.04-1.42-3.03-.11.01-.2.03-.3.06Z" opacity="0.35" fill="#ffee52"/></g><path d="M291.2,220.46c-.66,1.55-1.96,3.29-3.44,4.67.51.94,1,1.88,1.48,2.83c2.16-1.8,3.6-3.96,4.12-6.05-.57-1.11-1.11-2.22-1.65-3.32-.1.63-.26,1.28-.51,1.87Z" opacity="0.32" fill="#7a4103"/><path d="M291.2,220.46c-.44,1.02-1.15,2.12-2.01,3.15.49.99.98,1.98,1.48,2.97.85-.92,1.54-1.9,2.03-2.9-.53-1.14-1-2.3-1.41-3.49-.03.09-.05.18-.09.27Z" opacity="0.32" fill="#7a4103"/><path d="M291.84,215.44c0,0,.27,2.88-.64,5.02-.51,1.2-1.41,2.51-2.48,3.69.5.96,1.05,1.89,1.56,2.85c2.91-2.91,4.12-6.49,2.73-9.22-.12-.27-1-2.11-1.17-2.34Z" opacity="0.32" fill="#7a4103"/><path d="M277.7,213.86c-5.86,2.97-9.03,8.5-7.08,12.35c1.95,3.84,8.28,4.55,14.14,1.58s9.03-8.5,7.08-12.34c-1.95-3.86-8.28-4.57-14.14-1.59Z" fill="#fcd517"/><path d="M280.01,212.89c3.03,1.26,6,2.76,8.74,4.5c1.18.75,2.28,1.6,3.35,2.49.46-1.57.41-3.11-.27-4.45-1.69-3.33-6.69-4.29-11.82-2.54Z" fill="#ffbc00"/><path d="M277.7,213.86c-.46.23-.9.49-1.33.75c2.18.33,4.34.73,6.45,1.32-1.5-.78-3.01-1.55-4.49-2.37-.21.1-.42.19-.63.3Z" fill="#ffbc00"/><path d="M278.76,220.28c-1.68-.98-3.6-2.24-4.78-3.9-3.37,3.01-4.85,6.9-3.37,9.82c1.95,3.84,8.28,4.55,14.14,1.58c2.46-1.24,4.44-2.95,5.77-4.78-.36,0-.73.01-1.09,0-3.68-.1-7.45-.84-10.67-2.72Z" opacity="0.54" fill="#fff7ab"/><path d="M270.33,221.81c-.44,1.55-.38,3.07.29,4.39c1.95,3.84,8.28,4.55,14.14,1.58.48-.24.94-.51,1.38-.78-2.45.04-4.93-.13-7.31-.65-2.46-.54-6.52-2.1-8.5-4.54Z" opacity="0.54" fill="#fff7ab"/><path d="M278.76,220.28c-1.68-.98-3.6-2.24-4.78-3.9-.53.48-1,.98-1.43,1.49c2.48,4.33,7.54,5.95,12.55,6.05c1.65.03,3.28-.1,4.91-.26.18-.22.36-.44.52-.65-.36,0-.73.01-1.09,0-3.69-.11-7.46-.85-10.68-2.73Z" opacity="0.54" fill="#fff7ab"/><g><path d="M284.88,226.99c-8.52,3.86-12.64.93-13.75.02c2.39,3.12,8.2,3.52,13.62.77c4.43-2.24,7.32-5.95,7.62-9.29-.64,3.12-3.32,6.61-7.49,8.5Z" fill="#ffffd7"/></g><path d="M278.29,215.03c-4.68,2.37-7.39,6.43-6.05,9.06c1.33,2.63,6.21,2.84,10.88.46c4.68-2.37,7.39-6.43,6.06-9.06-1.34-2.62-6.21-2.83-10.89-.46Z" fill="url(#eCVXhK8UueL665-fill)"/><path d="M274.82,217.41c-2.41,2.2-3.53,4.8-2.58,6.68c1.33,2.63,6.21,2.84,10.88.46c1.12-.57,2.12-1.23,2.99-1.95-.31-.03-.61-.06-.92-.11-3.61-.64-7.75-2.35-10.37-5.08Z" fill="url(#eCVXhK8UueL666-fill)"/><path d="M270.62,226.2c0,0-1.88-4.52,3.43-9.4c2.27-2.09,4.69-3.23,7.42-4.34-1.24.3-2.52.76-3.77,1.39-5.87,2.98-9.03,8.51-7.08,12.35Z" fill="#f9af19"/><g><path d="M280.77,224.32l.59-1.08c.03-.05.02-.09-.02-.12l-1.23-.72c-.07-.04-.18,0-.22.08l-.59,1.08c-.02.05-.01.09.02.11l1.22.71c.08.06.19.02.23-.06" fill="#d67003"/><path d="M279.94,220.43c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.69.59-1.7.81-2.35.5m1.99,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.48,4.85l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.3.16.82-.03,1.01-.37" fill="#d67003"/><path d="M280.29,219.76l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.11.03-.21-.03-.21-.12" fill="#d67003"/><path d="M280.77,224.32l.59-1.08c.03-.05.11-.44.07-.47l-.02-.03-1.3-.33c-.07-.04-.18,0-.22.08l-.52.7-.07.38c-.02.05-.02.09.02.11l1.22.71c.08.05.19.01.23-.07" fill="#d67003"/><path d="M279.94,220.43c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.69.59-1.7.81-2.35.5m1.99,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.43,4.45-.06.4l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.31.16.83-.03,1.02-.37" fill="#d67003"/><path d="M280.29,219.76l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.11.03-.21-.03-.21-.12" fill="#d67003"/><g><path d="M280,220.02c-.84-.39-.81-1.42.06-2.17.68-.59,1.69-.81,2.35-.5.84.39.81,1.42-.06,2.17-.68.59-1.69.81-2.35.5m2,1.79l2.84-5.15c.61-1.11-.66-1.85-1.93-1.12l-8.48,4.85l1.45.85l1.56-.9c.12-.07.26-.08.34-.03l3.21,1.87c.3.16.82-.02,1.01-.37" fill="#ffee52"/><path d="M280.36,219.35l.03-.92c0-.09.1-.19.22-.22l1.18-.25c.12-.03.22.03.21.12l-.03.92c0,.09-.1.19-.22.22l-1.18.25c-.12.03-.21-.03-.21-.12" fill="#ffee52"/><path d="M280.84,223.91l.59-1.08c.03-.05.02-.09-.02-.12l-1.23-.72c-.07-.04-.18,0-.22.08l-.59,1.08c-.02.05-.02.09.02.11l1.22.71c.08.06.19.02.23-.06" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL679" transform="translate(0-6)"><path d="M305.19,211.46c0,0-.09,1.87-.86,3.15-.95,1.57-3.11,3.35-4.86,3.77-6.52,1.56-8.82-1.95-8.82-1.95.03.2.48,1.4.55,1.6.9,2.64,4.88,3.66,8.9,2.29c4.01-1.37,6.54-4.62,5.64-7.25-.07-.2-.46-1.45-.55-1.61Z" fill="#ed8203"/><g><path d="M292.11,217.7c-.25-.15-.46-.31-.64-.45.16.51.27,1.04.45,1.55.08.22.15.43.22.65.23.21.48.41.77.58-.04-.12-.08-.25-.12-.38-.23-.65-.51-1.28-.68-1.95Z" fill="#c66802"/><path d="M297.83,218.66c.22.69.43,1.38.64,2.07.26-.05.52-.1.79-.17-.25-.67-.6-1.3-.8-1.98-.22.04-.42.06-.63.08Z" fill="#c66802"/><path d="M294.12,218.5c.19.55.37,1.1.54,1.65.06.19.11.39.16.58.22.04.45.09.68.11-.27-.74-.53-1.48-.78-2.23-.22-.02-.41-.06-.6-.11Z" fill="#c66802"/><path d="M292.83,218.06c.16.64.48,1.23.69,1.87.05.15.09.3.13.45.15.06.31.12.47.17-.21-.76-.4-1.52-.66-2.24-.23-.08-.44-.16-.63-.25Z" fill="#c66802"/><path d="M295.34,218.71c.25.73.51,1.46.77,2.19.18.01.35.01.53.01-.29-.7-.55-1.41-.7-2.16-.21,0-.41-.02-.6-.04Z" fill="#c66802"/><path d="M296.52,218.76c.15.73.42,1.44.72,2.13.22-.02.45-.04.68-.07-.21-.7-.42-1.4-.64-2.1-.28.03-.52.04-.76.04Z" fill="#c66802"/><path d="M299.47,218.38c-.16.04-.31.07-.47.1.18.66.51,1.28.77,1.93.11-.03.22-.06.32-.1.13-.05.26-.1.39-.15-.2-.64-.38-1.29-.64-1.91-.12.05-.25.1-.37.13Z" fill="#c66802"/><path d="M303.04,216.18c-.17.17-.36.33-.54.49.23.66.48,1.32.73,1.98.19-.15.37-.3.54-.45-.04-.11-.07-.22-.11-.32-.21-.57-.42-1.13-.62-1.7Z" fill="#c66802"/><path d="M303.92,215.2c-.14.18-.29.36-.45.54.23.65.49,1.3.72,1.96.01.03.02.05.03.08.16-.16.3-.33.44-.5-.06-.21-.12-.42-.19-.63-.17-.5-.37-.97-.55-1.45Z" fill="#c66802"/><path d="M304.69,213.86c-.1.26-.22.52-.36.75c0,0-.01.01-.01.01.18.54.41,1.06.59,1.6.05.17.1.33.15.5.15-.22.27-.45.38-.68-.14-.43-.28-.87-.44-1.29-.11-.3-.21-.59-.31-.89Z" fill="#c66802"/><path d="M305.01,212.75c.1.73.38,1.41.65,2.11.04.11.08.22.11.32.09-.33.13-.66.14-.99-.28-.71-.56-1.42-.78-2.14-.03.2-.06.44-.12.7Z" fill="#c66802"/><path d="M301.46,217.45c.24.64.5,1.26.75,1.89.19-.11.37-.23.54-.35-.24-.65-.48-1.3-.72-1.95-.19.15-.38.28-.57.41Z" fill="#c66802"/><path d="M300.37,218.05c.26.62.43,1.27.63,1.9.24-.1.48-.22.71-.34-.25-.62-.5-1.24-.74-1.86-.2.11-.4.21-.6.3Z" fill="#c66802"/></g><path d="M299.47,218.38c-3.49.84-5.77.22-7.14-.54.33.79.68,1.57.93,2.38c1.74.86,4.26.96,6.81.1-.17-.66-.35-1.31-.55-1.96-.02.01-.03.01-.05.02Z" opacity="0.25" fill="#ffee52"/><path d="M293.98,218.49c.23.73.42,1.47.62,2.2c1.1.26,2.37.29,3.69.07-.18-.7-.4-1.39-.63-2.07-1.49.17-2.71.05-3.68-.2Z" opacity="0.28" fill="#ffee52"/><g><path d="M294.68,218.64c.29.72.51,1.46.75,2.2.26.03.53.06.8.06-.26-.72-.51-1.44-.76-2.16-.28-.03-.54-.06-.79-.1Z" opacity="0.35" fill="#ffee52"/><path d="M293.98,218.49c.23.73.42,1.47.62,2.2.06.02.14.02.2.04-.24-.75-.49-1.51-.8-2.23c0-.01-.01-.01-.02-.01Z" opacity="0.35" fill="#ffee52"/><path d="M296.08,218.77c.25.71.49,1.42.74,2.13.11,0,.23-.01.34-.02-.27-.7-.51-1.4-.75-2.11-.11,0-.23,0-.33,0Z" opacity="0.35" fill="#ffee52"/><path d="M297.46,218.71c.24.69.48,1.38.73,2.06.04,0,.07-.01.1-.01-.18-.7-.4-1.39-.63-2.07-.07.01-.13.01-.2.02Z" opacity="0.35" fill="#ffee52"/></g><path d="M304.33,214.61c-.56.93-1.55,1.93-2.62,2.67.24.64.47,1.29.69,1.94c1.54-.95,2.66-2.2,3.18-3.49-.26-.76-.51-1.52-.76-2.27-.12.39-.28.79-.49,1.15Z" opacity="0.32" fill="#7a4103"/><path d="M304.33,214.61c-.37.62-.93,1.25-1.57,1.83.22.68.45,1.36.68,2.03.63-.51,1.16-1.08,1.56-1.67-.24-.78-.43-1.56-.59-2.36-.03.06-.05.12-.08.17Z" opacity="0.32" fill="#7a4103"/><path d="M305.19,211.46c0,0-.09,1.87-.86,3.15-.44.72-1.13,1.48-1.92,2.14.23.66.5,1.3.74,1.96c2.12-1.6,3.22-3.78,2.58-5.65-.06-.19-.45-1.44-.54-1.6Z" opacity="0.32" fill="#7a4103"/><path d="M296.29,209.17c-4.02,1.37-6.54,4.62-5.64,7.25s4.88,3.66,8.9,2.29c4.01-1.37,6.54-4.62,5.64-7.25-.9-2.64-4.88-3.66-8.9-2.29Z" fill="#fcd517"/><path d="M297.86,208.76c1.82,1.08,3.59,2.31,5.18,3.67.69.59,1.32,1.23,1.92,1.89.43-.96.54-1.95.23-2.87-.78-2.28-3.9-3.34-7.33-2.69Z" fill="#ffbc00"/><path d="M296.29,209.17c-.32.11-.62.23-.92.36c1.36.41,2.71.86,4,1.43-.89-.64-1.78-1.26-2.66-1.92-.13.04-.27.08-.42.13Z" fill="#ffbc00"/><path d="M296.39,213.37c-.99-.78-2.1-1.76-2.7-2.93-2.43,1.62-3.72,3.97-3.04,5.97.9,2.63,4.88,3.66,8.9,2.29c1.68-.57,3.1-1.48,4.12-2.53-.23-.03-.46-.06-.69-.1-2.36-.39-4.7-1.2-6.59-2.7Z" opacity="0.54" fill="#fff7ab"/><path d="M290.86,213.59c-.42.95-.52,1.93-.21,2.83.9,2.63,4.88,3.66,8.9,2.29.33-.11.64-.24.95-.38-1.57-.19-3.14-.53-4.61-1.07-1.52-.57-3.98-1.93-5.03-3.67Z" opacity="0.54" fill="#fff7ab"/><path d="M296.39,213.37c-.99-.78-2.1-1.76-2.7-2.93-.38.26-.73.53-1.05.82c1.19,2.99,4.28,4.49,7.48,5c1.05.17,2.11.23,3.16.27.14-.12.27-.25.39-.37-.23-.03-.46-.06-.69-.1-2.36-.38-4.7-1.19-6.59-2.69Z" opacity="0.54" fill="#fff7ab"/><g><path d="M299.7,218.21c-5.79,1.7-8.17-.54-8.79-1.23c1.24,2.21,4.93,2.99,8.64,1.72c3.03-1.03,5.21-3.14,5.71-5.25-.7,1.94-2.72,3.93-5.56,4.76Z" fill="#ffffd7"/></g><path d="M296.57,209.98c-3.2,1.1-5.3,3.44-4.69,5.24s3.71,2.37,6.91,1.28c3.21-1.09,5.3-3.44,4.69-5.24s-3.71-2.38-6.91-1.28Z" fill="url(#eCVXhK8UueL713-fill)"/><path d="M294.13,211.18c-1.74,1.19-2.69,2.75-2.25,4.04.61,1.8,3.71,2.37,6.91,1.28.77-.26,1.47-.6,2.09-.98-.19-.05-.39-.09-.58-.15-2.24-.74-4.74-2.21-6.17-4.19Z" fill="url(#eCVXhK8UueL714-fill)"/><path d="M290.65,216.42c0,0-.79-3.06,3.04-5.7c1.64-1.13,3.29-1.64,5.14-2.1-.82.08-1.68.26-2.53.55-4.02,1.37-6.55,4.62-5.65,7.25Z" fill="#f9af19"/><g><path d="M297.32,216.14l.48-.64c.02-.03.02-.06,0-.08l-.72-.57c-.04-.03-.12-.01-.15.03l-.47.64c-.02.03-.02.06.01.08l.72.57c.01.03.09.01.13-.03" fill="#d67003"/><path d="M297.13,213.57c-.5-.32-.39-.98.24-1.38.49-.32,1.16-.36,1.55-.11.5.32.39.98-.24,1.38-.49.32-1.16.37-1.55.11m1.11,1.33l2.28-3.04c.49-.65-.25-1.24-1.13-.89l-5.86,2.33.85.67l1.08-.44c.08-.03.17-.03.22.01l1.88,1.48c.18.15.53.08.68-.12" fill="#d67003"/><path d="M297.42,213.18l.1-.59c.01-.06.08-.11.16-.12l.78-.06c.08-.01.13.04.12.1l-.1.59c-.01.06-.08.11-.16.12l-.78.06c-.07,0-.13-.04-.12-.1" fill="#d67003"/><path d="M297.32,216.14l.48-.64c.02-.03.11-.27.09-.29l-.01-.02-.8-.33c-.04-.03-.12-.01-.15.03l-.4.4-.08.24c-.02.03-.02.06.01.08l.72.57c.02.02.1,0,.14-.04" fill="#d67003"/><path d="M297.13,213.57c-.5-.32-.39-.98.24-1.38.49-.32,1.16-.36,1.55-.11.5.32.39.98-.24,1.38-.49.32-1.16.37-1.55.11m1.11,1.33l2.28-3.04c.49-.65-.25-1.24-1.13-.89l-5.79,2.08-.07.25.85.67l1.08-.44c.08-.03.17-.03.22.01l1.88,1.48c.18.15.53.08.68-.12" fill="#d67003"/><path d="M297.42,213.18l.1-.59c.01-.06.08-.11.16-.12l.78-.06c.08-.01.13.04.12.1l-.1.59c-.01.06-.08.11-.16.12l-.78.05c-.07.01-.13-.03-.12-.09" fill="#d67003"/><g><path d="M297.21,213.32c-.5-.32-.39-.98.24-1.38.49-.32,1.16-.36,1.55-.11.5.32.39.98-.24,1.38-.49.32-1.16.37-1.55.11m1.11,1.32l2.28-3.04c.49-.65-.25-1.24-1.13-.89l-5.86,2.33.85.67l1.08-.44c.08-.03.17-.03.22.01l1.88,1.48c.18.16.53.09.68-.12" fill="#ffee52"/><path d="M297.5,212.92l.1-.59c.01-.06.08-.11.16-.12l.78-.06c.08-.01.13.04.12.1l-.1.59c-.01.06-.08.11-.16.12l-.78.06c-.07.01-.13-.04-.12-.1" fill="#ffee52"/><path d="M297.4,215.88l.48-.64c.02-.03.02-.06,0-.08l-.72-.57c-.04-.03-.12-.01-.15.03l-.47.64c-.02.03-.02.06.01.08l.72.57c.02.03.09.02.13-.03" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL727" transform="translate(2.925007-1.389995)"><path d="M236.98,229.88c0,0-.41,1.77-1.37,2.87-1.18,1.34-3.56,2.67-5.31,2.76-6.51.36-8.11-3.41-8.11-3.41-.01.2.21,1.43.25,1.63.4,2.68,4.04,4.35,8.12,3.74s7.07-3.29,6.66-5.97c-.03-.18-.19-1.45-.24-1.62Z" fill="#ed8203"/><g><path d="M223.37,233.58c-.22-.19-.38-.37-.53-.54.07.52.08,1.04.17,1.56.04.22.06.44.1.66.18.24.39.47.63.68-.02-.13-.03-.25-.05-.38-.13-.66-.28-1.31-.32-1.98Z" fill="#c66802"/><path d="M228.68,235.5c.09.7.17,1.4.25,2.09.26,0,.52-.01.78-.03-.12-.68-.35-1.35-.42-2.03-.22,0-.41-.01-.61-.03Z" fill="#c66802"/><path d="M225.14,234.7c.09.56.16,1.12.23,1.68.02.19.04.39.05.58.2.08.41.16.63.23-.13-.75-.25-1.51-.36-2.27-.19-.07-.37-.14-.55-.22Z" fill="#c66802"/><path d="M223.99,234.05c.04.64.25,1.27.33,1.91.02.15.03.3.04.45.14.08.27.17.42.25-.07-.76-.12-1.53-.24-2.26-.2-.12-.38-.23-.55-.35Z" fill="#c66802"/><path d="M226.28,235.11c.11.74.23,1.49.36,2.23.17.04.34.08.51.1-.15-.72-.28-1.45-.29-2.19-.21-.04-.4-.09-.58-.14Z" fill="#c66802"/><path d="M227.4,235.37c.02.73.16,1.45.32,2.16.22.02.43.04.66.05-.08-.71-.16-1.41-.25-2.12-.26-.02-.5-.06-.73-.09Z" fill="#c66802"/><path d="M230.29,235.51c-.16.01-.31.01-.47.02.06.66.27,1.32.4,1.98.11-.01.22-.02.33-.04.14-.02.27-.05.4-.07-.08-.65-.14-1.3-.28-1.94-.12.02-.25.04-.38.05Z" fill="#c66802"/><path d="M234.09,234.03c-.2.13-.4.26-.61.38.11.68.23,1.35.35,2.02.21-.11.41-.22.6-.34-.02-.11-.03-.22-.05-.33-.09-.58-.19-1.15-.29-1.73Z" fill="#c66802"/><path d="M235.11,233.24c-.16.15-.34.29-.52.44.11.67.24,1.33.35,2c0,.03.01.05.01.08.18-.13.35-.26.51-.4-.02-.21-.05-.42-.08-.64-.08-.5-.18-.99-.27-1.48Z" fill="#c66802"/><path d="M236.08,232.09c-.14.23-.3.46-.48.66c0,0-.01,0-.01.01.08.55.21,1.09.29,1.63.02.17.04.34.06.5.18-.19.34-.38.49-.59-.06-.44-.11-.88-.2-1.31-.06-.3-.11-.6-.15-.9Z" fill="#c66802"/><path d="M236.58,231.08c-.03.72.12,1.42.25,2.13.02.11.03.22.05.33.14-.3.24-.61.3-.93-.14-.73-.28-1.46-.37-2.18-.05.19-.13.41-.23.65Z" fill="#c66802"/><path d="M232.36,234.97c.12.65.26,1.29.39,1.94.2-.07.39-.15.58-.24-.12-.66-.24-1.33-.35-1.99-.21.1-.41.2-.62.29Z" fill="#c66802"/><path d="M231.21,235.36c.14.64.2,1.29.27,1.93.25-.06.5-.13.74-.2-.13-.64-.27-1.28-.38-1.91-.21.06-.42.13-.63.18Z" fill="#c66802"/></g><path d="M230.29,235.51c-3.49.19-5.57-.8-6.74-1.76.18.81.38,1.62.48,2.44c1.51,1.13,3.92,1.66,6.5,1.28-.05-.66-.11-1.32-.19-1.97-.01.01-.03.01-.05.01Z" opacity="0.25" fill="#ffee52"/><path d="M225.02,234.66c.09.74.15,1.48.21,2.22c1.01.44,2.22.69,3.52.71-.05-.7-.14-1.4-.25-2.09-1.45-.1-2.6-.42-3.48-.84Z" opacity="0.28" fill="#ffee52"/><g><path d="M225.66,234.93c.15.74.23,1.49.33,2.24.24.08.49.14.76.2-.12-.74-.23-1.47-.35-2.2-.26-.08-.51-.16-.74-.24Z" opacity="0.35" fill="#ffee52"/><path d="M225.02,234.66c.09.74.15,1.48.21,2.22.06.03.13.05.19.07-.1-.76-.2-1.53-.38-2.28-.01,0-.02,0-.02-.01Z" opacity="0.35" fill="#ffee52"/><path d="M226.97,235.3c.11.72.23,1.45.34,2.17.11.02.22.03.33.04-.13-.71-.25-1.43-.35-2.16-.1-.02-.21-.03-.32-.05Z" opacity="0.35" fill="#ffee52"/><path d="M228.31,235.48c.11.7.22,1.4.34,2.1.03,0,.07,0,.1.01-.05-.7-.14-1.4-.25-2.09-.06,0-.12-.01-.19-.02Z" opacity="0.35" fill="#ffee52"/></g><path d="M235.6,232.75c-.7.79-1.82,1.57-2.97,2.1.12.66.23,1.32.32,1.98c1.64-.65,2.93-1.65,3.66-2.79-.12-.77-.22-1.55-.33-2.31-.19.36-.41.72-.68,1.02Z" opacity="0.32" fill="#7a4103"/><path d="M235.6,232.75c-.46.52-1.11,1.04-1.82,1.48.1.69.19,1.38.29,2.06.69-.38,1.3-.83,1.79-1.33-.09-.78-.14-1.57-.15-2.36-.04.05-.07.11-.11.15Z" opacity="0.32" fill="#7a4103"/><path d="M236.98,229.88c0,0-.41,1.77-1.37,2.87-.54.61-1.34,1.22-2.21,1.71.11.67.25,1.33.37,2.01c2.31-1.16,3.74-3.06,3.45-4.96-.03-.19-.19-1.46-.24-1.63Z" opacity="0.32" fill="#7a4103"/><path d="M228.85,226.14c-4.08.62-7.07,3.29-6.66,5.97.4,2.68,4.04,4.35,8.12,3.74s7.07-3.29,6.66-5.96c-.4-2.69-4.04-4.36-8.12-3.75Z" fill="#fcd517"/><path d="M230.42,226.02c1.56,1.35,3.04,2.84,4.33,4.42.56.68,1.05,1.41,1.51,2.15.58-.85.86-1.78.72-2.71-.36-2.33-3.15-3.89-6.56-3.86Z" fill="#ffbc00"/><path d="M228.85,226.14c-.32.05-.63.11-.94.19c1.23.63,2.45,1.3,3.59,2.06-.74-.76-1.49-1.52-2.21-2.3-.15.02-.29.03-.44.05Z" fill="#ffbc00"/><path d="M228.22,230.19c-.81-.92-1.71-2.05-2.08-3.27-2.6,1.13-4.26,3.16-3.95,5.19.4,2.68,4.04,4.35,8.12,3.74c1.71-.26,3.23-.88,4.39-1.71-.22-.07-.43-.14-.65-.22-2.18-.79-4.28-1.98-5.83-3.73Z" opacity="0.54" fill="#fff7ab"/><path d="M222.88,229.43c-.57.84-.83,1.75-.69,2.67.4,2.68,4.04,4.35,8.12,3.74.34-.05.66-.12.98-.19-1.47-.46-2.91-1.05-4.23-1.83-1.36-.81-3.48-2.54-4.18-4.39Z" opacity="0.54" fill="#fff7ab"/><path d="M228.22,230.19c-.81-.92-1.71-2.05-2.08-3.27-.41.18-.79.39-1.15.61.62,3.07,3.32,5.04,6.29,6.09.98.34,1.98.59,2.98.81.15-.09.3-.19.44-.29-.22-.07-.43-.14-.65-.22-2.18-.79-4.28-1.98-5.83-3.73Z" opacity="0.54" fill="#fff7ab"/><g><path d="M230.54,235.4c-5.85.62-7.73-1.94-8.2-2.7.81,2.33,4.2,3.72,7.97,3.15c3.09-.46,5.54-2.1,6.38-4.03-1,1.72-3.29,3.27-6.15,3.58Z" fill="#ffffd7"/></g><path d="M228.97,226.96c-3.26.49-5.68,2.38-5.4,4.21s3.14,2.92,6.4,2.43s5.68-2.37,5.4-4.21c-.27-1.83-3.14-2.92-6.4-2.43Z" fill="url(#eCVXhK8UueL761-fill)"/><path d="M226.43,227.69c-1.88.84-3.06,2.17-2.86,3.47.28,1.83,3.14,2.92,6.4,2.43.78-.12,1.51-.32,2.17-.57-.18-.08-.35-.16-.53-.25-2.02-1.09-4.15-2.93-5.18-5.08Z" fill="url(#eCVXhK8UueL762-fill)"/><path d="M222.19,232.11c0,0-.23-3.07,3.9-4.93c1.77-.8,3.44-1,5.28-1.12-.8-.06-1.65-.04-2.52.09-4.08.61-7.06,3.28-6.66,5.96Z" fill="#f9af19"/><g><path d="M228.62,232.99l.57-.53c.02-.02.03-.05.01-.07l-.59-.67c-.03-.04-.11-.03-.15,0l-.56.53c-.02.02-.03.05-.01.07l.59.67c.02.04.1.04.14,0" fill="#d67003"/><path d="M228.89,230.51c-.42-.4-.2-1,.47-1.28.53-.22,1.17-.15,1.5.16.42.4.2,1-.47,1.28-.53.22-1.17.15-1.5-.16m.83,1.46l2.71-2.51c.58-.54-.03-1.23-.93-1.05l-6.02,1.21.7.79l1.11-.23c.08-.02.17,0,.21.05l1.54,1.75c.16.16.5.15.68-.01" fill="#d67003"/><path d="M229.23,230.17l.2-.55c.02-.06.1-.09.18-.09l.75.08c.08.01.12.06.1.12l-.2.55c-.02.06-.1.09-.18.09l-.75-.08c-.07-.01-.12-.06-.1-.12" fill="#d67003"/><path d="M228.62,232.99l.57-.53c.02-.02.16-.24.14-.26l-.01-.03-.71-.45c-.03-.04-.11-.03-.15,0l-.45.31-.11.21c-.02.02-.03.05-.01.07l.59.67c.02.05.1.05.14.01" fill="#d67003"/><path d="M228.89,230.51c-.42-.4-.2-1,.47-1.28.53-.22,1.17-.15,1.5.16.42.4.2,1-.47,1.28-.53.22-1.17.15-1.5-.16m.83,1.46l2.71-2.51c.58-.54-.03-1.23-.93-1.05l-5.91.99-.11.23.7.79l1.11-.23c.08-.02.17,0,.21.05l1.54,1.75c.16.15.5.14.68-.02" fill="#d67003"/><path d="M229.23,230.17l.2-.55c.02-.06.1-.09.18-.09l.75.08c.08.01.12.06.1.12l-.2.55c-.02.06-.1.09-.18.09l-.75-.08c-.07-.01-.12-.06-.1-.12" fill="#d67003"/><g><path d="M229.01,230.28c-.42-.4-.2-1,.47-1.28.53-.22,1.17-.15,1.5.16.42.4.2,1-.47,1.28-.52.22-1.17.15-1.5-.16m.83,1.46l2.71-2.51c.58-.54-.03-1.23-.93-1.05l-6.02,1.21.7.79l1.11-.23c.08-.02.17,0,.21.05l1.54,1.75c.16.16.5.16.68-.01" fill="#ffee52"/><path d="M229.36,229.94l.2-.55c.02-.06.1-.09.18-.09l.75.08c.08.01.12.06.1.12l-.2.55c-.02.06-.1.09-.18.09l-.75-.08c-.08-.01-.12-.06-.1-.12" fill="#ffee52"/><path d="M228.74,232.76l.57-.53c.02-.02.03-.05.01-.07l-.59-.67c-.03-.04-.11-.03-.15,0l-.56.53c-.02.02-.03.05-.01.07l.59.67c.02.04.1.04.14,0" fill="#ffee52"/></g></g></g><g id="eCVXhK8UueL775" transform="translate(0-5)"><path d="M278.34,231.11c0,0,.76,1.04.89,2.06.17,1.25-.22,3.13-.98,4.11-2.82,3.64-5.57,2.75-5.57,2.75.1.09.86.55.98.62c1.62,1.03,4.19-.14,5.76-2.6c1.56-2.46,1.52-5.29-.1-6.32-.11-.06-.86-.57-.98-.62Z" fill="#ed8203"/><g><path d="M274.02,240.09c-.2.03-.38.03-.54.03.31.2.59.44.91.64.13.08.27.17.4.25.21.02.43.01.66-.02-.07-.05-.15-.1-.23-.15-.41-.24-.83-.46-1.2-.75Z" fill="#c66802"/><path d="M277.5,238.15c.41.27.82.56,1.23.84.12-.14.24-.28.35-.43-.42-.25-.88-.44-1.28-.72-.1.11-.2.2-.3.31Z" fill="#c66802"/><path d="M275.44,239.66c.34.21.67.43,1,.66.11.08.22.16.34.24.14-.07.28-.15.41-.23-.46-.28-.92-.56-1.38-.86-.13.07-.25.13-.37.19Z" fill="#c66802"/><path d="M274.55,239.98c.36.27.79.45,1.17.71.09.06.17.12.26.19.11-.03.22-.07.33-.11-.44-.31-.87-.65-1.32-.92-.15.05-.29.09-.44.13Z" fill="#c66802"/><path d="M276.18,239.25c.45.29.9.56,1.36.84.1-.07.2-.14.29-.22-.46-.25-.9-.52-1.3-.86-.12.08-.24.16-.35.24Z" fill="#c66802"/><path d="M276.84,238.77c.4.33.85.59,1.3.83.11-.1.22-.21.33-.33-.41-.28-.83-.57-1.25-.85-.13.13-.26.24-.38.35Z" fill="#c66802"/><path d="M278.25,237.29c-.07.09-.14.17-.21.26.38.28.83.47,1.24.7.04-.06.09-.13.13-.19.05-.08.1-.17.14-.25-.38-.26-.76-.52-1.16-.75-.04.08-.08.16-.14.23Z" fill="#c66802"/><path d="M279.22,234.57c-.02.17-.05.33-.08.5.41.25.83.5,1.24.75.04-.16.07-.32.1-.48-.07-.04-.13-.09-.2-.13-.35-.2-.7-.42-1.06-.64Z" fill="#c66802"/><path d="M279.27,233.67c0,.15,0,.32-.01.48.41.25.82.49,1.23.74.02.01.03.02.05.03.01-.16.02-.31.02-.46-.12-.08-.25-.17-.37-.25-.3-.19-.61-.36-.92-.54Z" fill="#c66802"/><path d="M279.11,232.62c.06.18.1.37.13.56c0,0,0,.01,0,.01.33.21.68.39,1.01.6.1.07.2.13.29.2-.02-.18-.05-.36-.09-.53-.26-.17-.52-.35-.79-.5-.19-.11-.37-.22-.55-.34Z" fill="#c66802"/><path d="M278.8,231.88c.37.35.81.6,1.25.85.07.04.13.08.2.12-.09-.22-.21-.41-.35-.59-.45-.26-.91-.52-1.34-.81.08.13.16.27.24.43Z" fill="#c66802"/><path d="M278.92,235.94c.4.24.81.46,1.21.69.05-.14.1-.28.14-.42-.41-.24-.82-.49-1.22-.74-.04.16-.08.31-.13.47Z" fill="#c66802"/><path d="M278.6,236.73c.4.22.78.49,1.16.75.08-.16.16-.32.23-.49-.4-.23-.8-.45-1.2-.68-.06.14-.13.28-.19.42Z" fill="#c66802"/></g><path d="M278.25,237.29c-1.51,1.95-3,2.6-4.06,2.78.52.28,1.04.55,1.52.88c1.3-.29,2.7-1.32,3.69-2.88-.37-.28-.75-.55-1.14-.81.01.01,0,.02-.01.03Z" opacity="0.25" fill="#ffee52"/><path d="M275.36,239.71c.43.29.86.61,1.28.91.7-.33,1.4-.86,2.01-1.55-.4-.3-.81-.57-1.23-.84-.73.74-1.43,1.2-2.06,1.48Z" opacity="0.28" fill="#ffee52"/><g><path d="M275.79,239.49c.46.26.9.57,1.35.86.15-.1.31-.2.46-.31-.45-.28-.89-.56-1.34-.83-.16.1-.31.2-.47.28Z" opacity="0.35" fill="#ffee52"/><path d="M275.36,239.71c.43.29.86.61,1.28.91.04-.02.08-.05.12-.07-.45-.3-.91-.6-1.39-.85c0,0-.01.01-.01.01Z" opacity="0.35" fill="#ffee52"/><path d="M276.6,238.96c.44.27.88.55,1.31.82.06-.05.12-.11.18-.16-.44-.26-.88-.53-1.31-.81-.06.05-.12.1-.18.15Z" opacity="0.35" fill="#ffee52"/><path d="M277.32,238.33c.43.27.85.53,1.28.79.02-.02.03-.03.05-.05-.4-.3-.81-.57-1.23-.84-.03.04-.07.07-.1.1Z" opacity="0.35" fill="#ffee52"/></g><path d="M279.24,233.17c.1.74,0,1.7-.25,2.56.41.24.81.49,1.21.75.42-1.17.48-2.33.2-3.24-.47-.29-.93-.6-1.38-.89.09.26.18.54.22.82Z" opacity="0.32" fill="#7a4103"/><path d="M279.24,233.17c.07.49.04,1.07-.05,1.66.41.27.82.53,1.24.8.12-.55.16-1.08.12-1.57-.46-.31-.91-.65-1.33-1.01c0,.04.01.09.02.12Z" opacity="0.32" fill="#7a4103"/><path d="M278.34,231.11c0,0,.76,1.04.89,2.06.08.57.03,1.28-.11,1.97.41.25.83.48,1.24.73.45-1.77.1-3.41-1.05-4.14-.1-.06-.85-.57-.97-.62Z" opacity="0.32" fill="#7a4103"/><path d="M272.59,233.72c-1.56,2.46-1.52,5.29.1,6.32s4.19-.14,5.76-2.6c1.56-2.46,1.52-5.29-.1-6.32s-4.2.14-5.76,2.6Z" fill="#fcd517"/><path d="M273.25,232.83c1.44-.21,2.92-.31,4.36-.26.62.02,1.23.09,1.84.19-.18-.7-.55-1.28-1.11-1.64-1.4-.9-3.53-.13-5.09,1.71Z" fill="#ffbc00"/><path d="M272.59,233.72c-.12.19-.23.39-.34.59.91-.37,1.82-.7,2.76-.96-.75.04-1.5.09-2.25.11-.06.09-.12.17-.17.26Z" fill="#ffbc00"/><path d="M274.45,235.93c-.86.01-1.88-.04-2.71-.41-.61,1.91-.29,3.73.94,4.51c1.62,1.03,4.19-.14,5.76-2.6.66-1.03,1.03-2.13,1.12-3.13-.14.08-.28.17-.42.24-1.43.8-3.03,1.38-4.69,1.39Z" opacity="0.54" fill="#fff7ab"/><path d="M271.58,238.43c.18.69.55,1.26,1.11,1.61c1.62,1.03,4.19-.14,5.76-2.6.13-.2.24-.41.35-.61-.93.57-1.91,1.07-2.94,1.41-1.07.34-2.97.67-4.28.19Z" opacity="0.54" fill="#fff7ab"/><path d="M274.45,235.93c-.86.01-1.88-.04-2.71-.41-.1.3-.16.6-.21.89c1.93,1.09,4.23.56,6.16-.54.64-.36,1.23-.78,1.81-1.21.02-.12.04-.25.05-.37-.14.08-.28.17-.42.24-1.42.81-3.02,1.39-4.68,1.4Z" opacity="0.54" fill="#fff7ab"/><g><path d="M278.31,237.1c-2.38,3.41-4.61,3.22-5.24,3.13c1.62.65,3.93-.52,5.37-2.79c1.18-1.86,1.44-3.93.8-5.27.46,1.33.23,3.26-.93,4.93Z" fill="#ffffd7"/></g><path d="M273.08,234.03c-1.25,1.97-1.36,4.13-.26,4.83c1.11.7,3.01-.32,4.26-2.29s1.36-4.13.26-4.83-3.01.33-4.26,2.29Z" fill="url(#eCVXhK8UueL809-fill)"/><path d="M272.29,235.73c-.42,1.39-.26,2.63.53,3.13c1.11.7,3.01-.32,4.26-2.29.3-.47.53-.95.7-1.42-.12.06-.25.12-.38.17-1.52.57-3.49.86-5.11.41Z" fill="url(#eCVXhK8UueL810-fill)"/><path d="M272.68,240.04c0,0-1.74-1.3-.82-4.37.39-1.31,1.06-2.3,1.85-3.34-.41.4-.79.86-1.12,1.39-1.57,2.46-1.52,5.29.09,6.32Z" fill="#f9af19"/><g><path d="M276.13,237.01l-.02-.55c0-.02-.01-.04-.04-.04l-.63.01c-.03,0-.07.04-.07.08l.02.55c0,.02.02.04.04.04l.63-.01c.04,0,.08-.04.07-.08" fill="#d67003"/><path d="M274.93,235.72c-.41.04-.63-.36-.47-.84.13-.38.46-.69.78-.73.41-.04.63.36.47.84-.12.39-.46.7-.78.73m1.17.23l-.09-2.61c-.02-.56-.67-.56-.99.01l-2.14,3.77.75-.01.39-.7c.03-.05.08-.09.13-.09l1.65-.01c.15,0,.3-.18.3-.36" fill="#d67003"/><path d="M274.92,235.38l-.2-.36c-.02-.04,0-.1.04-.13l.39-.36c.04-.04.09-.04.11,0l.2.36c.02.04,0,.1-.04.13l-.39.36c-.04.04-.09.04-.11,0" fill="#d67003"/><path d="M276.13,237.01l-.02-.55c0-.02-.06-.2-.08-.2l-.02-.01-.57.17c-.03,0-.07.04-.07.08l-.04.38.06.16c0,.02.02.04.04.04l.63-.01c.04.02.08-.02.07-.06" fill="#d67003"/><path d="M274.93,235.72c-.41.04-.63-.36-.47-.84.13-.38.46-.69.78-.73.41-.04.63.36.47.84-.12.39-.46.7-.78.73m1.17.23l-.09-2.61c-.02-.56-.67-.56-.99.01l-2.21,3.61.07.17.75-.01.39-.7c.03-.05.08-.09.13-.09l1.65-.01c.15-.01.3-.19.3-.37" fill="#d67003"/><path d="M274.92,235.38l-.2-.36c-.02-.04,0-.1.04-.13l.39-.36c.04-.04.09-.04.11,0l.2.36c.02.04,0,.1-.04.13l-.39.36c-.04.04-.09.04-.11,0" fill="#d67003"/><g><path d="M274.87,235.55c-.41.04-.63-.36-.47-.84.13-.38.46-.69.78-.73.41-.04.63.36.47.84-.13.38-.46.7-.78.73m1.16.23l-.09-2.61c-.02-.56-.67-.56-.99.01l-2.14,3.77.75-.01.39-.7c.03-.05.08-.09.13-.09l1.65-.01c.15,0,.31-.19.3-.36" fill="#ffee52"/><path d="M274.85,235.21l-.2-.36c-.02-.04,0-.1.04-.13l.39-.36c.04-.04.09-.04.11,0l.2.36c.02.04,0,.1-.04.13l-.39.36c-.04.04-.09.04-.11,0" fill="#ffee52"/><path d="M276.07,236.84l-.02-.55c0-.02-.01-.04-.04-.04l-.63.01c-.03,0-.07.04-.07.08l.02.55c0,.02.02.04.04.04l.63-.01c.03,0,.07-.04.07-.08" fill="#ffee52"/></g></g></g><g><path d="M309.83,212.01c0,0-.1.99-.55,1.65-.55.81-1.75,1.69-2.69,1.86-3.51.64-4.63-1.29-4.63-1.29.01.11.21.76.24.87.4,1.43,2.49,2.08,4.66,1.47s3.61-2.26,3.2-3.69c-.01-.1-.18-.78-.23-.87Z" fill="#ed8203"/><g><path d="M302.71,214.95c-.13-.09-.23-.18-.33-.26.07.28.12.56.2.84.03.12.07.23.1.35.11.12.24.23.39.33-.02-.07-.03-.14-.05-.2-.11-.36-.24-.7-.31-1.06Z" fill="#c66802"/><path d="M305.72,215.63c.1.37.19.74.28,1.12.14-.02.28-.04.42-.07-.11-.36-.28-.71-.37-1.07-.11.01-.22.01-.33.02Z" fill="#c66802"/><path d="M303.75,215.43c.08.3.16.59.24.89.03.1.05.21.07.31.12.03.23.06.36.08-.12-.4-.24-.8-.35-1.2-.12-.02-.22-.05-.32-.08Z" fill="#c66802"/><path d="M303.08,215.16c.07.35.22.67.31,1.01.02.08.04.16.05.24.08.04.16.07.24.1-.09-.41-.17-.82-.28-1.21-.11-.04-.22-.09-.32-.14Z" fill="#c66802"/><path d="M304.39,215.58c.11.4.23.79.35,1.19.09.01.19.02.28.02-.13-.38-.25-.76-.31-1.17-.11-.01-.21-.02-.32-.04Z" fill="#c66802"/><path d="M305.02,215.64c.06.39.18.77.32,1.15.12,0,.24-.01.36-.02-.09-.38-.18-.76-.28-1.13-.14.01-.27.01-.4,0Z" fill="#c66802"/><path d="M306.6,215.52c-.09.02-.17.03-.25.04.08.36.24.7.35,1.05.06-.01.12-.03.18-.04.07-.02.14-.05.21-.07-.09-.35-.17-.69-.29-1.03-.07.02-.14.04-.2.05Z" fill="#c66802"/><path d="M308.55,214.46c-.1.08-.2.17-.3.25.11.36.22.72.33,1.07.11-.07.21-.15.3-.23-.02-.06-.03-.12-.05-.17-.09-.31-.19-.61-.28-.92Z" fill="#c66802"/><path d="M309.05,213.96c-.08.09-.16.18-.25.27.11.35.22.71.32,1.06c0,.01.01.03.01.04.09-.08.17-.17.25-.25-.03-.11-.05-.22-.09-.34-.07-.26-.16-.52-.24-.78Z" fill="#c66802"/><path d="M309.5,213.27c-.06.13-.13.27-.21.39c0,0,0,0,0,0c.08.29.19.57.27.87.02.09.04.18.06.27.09-.11.16-.23.22-.35-.06-.23-.12-.47-.2-.7-.05-.16-.1-.31-.14-.48Z" fill="#c66802"/><path d="M309.7,212.69c.03.39.16.76.28,1.14.02.06.03.12.05.17.06-.17.09-.35.1-.52-.13-.38-.25-.77-.35-1.16-.02.11-.04.24-.08.37Z" fill="#c66802"/><path d="M307.68,215.09c.11.34.23.68.34,1.02.1-.05.2-.11.3-.17-.11-.35-.22-.7-.32-1.06-.11.08-.22.15-.32.21Z" fill="#c66802"/><path d="M307.08,215.38c.12.34.19.68.28,1.03.13-.05.26-.1.39-.16-.11-.34-.23-.67-.34-1.01-.11.05-.22.1-.33.14Z" fill="#c66802"/></g><path d="M306.6,215.52c-1.88.34-3.07-.05-3.77-.49.15.43.32.85.43,1.29.9.51,2.24.63,3.61.25-.07-.35-.15-.71-.24-1.06-.02.01-.03.01-.03.01Z" opacity="0.25" fill="#ffee52"/><path d="M303.68,215.42c.1.39.18.79.27,1.19.57.17,1.25.22,1.96.14-.08-.38-.17-.75-.28-1.12-.8.05-1.44-.04-1.95-.21Z" opacity="0.28" fill="#ffee52"/><g><path d="M304.04,215.52c.13.39.23.79.33,1.19.14.02.28.04.42.06-.11-.39-.23-.78-.34-1.17-.14-.02-.28-.05-.41-.08Z" opacity="0.35" fill="#ffee52"/><path d="M303.68,215.42c.1.39.18.79.27,1.19.03.01.07.02.11.02-.11-.41-.21-.81-.36-1.21-.01,0-.02,0-.02,0Z" opacity="0.35" fill="#ffee52"/><path d="M304.78,215.63c.11.38.22.77.33,1.15.06,0,.12,0,.18,0-.12-.38-.23-.76-.34-1.14-.05,0-.11,0-.17-.01Z" opacity="0.35" fill="#ffee52"/><path d="M305.52,215.64c.11.37.22.75.33,1.12.02,0,.04,0,.05,0-.08-.38-.17-.75-.28-1.12-.03,0-.06,0-.1,0Z" opacity="0.35" fill="#ffee52"/></g><path d="M309.29,213.66c-.33.48-.88.98-1.47,1.34.11.35.21.7.31,1.05.85-.46,1.48-1.09,1.79-1.76-.12-.41-.23-.82-.34-1.23-.07.21-.17.42-.29.6Z" opacity="0.32" fill="#7a4103"/><path d="M309.29,213.66c-.21.32-.53.64-.89.93.1.37.2.73.3,1.1.35-.25.65-.54.88-.84-.1-.42-.19-.84-.24-1.27-.02.03-.04.06-.05.08Z" opacity="0.32" fill="#7a4103"/><path d="M309.83,212.01c0,0-.1.99-.55,1.65-.25.37-.64.75-1.08,1.08.1.36.23.71.34,1.06c1.17-.79,1.82-1.91,1.53-2.92-.02-.1-.19-.78-.24-.87Z" opacity="0.32" fill="#7a4103"/><path d="M305.17,210.54c-2.17.61-3.61,2.26-3.2,3.69.4,1.42,2.49,2.08,4.66,1.47s3.61-2.26,3.21-3.69c-.41-1.42-2.49-2.08-4.67-1.47Z" fill="#fcd517"/><path d="M306.02,210.37c.94.62,1.84,1.33,2.65,2.1.35.33.66.69.96,1.06.26-.5.34-1.02.21-1.52-.36-1.23-1.98-1.89-3.82-1.64Z" fill="#ffbc00"/><path d="M305.17,210.54c-.17.05-.33.1-.5.17.71.26,1.41.54,2.08.87-.45-.36-.91-.72-1.35-1.1-.07.02-.15.04-.23.06Z" fill="#ffbc00"/><path d="M305.11,212.78c-.5-.44-1.07-.99-1.35-1.63-1.33.79-2.09,2-1.79,3.08.4,1.42,2.49,2.08,4.66,1.47.91-.26,1.69-.7,2.26-1.23-.12-.02-.24-.05-.37-.07-1.23-.28-2.45-.78-3.41-1.62Z" opacity="0.54" fill="#fff7ab"/><path d="M302.16,212.73c-.25.49-.33,1.01-.19,1.5.4,1.42,2.49,2.08,4.66,1.47.18-.05.35-.11.52-.17-.83-.15-1.65-.37-2.42-.7-.8-.35-2.06-1.14-2.57-2.1Z" opacity="0.54" fill="#fff7ab"/><path d="M305.11,212.78c-.5-.44-1.07-.99-1.35-1.63-.21.13-.4.26-.58.41.55,1.62,2.14,2.51,3.83,2.87.55.12,1.11.18,1.67.24.08-.06.15-.12.22-.19-.12-.02-.24-.05-.37-.07-1.24-.29-2.46-.79-3.42-1.63Z" opacity="0.54" fill="#fff7ab"/><g><path d="M306.72,215.44c-3.13.73-4.32-.52-4.63-.91.6,1.21,2.53,1.73,4.54,1.16c1.64-.46,2.86-1.52,3.18-2.62-.42,1.02-1.56,2.01-3.09,2.37Z" fill="#ffffd7"/></g><path d="M305.3,210.98c-1.73.49-2.92,1.67-2.64,2.65.27.97,1.9,1.37,3.63.88s2.92-1.67,2.64-2.65c-.27-.98-1.9-1.37-3.63-.88Z" fill="url(#eCVXhK8UueL857-fill)"/><path d="M303.97,211.55c-.96.58-1.51,1.38-1.31,2.08.27.97,1.9,1.37,3.63.88.42-.12.8-.27,1.14-.46-.1-.03-.2-.06-.3-.1-1.18-.46-2.46-1.31-3.16-2.4Z" fill="url(#eCVXhK8UueL858-fill)"/><path d="M301.97,214.23c0,0-.33-1.65,1.78-2.94.9-.55,1.8-.78,2.79-.97-.44.02-.9.09-1.36.22-2.18.61-3.61,2.27-3.21,3.69Z" fill="#f9af19"/><g><path d="M305.52,214.27l.27-.32c.01-.01.01-.03,0-.04l-.37-.32c-.02-.02-.06-.01-.08.01l-.27.33c-.01.01-.01.03,0,.04l.36.32c.03.01.07,0,.09-.02" fill="#d67003"/><path d="M305.49,212.91c-.26-.19-.18-.53.17-.73.27-.15.62-.16.83-.01.26.19.18.53-.17.73-.27.15-.63.15-.83.01m.56.73l1.3-1.55c.28-.33-.1-.67-.57-.51l-3.18,1.07.43.38.59-.2c.04-.02.09-.01.12.01l.96.84c.07.09.26.06.35-.04" fill="#d67003"/><path d="M305.66,212.7l.07-.31c.01-.03.05-.06.09-.06l.41-.01c.04,0,.07.02.06.06l-.07.31c-.01.03-.05.06-.09.06l-.41.01c-.04,0-.07-.03-.06-.06" fill="#d67003"/><path d="M305.52,214.27l.27-.32c.01-.01.07-.14.06-.15l-.01-.01-.42-.2c-.02-.02-.06-.01-.08.01l-.22.2-.05.12c-.01.01-.01.03,0,.04l.36.32c.03.02.07.01.09-.01" fill="#d67003"/><path d="M305.49,212.91c-.26-.19-.18-.53.17-.73.27-.15.62-.16.83-.01.26.19.18.53-.17.73-.27.15-.63.15-.83.01m.56.73l1.3-1.55c.28-.33-.1-.67-.57-.51l-3.13.94-.05.13.43.38.59-.2c.04-.02.09-.01.12.01l.96.84c.07.09.26.06.35-.04" fill="#d67003"/><path d="M305.66,212.7l.07-.31c.01-.03.05-.06.09-.06l.41-.01c.04,0,.07.02.06.06l-.07.31c-.01.03-.05.06-.09.06l-.41.01c-.04,0-.07-.03-.06-.06" fill="#d67003"/><g><path d="M305.54,212.77c-.26-.19-.18-.53.17-.73.27-.15.62-.16.83-.01.26.19.18.53-.17.73-.27.15-.63.16-.83.01m.56.74l1.3-1.55c.28-.33-.1-.67-.57-.51l-3.18,1.07.43.38.59-.2c.04-.02.09-.01.12.01l.96.84c.07.09.26.06.35-.04" fill="#ffee52"/><path d="M305.71,212.57l.07-.31c.01-.03.05-.06.09-.06l.41-.01c.04,0,.07.02.06.06l-.07.31c-.01.03-.05.06-.09.06l-.41.01c-.04,0-.07-.03-.06-.06" fill="#ffee52"/><path d="M305.57,214.14l.27-.32c.01-.01.01-.03,0-.04l-.37-.32c-.02-.02-.06-.01-.08.01l-.27.33c-.01.01-.01.03,0,.04l.36.32c.03.01.07,0,.09-.02" fill="#ffee52"/></g></g></g><g><path d="M223.43,232.24c0,0-.1.8-.48,1.33-.46.65-1.46,1.34-2.23,1.46-2.87.45-3.74-1.15-3.74-1.15.01.09.16.62.18.71.3,1.17,1.98,1.75,3.77,1.29c1.78-.46,2.98-1.77,2.68-2.94-.02-.07-.14-.62-.18-.7Z" fill="#ed8203"/><g><path d="M217.57,234.49c-.1-.07-.19-.15-.26-.22.05.23.08.46.14.68.03.1.05.19.07.29.09.1.19.19.31.27-.01-.05-.02-.11-.04-.17-.07-.27-.17-.55-.22-.85Z" fill="#c66802"/><path d="M220.01,235.1c.07.3.14.61.2.92.11-.01.23-.03.35-.05-.09-.3-.22-.58-.28-.88-.09.01-.18.01-.27.01Z" fill="#c66802"/><path d="M218.41,234.91c.06.24.12.49.18.73.02.08.03.17.05.26.09.03.19.05.29.07-.09-.33-.18-.66-.26-.99-.1-.02-.18-.05-.26-.07Z" fill="#c66802"/><path d="M217.87,234.67c.05.28.17.55.23.83.02.06.03.13.04.2.06.03.13.06.2.09-.07-.33-.12-.67-.21-.99-.1-.04-.18-.08-.26-.13Z" fill="#c66802"/><path d="M218.93,235.04c.08.32.17.65.26.97.08.01.15.02.23.02-.1-.31-.19-.63-.23-.96-.09,0-.18-.02-.26-.03Z" fill="#c66802"/><path d="M219.44,235.1c.04.32.13.63.24.94.1,0,.19,0,.29-.01-.07-.31-.13-.62-.21-.93-.11.01-.22.01-.32,0Z" fill="#c66802"/><path d="M220.73,235.03c-.07.01-.14.02-.21.03.06.29.18.57.27.86.05-.01.1-.02.14-.03.06-.02.12-.03.17-.05-.07-.28-.12-.57-.21-.85-.06.02-.11.04-.16.04Z" fill="#c66802"/><path d="M222.34,234.21c-.08.07-.17.13-.25.19.08.29.16.59.25.88.09-.06.17-.12.25-.18-.01-.05-.02-.1-.04-.14-.07-.25-.14-.5-.21-.75Z" fill="#c66802"/><path d="M222.76,233.81c-.07.07-.14.14-.21.22.08.29.17.58.24.87c0,.01.01.02.01.03.07-.07.14-.13.21-.2-.02-.09-.04-.18-.06-.28-.06-.21-.13-.42-.19-.64Z" fill="#c66802"/><path d="M223.14,233.26c-.05.11-.11.22-.18.31c0,0,0,0,0,0c.06.24.14.47.2.71.02.07.03.15.05.22.07-.09.13-.19.19-.28-.05-.19-.09-.38-.15-.57-.05-.13-.08-.26-.11-.39Z" fill="#c66802"/><path d="M223.31,232.79c.02.32.11.62.21.93.01.05.03.1.04.14.05-.14.08-.28.09-.42-.1-.32-.19-.63-.26-.95-.02.09-.05.19-.08.3Z" fill="#c66802"/><path d="M221.61,234.7c.08.28.17.56.26.84.08-.04.17-.09.25-.13-.08-.29-.16-.58-.24-.87-.09.06-.18.11-.27.16Z" fill="#c66802"/><path d="M221.12,234.93c.09.28.14.56.21.84.11-.04.21-.08.32-.12-.08-.28-.17-.55-.26-.83-.09.04-.18.07-.27.11Z" fill="#c66802"/></g><path d="M220.73,235.03c-1.54.24-2.5-.1-3.06-.48.11.35.24.7.32,1.06.72.43,1.81.56,2.94.27-.05-.29-.11-.58-.17-.86-.02.01-.03.01-.03.01Z" opacity="0.25" fill="#ffee52"/><path d="M218.35,234.9c.07.32.13.65.19.97.47.15,1.01.21,1.59.16-.05-.31-.12-.61-.2-.91-.65.01-1.17-.08-1.58-.22Z" opacity="0.28" fill="#ffee52"/><g><path d="M218.64,234.98c.1.32.17.65.25.98.11.02.23.04.34.06-.09-.32-.17-.64-.25-.96-.12-.03-.23-.05-.34-.08Z" opacity="0.35" fill="#ffee52"/><path d="M218.35,234.9c.07.32.13.65.19.97.03.01.06.01.09.02-.08-.33-.16-.67-.27-.99c0,0-.01,0-.01,0Z" opacity="0.35" fill="#ffee52"/><path d="M219.24,235.09c.08.31.16.63.25.94.05,0,.1,0,.15,0-.09-.31-.17-.62-.25-.94-.05,0-.1,0-.15,0Z" opacity="0.35" fill="#ffee52"/><path d="M219.85,235.11c.08.31.16.61.24.92.02,0,.03,0,.04,0-.05-.31-.12-.61-.2-.91-.03-.01-.05-.01-.08-.01Z" opacity="0.35" fill="#ffee52"/></g><path d="M222.95,233.57c-.28.38-.73.78-1.22,1.07.08.29.16.57.23.86.7-.36,1.23-.86,1.49-1.4-.09-.34-.17-.67-.25-1.01-.06.17-.14.34-.25.48Z" opacity="0.32" fill="#7a4103"/><path d="M222.95,233.57c-.18.25-.44.51-.74.74.07.3.15.6.22.9.29-.2.54-.43.73-.67-.08-.34-.13-.69-.17-1.04-.01.03-.02.05-.04.07Z" opacity="0.32" fill="#7a4103"/><path d="M223.43,232.24c0,0-.1.8-.48,1.33-.21.3-.54.6-.9.86.08.29.17.58.25.87.97-.62,1.52-1.52,1.31-2.35-.02-.08-.14-.63-.18-.71Z" opacity="0.32" fill="#7a4103"/><path d="M219.67,230.95c-1.78.46-2.98,1.77-2.68,2.94s1.98,1.75,3.77,1.29c1.78-.46,2.98-1.77,2.69-2.94-.32-1.17-2-1.75-3.78-1.29Z" fill="#fcd517"/><path d="M220.36,230.83c.75.53,1.47,1.12,2.11,1.76.28.28.53.58.76.88.22-.4.3-.82.2-1.23-.26-1.01-1.57-1.58-3.07-1.41Z" fill="#ffbc00"/><path d="M219.67,230.95c-.14.04-.27.08-.41.12.57.22,1.14.46,1.68.75-.36-.31-.73-.61-1.08-.92-.07.02-.13.03-.19.05Z" fill="#ffbc00"/><path d="M219.57,232.77c-.4-.37-.85-.83-1.07-1.36-1.1.62-1.75,1.59-1.52,2.48.3,1.17,1.98,1.75,3.77,1.29.75-.19,1.39-.53,1.87-.95-.1-.02-.2-.04-.3-.07-1-.25-1.99-.68-2.75-1.39Z" opacity="0.54" fill="#fff7ab"/><path d="M217.17,232.67c-.22.4-.29.81-.19,1.22.3,1.17,1.98,1.75,3.77,1.29.15-.04.29-.08.42-.13-.67-.14-1.34-.33-1.96-.62-.63-.3-1.65-.97-2.04-1.76Z" opacity="0.54" fill="#fff7ab"/><path d="M219.57,232.77c-.4-.37-.85-.83-1.07-1.36-.17.1-.33.21-.48.32.41,1.33,1.7,2.09,3.06,2.42.45.11.9.17,1.36.23.06-.05.12-.1.18-.15-.1-.02-.2-.04-.3-.07-1-.25-1.99-.68-2.75-1.39Z" opacity="0.54" fill="#fff7ab"/><g><path d="M220.83,234.97c-2.56.54-3.51-.51-3.76-.83.46,1,2.03,1.46,3.67,1.04c1.35-.34,2.36-1.18,2.65-2.07-.36.81-1.31,1.6-2.56,1.86Z" fill="#ffffd7"/></g><path d="M219.76,231.31c-1.42.36-2.41,1.31-2.2,2.11.2.8,1.52,1.15,2.94.79s2.41-1.31,2.21-2.1c-.21-.81-1.53-1.17-2.95-.8Z" fill="url(#eCVXhK8UueL905-fill)"/><path d="M218.66,231.74c-.79.45-1.26,1.1-1.11,1.67.2.8,1.52,1.15,2.94.79.34-.09.66-.21.94-.35-.08-.03-.16-.05-.24-.09-.95-.39-1.98-1.11-2.53-2.02Z" fill="url(#eCVXhK8UueL906-fill)"/><path d="M216.98,233.89c0,0-.24-1.35,1.51-2.36.75-.43,1.48-.6,2.29-.73-.36.01-.73.05-1.11.15-1.79.45-2.99,1.77-2.69,2.94Z" fill="#f9af19"/><g><path d="M219.87,233.99l.23-.26c.01-.01.01-.02,0-.03l-.29-.27c-.02-.01-.05-.01-.07.01l-.23.26c-.01.01-.01.02,0,.03l.29.27c.02.02.05.01.07-.01" fill="#d67003"/><path d="M219.88,232.88c-.21-.16-.13-.44.15-.59.22-.12.51-.12.67.01.21.16.13.44-.15.59-.22.12-.51.11-.67-.01m.43.61l1.09-1.24c.23-.27-.07-.54-.46-.42l-2.61.81.34.32.48-.15c.04-.01.07-.01.1.01l.76.71c.08.06.23.04.3-.04" fill="#d67003"/><path d="M220.02,232.72l.06-.25c.01-.03.04-.05.07-.05h.34c.03,0,.06.02.05.05l-.06.25c-.01.03-.04.05-.07.05h-.34c-.04-.01-.06-.03-.05-.05" fill="#d67003"/><path d="M219.87,233.99l.23-.26c.01-.01.06-.11.05-.12v-.01l-.34-.17c-.02-.01-.05-.01-.07.01l-.18.16-.04.1c-.01.01-.01.02,0,.03l.29.27c.01.02.04.01.06-.01" fill="#d67003"/><path d="M219.88,232.88c-.21-.16-.13-.44.15-.59.22-.12.51-.12.67.01.21.16.13.44-.15.59-.22.12-.51.11-.67-.01m.43.61l1.09-1.24c.23-.27-.07-.54-.46-.42l-2.57.7-.04.11.34.32.48-.15c.04-.01.07-.01.1.01l.76.71c.08.06.23.04.3-.04" fill="#d67003"/><path d="M220.02,232.72l.06-.25c.01-.03.04-.05.07-.05h.34c.03,0,.06.02.05.05l-.06.25c-.01.03-.04.05-.07.05h-.34c-.04-.01-.06-.03-.05-.05" fill="#d67003"/><g><path d="M219.92,232.77c-.21-.16-.13-.44.15-.59.22-.12.51-.12.67.01.21.16.13.44-.15.59-.22.12-.51.12-.67-.01m.44.61l1.09-1.24c.23-.27-.07-.54-.46-.42l-2.61.81.34.32.48-.15c.04-.01.07-.01.1.01l.76.71c.07.06.22.05.3-.04" fill="#ffee52"/><path d="M220.06,232.61l.06-.25c.01-.03.04-.05.07-.05h.34c.03,0,.06.02.05.05l-.06.25c-.01.03-.04.05-.07.05h-.34c-.03,0-.06-.02-.05-.05" fill="#ffee52"/><path d="M219.91,233.89l.23-.26c.01-.01.01-.02,0-.03l-.29-.27c-.02-.01-.05-.01-.07.01l-.23.26c-.01.01-.01.02,0,.03l.29.27c.02.01.06,0,.07-.01" fill="#ffee52"/></g></g></g>
            </svg>
          </div>
          <div class="balance" @click="toWin">
            <div class="balanceBtn">
              <img src="../../assets/image/coin.png" alt="coin" height="50">
              <span>{{this.prize}} </span> <span>ARES</span>
            </div>
            <div class="price">in prize!</div>
          </div>
          <div class="buyAres">
            <div class="buyAresBtn" @click="buyTickets">
              Buy Tickets
            </div>
          </div>
          <div class="desc">
            {{lg("upNow")}} <span style="color: #E19D2A">{{winTotalNum}}</span> {{lg("peopleParticipated")}}
          </div>
        </div>
      </div>
      <div class="horse">
        <!--<img src="../../assets/image/horse.png" alt="horse" height="500">-->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" id="e6OP4hnGjpA1" viewBox="0 0 375.83 432" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><defs><linearGradient id="e6OP4hnGjpA4-fill" x1="-82.92412" y1="-203.560237" x2="-53.654648" y2="-206.503028" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA4-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA4-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA8-fill" x1="61.792248" y1="-228.808666" x2="104.931818" y2="-215.605324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA8-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA8-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA12-fill" x1="-166.404673" y1="-196.884825" x2="-137.135201" y2="-199.827616" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA12-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA12-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA16-fill" x1="-21.686987" y1="-222.128553" x2="21.452583" y2="-208.92521" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA16-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA16-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA20-fill" x1="-258.264679" y1="-191.2849" x2="-228.995207" y2="-194.227691" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA20-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA20-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA24-fill" x1="-113.55455" y1="-216.539777" x2="-70.41498" y2="-203.336434" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA24-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA24-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA31-fill" x1="-2.491237" y1="-51.641376" x2="35.969642" y2="-51.641376" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA31-fill-0" offset="0%" stop-color="#805829"/><stop id="e6OP4hnGjpA31-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA34-fill" x1="-12.35028" y1="-51.629822" x2="8.857469" y2="-51.629822" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA34-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA34-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA37-fill" x1="8.186648" y1="46.400996" x2="8.186648" y2="-24.678587" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA37-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA37-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA40-fill" x1="-4.708019" y1="32.683408" x2="47.259606" y2="32.683408" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA40-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA40-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA43-fill" x1="-20.554098" y1="11.969325" x2="15.146876" y2="11.969325" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA43-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA43-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA46-fill" x1="10.821415" y1="50.338325" x2="158.408524" y2="50.338325" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA46-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA46-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA49-fill" x1="-29.153876" y1="-29.541065" x2="-11.930246" y2="-29.541065" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA49-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA49-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA52-fill" x1="-30.554342" y1="-34.671825" x2="-7.026838" y2="-34.671825" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA52-fill-0" offset="0%" stop-color="#805829"/><stop id="e6OP4hnGjpA52-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA55-fill" x1="-31.959934" y1="-40.359718" x2="-4.722043" y2="-40.359718" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA55-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA55-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA58-fill" x1="-32.54469" y1="-48.391954" x2="-0.90016" y2="-48.391954" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA58-fill-0" offset="0%" stop-color="#805829"/><stop id="e6OP4hnGjpA58-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA61-fill" x1="-31.677972" y1="-54.806434" x2="5.872884" y2="-54.806434" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA61-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA61-fill-1" offset="100%" stop-color="#805829"/></linearGradient><linearGradient id="e6OP4hnGjpA64-fill" x1="-36.334165" y1="13.887224" x2="-8.715234" y2="13.887224" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA64-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA64-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA67-fill" x1="-39.20385" y1="6.408266" x2="0.009165" y2="6.408266" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA67-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA67-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA70-fill" x1="-42.200813" y1="2.92036" x2="0.817637" y2="2.92036" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA70-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA70-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA73-fill" x1="-47.02106" y1="-9.741869" x2="-4.357544" y2="-9.741869" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA73-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA73-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA76-fill" x1="-50.379296" y1="-19.131002" x2="-3.291116" y2="-19.131002" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA76-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA76-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA79-fill" x1="-14.670155" y1="-171.0761" x2="33.48051" y2="-171.0761" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA79-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA79-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA82-fill" x1="-14.969978" y1="-164.300878" x2="289.017907" y2="-164.300878" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA82-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA82-fill-1" offset="99.5%" stop-color="#6a431a"/></linearGradient><linearGradient id="e6OP4hnGjpA85-fill" x1="-43.83371" y1="-178.65183" x2="212.278092" y2="-178.65183" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA85-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA85-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA88-fill" x1="-30.748307" y1="5.850315" x2="79.104848" y2="-32.02518" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA88-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA88-fill-1" offset="22.8%" stop-color="#c9c9c9"/><stop id="e6OP4hnGjpA88-fill-2" offset="27.3%" stop-color="#b9b9b9"/><stop id="e6OP4hnGjpA88-fill-3" offset="67.1%" stop-color="#b8b8b8"/><stop id="e6OP4hnGjpA88-fill-4" offset="75.1%" stop-color="#b8b8b8"/><stop id="e6OP4hnGjpA88-fill-5" offset="90.8%" stop-color="#cbcbcb"/><stop id="e6OP4hnGjpA88-fill-6" offset="99.1%" stop-color="#e7e7e7"/></linearGradient><linearGradient id="e6OP4hnGjpA91-fill" x1="-2.752114" y1="0.001991" x2="2.750289" y2="0.001991" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA91-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA91-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA91-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA94-fill" x1="-2.744504" y1="-0.001516" x2="2.7579" y2="-0.001516" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA94-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA94-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA94-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA97-fill" x1="-2.749615" y1="0.003542" x2="2.752788" y2="0.003542" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA97-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA97-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA97-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA100-fill" x1="-2.751452" y1="0.003702" x2="2.750952" y2="0.003702" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA100-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA100-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA100-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA103-fill" x1="-2.748752" y1="-0.000166" x2="2.753651" y2="-0.000166" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA103-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA103-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA103-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA106-fill" x1="-2.755728" y1="0.008122" x2="2.746676" y2="0.008122" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA106-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA106-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA106-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA109-fill" x1="-2.405616" y1="-0.008285" x2="2.408054" y2="-0.008285" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA109-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA109-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA109-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA112-fill" x1="-2.401181" y1="-0.001245" x2="2.41249" y2="-0.001245" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA112-fill-0" offset="0%" stop-color="#a9a9a9"/><stop id="e6OP4hnGjpA112-fill-1" offset="51%" stop-color="#b7b7b7"/><stop id="e6OP4hnGjpA112-fill-2" offset="100%" stop-color="#b8b8b8"/></linearGradient><linearGradient id="e6OP4hnGjpA115-fill" x1="-164.895891" y1="-43.587097" x2="-139.568177" y2="-43.587097" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA115-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA115-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA118-fill" x1="-180.299031" y1="-40.067918" x2="-156.44451" y2="-40.067918" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA118-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA118-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA121-fill" x1="-184.026366" y1="-55.056389" x2="-158.70549" y2="-55.056389" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA121-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA121-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA124-fill" x1="-75.60587" y1="-12.269646" x2="38.429453" y2="-12.269646" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA124-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA124-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA127-fill" x1="-125.571057" y1="-14.597655" x2="-90.515304" y2="-14.597655" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA127-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA127-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA130-fill" x1="-182.489825" y1="-69.768476" x2="-150.297782" y2="-69.768476" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA130-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA130-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA133-fill" x1="-160.45518" y1="-171.453994" x2="-119.948616" y2="-171.453994" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA133-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA133-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA136-fill" x1="-169.329286" y1="-164.00856" x2="-134.601109" y2="-164.00856" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA136-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA136-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA139-fill" x1="-139.986911" y1="-166.921805" x2="-100.119352" y2="-166.921805" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA139-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA139-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA142-fill" x1="-148.981348" y1="-159.495773" x2="-116.251622" y2="-159.495773" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA142-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA142-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA145-fill" x1="-171.715084" y1="-109.052897" x2="-141.933607" y2="-109.052897" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA145-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA145-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA148-fill" x1="-151.291678" y1="-110.922217" x2="-123.318435" y2="-110.922217" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA148-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA148-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA151-fill" x1="-144.77409" y1="-95.666" x2="-70.886985" y2="-95.666" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA151-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA151-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA154-fill" x1="-133.455079" y1="-9.450852" x2="-47.643821" y2="-9.450852" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA154-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA154-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA157-fill" x1="-24.58316" y1="-173.006242" x2="20.42792" y2="-173.006242" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA157-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA157-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA160-fill" x1="-44.479366" y1="-180.70708" x2="0.370939" y2="-180.70708" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA160-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA160-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA163-fill" x1="-34.614382" y1="-162.11445" x2="0.466807" y2="-162.11445" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA163-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA163-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA166-fill" x1="-41.131581" y1="-121.391511" x2="-12.191433" y2="-121.391511" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA166-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA166-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA169-fill" x1="-60.842087" y1="-123.936503" x2="-30.302879" y2="-123.936503" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA169-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA169-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA172-fill" x1="-52.336679" y1="-167.691589" x2="-15.090184" y2="-167.691589" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA172-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA172-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA175-fill" x1="-60.661049" y1="-45.025523" x2="-3.405349" y2="-45.025523" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA175-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA175-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA178-fill" x1="-34.600818" y1="-86.119396" x2="12.283983" y2="-86.119396" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA178-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA178-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA181-fill" x1="-43.062473" y1="-102.39647" x2="-9.954546" y2="-102.39647" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA181-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA181-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA193-fill" x1="-133.643447" y1="-110.579766" x2="-86.652352" y2="-110.579766" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA193-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA193-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA196-fill" x1="10.778568" y1="26.721906" x2="90.581033" y2="26.721906" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA196-fill-0" offset="0%" stop-color="#8e612d"/><stop id="e6OP4hnGjpA196-fill-1" offset="99.5%" stop-color="#8e532d"/></linearGradient><linearGradient id="e6OP4hnGjpA228-fill" x1="-76.258293" y1="-100.538239" x2="-76.258293" y2="-124.265333" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA228-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA228-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA231-fill" x1="-84.283315" y1="-102.069546" x2="-84.283315" y2="-124.661598" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA231-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA231-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA234-fill" x1="-94.167423" y1="-100.31596" x2="-94.167423" y2="-123.513447" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA234-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA234-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA237-fill" x1="-105.003742" y1="-98.69269" x2="-105.003742" y2="-122.094651" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA237-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA237-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA240-fill" x1="-116.274672" y1="-96.412168" x2="-116.274672" y2="-119.610282" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA240-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA240-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA243-fill" x1="-125.976623" y1="-93.828552" x2="-125.976623" y2="-116.933424" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA243-fill-0" offset="0%" stop-color="#b2864c"/><stop id="e6OP4hnGjpA243-fill-1" offset="99.5%" stop-color="#b2723a"/></linearGradient><linearGradient id="e6OP4hnGjpA293-fill" x1="-199.839319" y1="-161.471758" x2="-170.42226" y2="-161.471758" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA293-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA293-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA298-fill" x1="-54.219465" y1="-186.385869" x2="-12.62341" y2="-168.935862" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA298-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA298-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA303-fill" x1="-0.0033" y1="2.1741" x2="22.8403" y2="2.1741" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA303-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA303-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><linearGradient id="e6OP4hnGjpA306-fill" x1="-0.0033" y1="2.1762" x2="22.8403" y2="2.1762" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA306-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA306-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><radialGradient id="e6OP4hnGjpA308-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.0016 0.0041)"><stop id="e6OP4hnGjpA308-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA308-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA308-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA308-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA309-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0046 0.0041)"><stop id="e6OP4hnGjpA309-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA309-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA309-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA309-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA310-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0007 0.0041)"><stop id="e6OP4hnGjpA310-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA310-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA310-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA310-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA311-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.0016 -0.0038)"><stop id="e6OP4hnGjpA311-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA311-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA311-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA311-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA312-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0046 -0.0038)"><stop id="e6OP4hnGjpA312-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA312-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA312-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA312-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA313-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0007 -0.0038)"><stop id="e6OP4hnGjpA313-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA313-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA313-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA313-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><linearGradient id="e6OP4hnGjpA316-fill" x1="-103.380093" y1="-171.649978" x2="-74.116016" y2="-174.592226" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA316-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA316-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA321-fill" x1="41.333452" y1="-196.898591" x2="84.473022" y2="-183.695248" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA321-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA321-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA326-fill" x1="227.300314" y1="370.536547" x2="250.029696" y2="368.252187" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA326-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA326-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><linearGradient id="e6OP4hnGjpA329-fill" x1="229.724534" y1="394.657536" x2="252.453916" y2="392.373176" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA329-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA329-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><radialGradient id="e6OP4hnGjpA331-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.016961 0.023057)"><stop id="e6OP4hnGjpA331-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA331-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA331-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA331-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA332-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.01303 0.015677)"><stop id="e6OP4hnGjpA332-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA332-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA332-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA332-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA333-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.015749 0.023287)"><stop id="e6OP4hnGjpA333-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA333-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA333-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA333-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA334-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.012741 0.024046)"><stop id="e6OP4hnGjpA334-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA334-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA334-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA334-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA335-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.01881 0.016666)"><stop id="e6OP4hnGjpA335-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA335-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA335-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA335-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA336-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0.995 -0.1 0.1 0.995 -0.011529 0.014276)"><stop id="e6OP4hnGjpA336-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA336-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA336-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA336-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><linearGradient id="e6OP4hnGjpA340-fill" x1="-15.410732" y1="-180.804141" x2="14.000906" y2="-180.804141" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA340-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA340-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA345-fill" x1="130.201843" y1="-205.718076" x2="171.804191" y2="-188.265428" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA345-fill-0" offset="0%" stop-color="#b2723a"/><stop id="e6OP4hnGjpA345-fill-1" offset="100%" stop-color="#b2864c"/></linearGradient><linearGradient id="e6OP4hnGjpA350-fill" x1="0.0012" y1="2.1746" x2="22.8447" y2="2.1746" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA350-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA350-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><linearGradient id="e6OP4hnGjpA353-fill" x1="0.0012" y1="2.1767" x2="22.8447" y2="2.1767" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0 0)"><stop id="e6OP4hnGjpA353-fill-0" offset="0%" stop-color="#6a431a"/><stop id="e6OP4hnGjpA353-fill-1" offset="100%" stop-color="#7a5125"/></linearGradient><radialGradient id="e6OP4hnGjpA355-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.004 0.0046)"><stop id="e6OP4hnGjpA355-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA355-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA355-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA355-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA356-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0002 0.0046)"><stop id="e6OP4hnGjpA356-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA356-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA356-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA356-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA357-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.0037 0.0046)"><stop id="e6OP4hnGjpA357-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA357-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA357-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA357-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA358-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.004 -0.0033)"><stop id="e6OP4hnGjpA358-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA358-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA358-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA358-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA359-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(-0.0002 -0.0033)"><stop id="e6OP4hnGjpA359-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA359-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA359-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA359-fill-3" offset="99.5%" stop-color="#000"/></radialGradient><radialGradient id="e6OP4hnGjpA360-fill" cx="0" cy="0" r="0.9324" spreadMethod="pad" gradientUnits="userSpaceOnUse" gradientTransform="translate(0.0037 -0.0033)"><stop id="e6OP4hnGjpA360-fill-0" offset="0%" stop-color="#3a3535"/><stop id="e6OP4hnGjpA360-fill-1" offset="17.49%" stop-color="#383333"/><stop id="e6OP4hnGjpA360-fill-2" offset="42.07%" stop-color="#393434"/><stop id="e6OP4hnGjpA360-fill-3" offset="99.5%" stop-color="#000"/></radialGradient></defs><g id="e6OP4hnGjpA2" transform="matrix(-0.029168 -0.999575 0.999575 -0.029168 -82.493027 618.618311)"><g transform="translate(318.509 555.589)"><path d="M-58.41,-220.16c-4.96.5-7.21-3.91-6.46-7.73-.45.07-.86.13-1.19.16-10.56,1.06-18.12,11.82-16.89,24.02s9.27,20.18,21.33,20.18c1.64.07,3.28,0,4.9-.18-1.06-3.14.09-7.21,3.66-8.57l-2.26-28.97c-.84.57-1.86.96-3.09,1.09Z" fill="url(#e6OP4hnGjpA4-fill)"/><path d="M-61.62,-184.13c-11.57.01-19.52-7.52-20.74-19.64-1.19-11.86,6.14-22.34,16.35-23.36.3-.03.65-.08,1.04-.14.05-.42,2.53-1.08,2.65-1.49-.55.08-2.1.21-2.47.25-10.87,1.09-20.02,12.35-18.76,24.86c1.29,12.79,9.69,20.72,21.91,20.72c1.57.07,3.14.02,4.7-.14.15-.02.3-.04.45-.06-.17-.37-.3-.76-.4-1.17-1.57.17-3.15.23-4.73.17Z" fill="#050505"/></g><g transform="translate(176.886 571.568)"><g><path d="M89.98,-243.91c11.91,3.65,18.6,16.3,14.94,28.26s-16.29,18.7-28.2,15.06c-11.91-3.65-18.6-16.3-14.94-28.26s16.29-18.7,28.2-15.06Z" fill="url(#e6OP4hnGjpA8-fill)"/></g><path d="M76.54,-200.01c-12.27-3.75-19.19-16.79-15.44-29.05s16.79-19.19,29.05-15.44s19.19,16.79,15.44,29.05c-3.75,12.27-16.78,19.2-29.05,15.44Zm13.26-43.31c-11.52-3.53-23.79,3.06-27.35,14.68s2.92,23.94,14.45,27.47s23.79-3.06,27.35-14.68c3.55-11.62-2.93-23.95-14.45-27.47Z" fill="#050505"/></g></g><g id="e6OP4hnGjpA10" transform="matrix(-0.029168 -0.999575 0.999575 -0.029168 -175.0851 542.048668)"><g transform="translate(318.509 555.589)"><path d="M-141.89,-213.49c-4.96.5-7.21-3.91-6.46-7.73-.45.07-.86.13-1.19.16-10.56,1.06-18.12,11.82-16.89,24.02s9.27,20.18,21.33,20.18c1.64.07,3.28,0,4.9-.18-1.06-3.14.09-7.21,3.66-8.57l-2.26-28.97c-.84.58-1.86.97-3.09,1.09Z" fill="url(#e6OP4hnGjpA12-fill)"/><path d="M-145.1,-177.45c-11.57.01-19.52-7.52-20.74-19.64-1.19-11.86,6.14-22.34,16.35-23.36.3-.03.65-.08,1.04-.14.05-.42,2.53-1.08,2.65-1.49-.55.08-2.1.21-2.47.25-10.87,1.09-20.02,12.35-18.76,24.86c1.29,12.79,9.69,20.72,21.91,20.72c1.57.07,3.14.02,4.7-.14.15-.02.3-.04.45-.06-.17-.37-.3-.76-.4-1.17-1.56.17-3.15.23-4.73.17Z" fill="#050505"/></g><g transform="translate(176.886 571.568)"><g><path d="M6.5,-237.23c11.91,3.65,18.6,16.3,14.94,28.26s-16.29,18.7-28.2,15.06c-11.91-3.65-18.6-16.3-14.94-28.26c3.66-11.97,16.29-18.71,28.2-15.06Z" fill="url(#e6OP4hnGjpA16-fill)"/></g><path d="M-6.94,-193.33c-12.27-3.75-19.19-16.79-15.44-29.05s16.79-19.19,29.05-15.44s19.19,16.79,15.44,29.05c-3.75,12.27-16.78,19.2-29.05,15.44Zm13.26-43.31c-11.52-3.53-23.79,3.06-27.35,14.68s2.92,23.94,14.45,27.47c11.52,3.53,23.79-3.06,27.35-14.68c3.55-11.63-2.93-23.95-14.45-27.47Z" fill="#050505"/></g></g><g id="e6OP4hnGjpA18" transform="matrix(-0.029168 -0.999575 0.999575 -0.029168 -275.217099 455.985953)"><g transform="translate(318.509 555.589)"><path d="M-233.75,-207.89c-4.96.5-7.21-3.91-6.46-7.73-.45.07-.86.13-1.19.16-10.56,1.06-18.12,11.82-16.89,24.02s9.27,20.18,21.33,20.18c1.64.07,3.28,0,4.9-.18-1.06-3.14.09-7.21,3.66-8.57l-2.26-28.97c-.84.57-1.86.97-3.09,1.09Z" fill="url(#e6OP4hnGjpA20-fill)"/><path d="M-236.96,-171.86c-11.57.01-19.52-7.52-20.74-19.64-1.19-11.86,6.14-22.34,16.35-23.36.3-.03.65-.08,1.04-.14.05-.42,2.53-1.08,2.65-1.49-.55.08-2.1.21-2.47.25-10.87,1.09-20.02,12.35-18.76,24.86c1.29,12.79,9.69,20.72,21.91,20.72c1.57.07,3.14.02,4.7-.14.15-.02.3-.04.45-.06-.17-.37-.3-.76-.4-1.17-1.57.17-3.15.24-4.73.17Z" fill="#050505"/></g><g transform="translate(176.886 571.568)"><g><path d="M-85.36,-231.64c11.91,3.65,18.6,16.3,14.94,28.26s-16.29,18.7-28.2,15.06c-11.91-3.65-18.6-16.3-14.94-28.26s16.29-18.7,28.2-15.06Z" fill="url(#e6OP4hnGjpA24-fill)"/></g><path d="M-98.8,-187.73c-12.27-3.75-19.19-16.79-15.44-29.05s16.79-19.19,29.05-15.44s19.19,16.79,15.44,29.05c-3.75,12.27-16.78,19.19-29.05,15.44Zm13.26-43.32c-11.52-3.53-23.79,3.06-27.35,14.68s2.92,23.94,14.45,27.47s23.79-3.06,27.35-14.68c3.55-11.62-2.93-23.94-14.45-27.47Z" fill="#050505"/></g></g><g><g transform="translate(.141 51.055)"><path d="M10.84,-6.85l13-2.71L36.4,15.07l-6.81.86L10.84,-6.85Z" fill="#9e7341"/><path d="M24.22,-10.34L10.49,-7.48c-.06.3-.19.58-.38.81l19.2,23.33l8.16-1.03-13.25-25.97ZM12.1,-6.41l11.38-2.37L35.36,14.51l-5.46.69L12.1,-6.41Z" fill="#050505"/></g><g transform="translate(35.174 194.19)"><path d="M2.17,-42.54l24.55,2.75L36,-48.67l-3.68-14.9-17.82,7.21-16.96-1.17l4.63,14.99Z" fill="url(#e6OP4hnGjpA31-fill)"/><path d="M32.79,-64.5l-18.41,7.45-17.16-1.19c-.05.3-.18.59-.37.83l4.79,15.5l25.31,2.84l9.8-9.37-3.96-16.06Zm-6.32,23.99L2.69,-43.18l-4.21-13.59l16.11,1.12l17.23-6.97l3.4,13.74-8.75,8.37Z" fill="#050505"/></g><g transform="translate(62.314 194.172)"><path d="M-12.35,-56.18l11.93,16.4l9.28-8.88-3.68-14.9-17.53,7.38Z" fill="url(#e6OP4hnGjpA34-fill)"/><path d="M-0.52,-38.73l-12.9-17.74l19.06-8.02l3.97,16.07-10.13,9.69Zm-10.77-17.15l10.95,15.06l8.42-8.06L4.69,-62.6l-15.98,6.72Z" fill="#050505"/></g><g transform="translate(27.926 90.814)"><path d="M4.78,45.85c0,0,3.67-12.54,1.52-25.89s-6.01-18-6.01-18l1.52-25.78l6.86-.8c0,0,4.7,23.18,6.62,40.96s-.53,30.1-.53,30.1l-9.98-.59Z" fill="url(#e6OP4hnGjpA37-fill)"/><path d="M15.33,47.16L3.88,46.49l.24-.83c.04-.12,3.6-12.56,1.5-25.59C3.54,7.12,-0.2,2.44,-0.24,2.39l-.17-.21.01-.27l1.55-26.36l8.06-.94.12.62c.05.23,4.73,23.42,6.63,41.03c1.91,17.68-.51,30.19-.53,30.31l-.1.59ZM5.66,45.22l8.54.5c.44-2.65,2.07-14.01.41-29.31-1.72-15.93-5.73-36.47-6.49-40.28l-5.66.66L0.99,1.74c.8,1.09,4.07,6.16,5.99,18.11c1.83,11.39-.56,22.32-1.32,25.37v0Z" fill="#050505"/></g><g transform="translate(41.317 59.905)"><path d="M26.17,70.72L47.25,30.65L36.57,15.63l-14.48-28.3L-4.72,6.28c0,0,2.74,14.84,5.99,35.76s.11,35.31.11,35.31l7.26.74l17.53-7.37Z" fill="url(#e6OP4hnGjpA40-fill)"/><path d="M8.75,78.79l-8.21-.84.16-.75c.03-.14,3.07-14.52-.12-35.06C-2.62,21.48,-5.37,6.55,-5.4,6.4l-.08-.43l27.81-19.66L37.15,15.27L48.04,30.59L26.66,71.25L8.75,78.79ZM2.2,76.74l6.34.65l17.13-7.21L46.45,30.7L35.96,15.95l-14.12-27.6L-3.97,6.59c.47,2.6,3,16.62,5.91,35.35c2.82,18.13.83,31.55.26,34.8v0Z" fill="#050505"/></g><g transform="translate(83.924 55.435)"><path d="M4.55,35.11l10.63-46.34-35.7,3.03L-6.03,20.1L4.55,35.11Z" fill="url(#e6OP4hnGjpA43-fill)"/><path d="M4.88,36.76L-6.64,20.42L-21.6,-8.8L16.06,-12L4.88,36.76ZM-5.44,19.75l9.67,13.7L14.3,-10.46L-19.44,-7.6l14,27.35Z" fill="#050505"/></g><g><path d="M10.99,44.21c0,0,12.48-22.96,43.1-31.38c27.51-7.57,49.52-.69,66.71,10.32c34.22,21.9,37.77,61.43,37.77,61.43l-14.52,5.97-11.4-25.58-17.01-9.84L99.11,44.21l-35.7,3.03L36.6,66.19L23.99,41.5l-13,2.71Z" fill="url(#e6OP4hnGjpA46-fill)"/><path d="M159.26,84.51c-.04-.4-3.98-40.11-38.09-61.94C100.21,9.15,77.58,5.65,53.9,12.16c-30.55,8.4-43.4,31.48-43.52,31.72l-.22.41c.11.1.21.21.29.33.12.1.22.21.3.34l12.87-2.68L36.35,67.21l27.3-19.3l35.28-3l16.38,10.81l16.82,9.73l11.58,25.99l15.61-6.42-.06-.51Zm-14.85,5.14L133.28,64.68l-.09-.2-17.17-9.93L99.48,43.63l-.2-.13-35.94,3.05-.19.02-26.31,18.6L24.36,40.72L12.4,43.21c3.21-4.98,16.13-22.64,41.87-29.72C77.88,7,99.52,10.34,120.43,23.72c31.46,20.14,36.83,55.77,37.4,60.41l-13.42,5.52Z" fill="#050505"/></g><g transform="translate(108.184 129.247)"><path d="M-29.15,-20.4l17.23-9.28-7.79-9.03-9.44,18.31Z" fill="url(#e6OP4hnGjpA49-fill)"/><path d="M-30.78,-18.74l10.92-21.18l9.01,10.45-19.93,10.73Zm11.21-18.75l-7.96,15.43l14.52-7.81-6.56-7.62Z" fill="#050505"/></g><g transform="translate(109.553 144.251)"><path d="M-28.28,-24.66l-2.23-10.75l17.23-9.28l6.3,11.07-21.3,8.96Z" fill="url(#e6OP4hnGjpA52-fill)"/><path d="M-28.79,-23.7l-2.51-12.07l18.27-9.84l7.02,12.33-22.78,9.58Zm-.95-11.34l1.96,9.43l19.81-8.33-5.59-9.81-16.18,8.71Z" fill="#050505"/></g><g transform="translate(113.23 162.098)"><path d="M-30.88,-29.34l-1.08-13.16l21.3-8.95l5.94,14.04-26.16,8.07Z" fill="url(#e6OP4hnGjpA55-fill)"/><path d="M-31.5,-28.44l-1.19-14.51l22.39-9.41l6.51,15.37-27.71,8.55Zm.27-13.62l.97,11.81l24.62-7.59-5.38-12.71-20.21,8.49Z" fill="#050505"/></g><g transform="translate(114.73 184.762)"><path d="M-32.56,-36.73l.18-15.28l26.16-8.07l5.31,14.6-31.65,8.75Z" fill="url(#e6OP4hnGjpA58-fill)"/><path d="M-33.26,-35.82l.19-16.7l27.26-8.41l5.79,15.91-33.24,9.2Zm1.56-15.68l-.16,13.87l30.04-8.31-4.83-13.29-25.05,7.73Z" fill="#050505"/></g><g transform="translate(112.618 208.252)"><path d="M-31.71,-40.58l1.26-19.64l31.64-8.76L5.84,-50.6l-37.55,10.02Z" fill="url(#e6OP4hnGjpA61-fill)"/><path d="M-32.46,-39.66l1.36-21.08l32.79-9.08L6.68,-50.1l-39.14,10.44Zm2.67-20.02l-1.17,18.2l35.97-9.59L0.7,-68.12l-30.49,8.44Z" fill="#050505"/></g><g transform="translate(124.79 56.526)"><path d="M-31.35,40.02L-8.7,-1.37l-16.99-10.95-10.63,46.34l4.97,6Z" fill="url(#e6OP4hnGjpA64-fill)"/><path d="M-31.23,41.24l-5.83-7.05l11.41-46.6L-7.79,-1.6L-31.23,41.24Zm-4.34-7.4l4.1,4.96L-9.61,-1.14l-15.63-10.08-10.33,45.06Z" fill="#050505"/></g><g transform="translate(132.626 72.752)"><path d="M-34.12,30.46l21.98-18.75L0.03,-7.79l-16.56-9.8L-39.18,23.8l2.82,3.03l2.24,3.63Z" fill="url(#e6OP4hnGjpA67-fill)"/><path d="M-34.29,31.51l-2.63-4.27-3.11-3.34l23.23-42.45L0.98,-8.02L-11.7,12.24L-34.29,31.51Zm-4.05-7.82l2.56,2.77l1.82,2.96l21.28-18.16L-0.93,-7.56l-15.34-9.08-22.07,40.33Z" fill="#050505"/></g><g transform="translate(140.721 88.889)"><path d="M-34.53,29.82l20.08-17.4L0.8,-4.41l-8.87-19.52-12.17,19.51-21.98,18.75l4.06,7.42l3.63,8.07Z" fill="url(#e6OP4hnGjpA70-fill)"/><path d="M-7.39,-24.09c-.2-.13-.4-.24-.62-.34l.4.19c-.25-.11-.5-.23-.74-.34-.03-.02-.05-.04-.08-.06L-20.77,-4.87L-43.09,14.16l4.31,7.87l4,8.92l20.78-18L1.61,-4.29l-9-19.8Zm-7.54,36.02L-34.29,28.7l-3.27-7.28-3.79-6.93l21.63-18.45l11.55-18.51l8.15,17.94-14.91,16.46Z" fill="#050505"/></g><g transform="translate(153.192 119.392)"><path d="M-41.34,15.47l21.26-16.66l15.73-15.12-7.33-18.6-15.25,16.84L-47,-0.68l5.66,16.15Z" fill="url(#e6OP4hnGjpA73-fill)"/><path d="M-41.67,16.6l-6.14-17.5l20.41-17.67l15.97-17.63l7.91,20.06-16.13,15.49L-41.67,16.6ZM-46.2,-0.47l5.19,14.8l20.48-16.05L-5.15,-16.5l-6.75-17.14-14.57,16.07-19.73,17.1Z" fill="#050505"/></g><g transform="translate(162.241 149.471)"><path d="M-43.78,8.19l23.87-14.85l16.6-16.07-10.08-23.67-15.74,15.12-21.26,16.66l1.96,4.42l4.65,18.39Z" fill="url(#e6OP4hnGjpA76-fill)"/><path d="M-44.22,9.27l-4.86-19.24-2.15-4.85l21.66-16.97l16.43-15.79l10.66,25.02-17.06,16.49L-44.22,9.27Zm-5.32-23.67l1.78,4.04l4.42,17.47L-20.33,-7.2l16.2-15.69-9.5-22.32-15.07,14.48-20.84,16.33Z" fill="#050505"/></g><g transform="translate(67.349 551.958)"><path d="M-14.64,-198.7l48.14,27.51-.23,27.72-47.92-31.84v-23.39Z" fill="url(#e6OP4hnGjpA79-fill)"/><path d="M33.96,-142.19l-49.28-32.75v-24.94l49.52,28.3-.24,29.39Zm-47.91-33.49l46.55,30.93.21-26.04-46.76-26.72v21.83Z" fill="#050505"/></g><g transform="translate(67.903 521.664)"><path d="M-15.19,-168.4l240.91-19.32l63.07,25.51-255.84,21.32-48.14-27.51Z" fill="url(#e6OP4hnGjpA82-fill)"/><path d="M289.04,-162.86l-63.06-25.5-.15-.06-241.36,18.99c.12.59.21,1.19.28,1.79l47.87,27.35.19.11l256.52-21.37c-.1-.45-.19-.88-.29-1.31ZM33.11,-141.6l-46.02-26.3l238.53-19.13l60.25,24.37L33.11,-141.6Z" fill="#050505"/></g><g transform="translate(144.426 562.621)"><path d="M-43.8,-154.13l256.07-25.65v-23.38l-255.84,21.32-.23,27.71Z" fill="url(#e6OP4hnGjpA85-fill)"/><path d="M-44.38,-154.2l-.1-.39.23-27.89.63-.05l256.59-21.38v24.75l-.62.06-255.45,26.21-1.28-1.31Zm1.49-27.02l-.21,26.94l254.69-26.14v-22.01l-254.48,21.21Z" fill="#050505"/></g><g transform="translate(104.827 182.998)"><path d="M-23.92,-20.93v0c-3.08,2.7-4.86,6.59-4.9,10.68v0c-.14,15.33,2.59,30.54,8.05,44.86l.71,1.88c0,0,35.81-3.4,63.77-31.79s31.19-49.16,31.19-49.16L57.96,-57.42c-1.38-1.06-3.01-1.74-4.74-1.98v0l1.26,2.71-17.19,16.5-24.07,15.13-37.14,9.73v-5.6Z" fill="url(#e6OP4hnGjpA88-fill)"/><path d="M-20.5,37.23l-.9-2.36c-5.5-14.4-8.25-29.7-8.1-45.11.04-4.29,1.91-8.36,5.13-11.19l1.14-1v6.23l36.17-9.48l23.92-15.04l16.79-16.12-1.59-3.42l1.25.18c1.84.26,3.58.99,5.06,2.12l17.27,13.22-.06.4c-.13.85-3.58,21.31-31.37,49.53-27.81,28.23-63.83,31.95-64.19,31.99l-.52.05Zm-4.11-56.51c-2.24,2.49-3.49,5.7-3.52,9.05-.14,15.23,2.57,30.37,8.01,44.6l.52,1.38c4.49-.57,37.19-5.5,62.83-31.53c25.36-25.75,30.29-45.4,30.92-48.39L57.54,-56.88c-.93-.71-1.99-1.24-3.11-1.57l.89,1.91-17.66,16.93-24.17,15.19-38.1,9.99v-4.85Z" fill="#050505"/></g><g transform="translate(118.245 258.449)"><circle r="2.75" transform="translate(-31.15-85.38)" fill="url(#e6OP4hnGjpA91-fill)"/><path d="M-31.15,-81.94c-1.9,0-3.44-1.54-3.44-3.44s1.54-3.44,3.44-3.44s3.44,1.54,3.44,3.44-1.54,3.44-3.44,3.44Zm0-5.5c-1.14,0-2.06.92-2.06,2.06s.92,2.06,2.06,2.06s2.06-.92,2.06-2.06-.92-2.06-2.06-2.06v0Z" fill="#050505"/></g><g transform="translate(159.628 246.73)"><circle r="2.75" transform="translate(-46.81-80.94)" fill="url(#e6OP4hnGjpA94-fill)"/><path d="M-46.81,-77.5c-1.9,0-3.45-1.54-3.45-3.44s1.54-3.45,3.44-3.45s3.45,1.54,3.45,3.44c0,1.48-.95,2.8-2.35,3.27-.35.12-.72.18-1.09.18Zm.01-5.51c-.22,0-.44.04-.65.11-1.07.36-1.65,1.52-1.29,2.6.36,1.07,1.52,1.65,2.6,1.29c1.07-.36,1.65-1.52,1.29-2.6-.29-.83-1.07-1.39-1.95-1.4Z" fill="#050505"/></g><g transform="translate(127.097 318.196)"><circle r="2.75" transform="translate(-34.5-107.99)" fill="url(#e6OP4hnGjpA97-fill)"/><path d="M-34.5,-104.55c-1.9,0-3.44-1.54-3.44-3.44s1.54-3.44,3.44-3.44s3.44,1.54,3.44,3.44-1.54,3.44-3.44,3.44Zm0-5.5c-1.14,0-2.06.92-2.06,2.06s.92,2.06,2.06,2.06s2.06-.92,2.06-2.06c.01-1.14-.92-2.06-2.06-2.06v0Z" fill="#050505"/></g><g transform="translate(177.992 298.28)"><circle r="2.75" transform="translate(-53.76-100.45)" fill="url(#e6OP4hnGjpA100-fill)"/><path d="M-53.76,-97.01c-1.9,0-3.44-1.54-3.44-3.44s1.54-3.44,3.44-3.44s3.44,1.54,3.44,3.44-1.54,3.44-3.44,3.44Zm0-5.5c-1.14,0-2.06.92-2.06,2.06s.92,2.06,2.06,2.06s2.06-.92,2.06-2.06c.01-1.14-.92-2.06-2.06-2.06v0Z" fill="#050505"/></g><g transform="translate(216.717 266.194)"><circle r="2.75" transform="translate(-68.41-88.31)" fill="url(#e6OP4hnGjpA103-fill)"/><path d="M-68.41,-84.87c-1.9,0-3.44-1.54-3.44-3.44s1.54-3.44,3.44-3.44s3.44,1.54,3.44,3.44-1.54,3.44-3.44,3.44Zm0-5.5c-1.14,0-2.06.92-2.06,2.06s.92,2.06,2.06,2.06s2.06-.92,2.06-2.06-.92-2.06-2.06-2.06v0Z" fill="#050505"/></g><g transform="translate(196.801 226.363)"><circle r="2.75" transform="translate(-60.87-73.24)" fill="url(#e6OP4hnGjpA106-fill)"/><path d="M-60.87,-69.8c-1.9,0-3.44-1.54-3.44-3.44s1.54-3.44,3.44-3.44s3.44,1.54,3.44,3.44c-.01,1.9-1.54,3.44-3.44,3.44Zm0-5.5c-1.14,0-2.06.92-2.06,2.06s.92,2.06,2.06,2.06s2.06-.92,2.06-2.06-.92-2.06-2.06-2.06v0Z" fill="#050505"/></g><g transform="translate(243.271 231.895)"><circle r="2.41" transform="translate(-78.8-75.67)" fill="url(#e6OP4hnGjpA109-fill)"/><path d="M-78.8,-72.58c-1.71,0-3.09-1.39-3.09-3.09s1.39-3.09,3.09-3.09s3.09,1.39,3.09,3.09c0,1.71-1.38,3.09-3.09,3.09Zm0-4.81c-.95,0-1.72.77-1.72,1.72s.77,1.72,1.72,1.72s1.72-.77,1.72-1.72c0,0,0,0,0,0c0-.95-.77-1.72-1.72-1.72Z" fill="#050505"/></g><g transform="translate(228.888 207.553)"><circle r="2.41" transform="translate(-73.36-66.46)" fill="url(#e6OP4hnGjpA112-fill)"/><path d="M-73.36,-63.37c-1.71,0-3.09-1.39-3.09-3.09s1.39-3.09,3.09-3.09s3.09,1.39,3.09,3.09c0,1.71-1.38,3.09-3.09,3.09Zm0-4.81c-.95,0-1.72.77-1.72,1.72s.77,1.72,1.72,1.72s1.72-.77,1.72-1.72c0,0,0,0,0,0c0-.95-.77-1.72-1.72-1.72Z" fill="#050505"/></g><g transform="translate(466.893 179.245)"><path d="M-164.94,-48.35l23.66-9.56c1.15,5.22,1.71,10.55,1.67,15.89-.15,8.33-1.98,12.79-1.98,12.79-3.32-3.82-7-7.32-10.99-10.44-3.91-3.18-8.04-6.08-12.36-8.68Z" fill="url(#e6OP4hnGjpA115-fill)"/><path d="M-141.4,-27.89l-.73-.9c-3.29-3.78-6.94-7.24-10.88-10.34-3.88-3.16-7.98-6.04-12.27-8.62l-1.24-.7l25.72-10.39.19.78c1.16,5.27,1.73,10.66,1.69,16.06-.16,8.37-1.95,12.86-2.03,13.04l-.45,1.07Zm-22.01-20.34c3.91,2.45,7.66,5.13,11.25,8.03c3.69,2.92,7.13,6.13,10.29,9.61c1.02-3.73,1.55-7.58,1.56-11.44.04-5.02-.46-10.02-1.48-14.94l-21.62,8.74Z" fill="#050505"/></g><g transform="translate(505.68 179.667)"><path d="M-173.93,-21.92l-6.45-7.72c0,0,2.35-4.8,2.09-13.23-.17-5.19-.77-10.36-1.77-15.46c4.93,3.07,9.64,6.46,14.12,10.15c5.96,5.13,9.43,14.19,9.43,14.19s-2.39,3.98-8.77,7.77-8.65,4.3-8.65,4.3Z" fill="url(#e6OP4hnGjpA118-fill)"/><path d="M-155.88,-34.23c-.14-.38-3.59-9.28-9.62-14.47-5.94-5.11-14.12-10.17-14.2-10.22l-.14-.09c-.19.36-.52.63-.9.76l.01.06c.99,5.06,1.58,10.19,1.76,15.34.25,8.13-1.99,12.86-2.02,12.9l-.19.4l7.01,8.38.41-.09c.1-.02,2.43-.56,8.83-4.37c6.45-3.84,8.91-7.84,9.01-8.01l.17-.29-.13-.3Zm-9.77,7.43c-4.73,2.82-7.17,3.79-8.04,4.09l-5.89-7.04c.56-1.36,2.2-5.93,1.97-13.13-.17-4.7-.66-9.38-1.49-14.01c4.42,2.81,8.66,5.9,12.69,9.24c5.13,4.41,8.42,11.94,9.1,13.59-.65.94-3.14,4.16-8.34,7.26Z" fill="#050505"/></g><g transform="translate(515.72 217.678)"><path d="M-182.61,-38.48c0,0,.66-8.33.43-13.08-.14-2.87-.75-5.7-1.79-8.38c0,0,2.96-.11,9.14-4.77s8.26-7.29,8.26-7.29s4.08,11.39,5.47,17.33s2.45,13.36,2.45,13.36c-3.9,1.78-8.09,2.83-12.36,3.09-7.27.49-11.6-.26-11.6-.26Z" fill="url(#e6OP4hnGjpA121-fill)"/><path d="M-175.88,-37.37c-2.29.03-4.58-.11-6.85-.44l-.62-.11.05-.62c.01-.08.65-8.35.43-12.99-.14-2.79-.73-5.54-1.73-8.14l-.39-.92l1-.04c.02,0,2.9-.22,8.75-4.63c6.01-4.53,8.12-7.14,8.14-7.17l.77-.96.42,1.16c.04.11,4.11,11.49,5.49,17.4s2.45,13.34,2.46,13.42l.07.49-.44.22c-3.98,1.83-8.26,2.9-12.63,3.16-1.83.13-3.48.17-4.92.17Zm-5.99-1.7c3.59.39,7.21.44,10.82.16c4.01-.27,7.95-1.22,11.65-2.81-.27-1.77-1.21-7.84-2.37-12.79-1.11-4.76-4.01-13.17-5.06-16.16-2.35,2.37-4.89,4.55-7.58,6.52-4.41,3.33-7.26,4.4-8.61,4.75.88,2.52,1.4,5.15,1.54,7.82.18,4.01-.24,10.45-.39,12.51v0Z" fill="#050505"/></g><g transform="translate(230.006 208.572)"><path d="M-50.71,-67.58c0,0,18.64,5.02,32.98,3.88c17.19-1.38,25.45-5.5,25.45-5.5s8.25,2.75,16.51,17.88c3.62,6.64,8.25,16.51,10.32,27.51c5.79,30.89,3.54,48.49,3.54,48.49s-14.54,11.12-45.84,16.39-48.25,3.32-48.25,3.32s8-13.87,10.06-26.25c2.53-15.17,1.38-24.76-6.88-33.01-9.31-9.31-22.7-12.38-22.7-12.38c5.79-6.05,10.87-12.75,15.14-19.94c7.11-11.96,9.67-20.39,9.67-20.39Z" fill="url(#e6OP4hnGjpA124-fill)"/><path d="M-47.05,45.42c-5.87,0-8.97-.34-9.04-.35l-1.04-.12.52-.91c.08-.14,7.97-13.9,9.99-26.01c2.68-16.08.87-24.86-6.69-32.41-9.06-9.06-22.23-12.16-22.36-12.2l-1.21-.28.88-.88c5.73-6.02,10.77-12.67,15.03-19.81c6.98-11.74,9.57-20.15,9.6-20.23l.19-.64.64.17c.19.05,18.7,4.98,32.74,3.85c16.83-1.35,25.11-5.39,25.2-5.43l.25-.12.27.09c.35.12,8.61,3.01,16.89,18.2c5.25,9.63,8.75,18.95,10.39,27.71c5.75,30.65,3.57,48.53,3.55,48.7l-.04.28-.23.17c-.15.11-15.02,11.29-46.13,16.52-17.97,3.06-31.31,3.7-39.4,3.7Zm-7.84-1.63c4.13.31,20.47,1.07,47.02-3.4C20.78,35.57,35.44,25.71,37.42,24.3c.25-2.41,1.73-19.7-3.57-47.99-1.62-8.62-5.06-17.81-10.24-27.31-7.21-13.22-14.47-16.85-15.88-17.45-1.61.74-9.82,4.19-25.42,5.44-12.8,1.02-29.18-2.88-32.58-3.74-.74,2.18-3.55,9.85-9.53,19.91-4.12,6.89-8.95,13.33-14.41,19.22c3.49.97,14.02,4.41,21.87,12.26c9.04,9.04,9.41,19.57,7.07,33.61-1.74,10.52-7.8,22.2-9.62,25.54v0Z" fill="#050505"/></g><g transform="translate(363.297 197.534)"><path d="M-115.33,-64.9l-4.48,3.07-5.78,3.67c0,0,9.66,2.2,20.65,25.86s9.72,68.02,9.72,68.02s9.22-36.42,1.8-62.4c-7.41-25.98-21.91-38.22-21.91-38.22Z" fill="url(#e6OP4hnGjpA127-fill)"/><path d="M-96.08,41.94l.18-6.24c.01-.44,1.14-44.47-9.66-67.71-10.66-22.95-20.09-25.46-20.18-25.48l-1.58-.38l7.14-4.54l4.89-3.36.4.34c.15.12,14.75,12.68,22.14,38.56c7.38,25.86-1.71,62.39-1.8,62.76l-1.53,6.05Zm-27.98-100.25c3.1,1.48,11.02,6.9,19.76,25.72c8.39,18.06,9.67,48.37,9.81,61.7c2.23-11.6,5.86-36.58.43-55.6-6.6-23.12-18.97-35.38-21.32-37.54l-4.03,2.77-4.65,2.95Z" fill="#050505"/></g><g transform="translate(511.147 267.307)"><path d="M-178.03,-88.11c-.08,5.86-.51,11.71-1.27,17.52-1.28,10.05-3.18,18.62-3.18,18.62c5.64,2.73,11.92,3.88,18.17,3.33c10.54-.89,14.02-4.26,14.02-4.26l-3.78-38.04c0,0-3.13,2.21-12.07,2.9-8.33.63-11.89-.07-11.89-.07Z" fill="url(#e6OP4hnGjpA130-fill)"/><path d="M-167.29,-47.83c-5.38.05-10.7-1.16-15.53-3.54l-.45-.25.11-.5c.02-.09,1.9-8.66,3.17-18.56.75-5.78,1.18-11.6,1.27-17.43v-.84l.82.16c.03.01,3.61.68,11.7.05c8.57-.66,11.7-2.75,11.73-2.77l.96-.66.12,1.16l3.82,38.37-.24.23c-.15.14-3.77,3.55-14.44,4.45-1.04.1-2.06.13-3.04.13Zm-14.41-4.51c5.42,2.47,11.39,3.51,17.33,3.02c8.62-.73,12.41-3.16,13.36-3.87l-3.65-36.65c-1.54.73-5.04,1.99-11.44,2.49-3.74.36-7.52.38-11.26.04-.13,5.62-.55,11.24-1.27,16.81-1.08,8.56-2.64,16.14-3.07,18.16Z" fill="#050505"/></g><g transform="translate(453.826 515.071)"><path d="M-146.65,-185.19l-5.92,9.38-7.87,13.15l40.51,4.96-.23-19.68c0,0-6.1-2.61-13.2-4.86-4.33-1.38-8.78-2.37-13.29-2.95Z" fill="url(#e6OP4hnGjpA133-fill)"/><path d="M-119.24,-156.93l-42.34-5.18l8.42-14.05l6.15-9.75.43.05c4.55.6,9.04,1.59,13.42,2.97c7.05,2.24,13.2,4.85,13.26,4.88l.41.18.25,20.9Zm-40.06-6.29l38.68,4.73-.21-18.45c-1.48-.62-6.78-2.78-12.73-4.66-4.16-1.3-8.42-2.26-12.73-2.86l-5.68,9.01-7.33,12.23Z" fill="#050505"/></g><g transform="translate(476.529 490.054)"><path d="M-164.19,-175.65c4.23,2.16,8.85,3.45,13.59,3.81c5.35.34,10.72-.01,15.98-1.06c0,0-5.73,4.97-7.5,9.88-1.78,4.91-.74,10.64-.74,10.64s-6.18-2.19-12.56-4.65c-6.37-2.46-13.94-3.15-13.94-3.15s4.23-2.52,5.55-5.73c1.34-3.21-.38-9.74-.38-9.74Z" fill="url(#e6OP4hnGjpA136-fill)"/><path d="M-134.55,-173.61l-.21.05c-5.19,1.02-10.5,1.38-15.78,1.05-4.64-.36-9.16-1.62-13.31-3.72l-.37-.21c-.09.15-.17.3-.25.46-.1.24-.22.47-.34.7.25,1.01,1.49,6.44.38,9.13-1.22,2.96-5.23,5.37-5.27,5.4l-.03.02c-.02.33-.11.65-.26.94-.06.08-.11.17-.17.25l.75.07c.08.01,7.55.71,13.75,3.1c6.31,2.43,12.51,4.63,12.57,4.66l1.12.4-.21-1.17c-.01-.06-.99-5.62.71-10.29c1.51-4.17,6.08-8.48,7.1-9.4l-.18-1.44Zm-8.22,10.36c-1.36,3.75-1.14,7.88-.92,9.85-2.04-.73-6.73-2.43-11.47-4.26-3.97-1.44-8.1-2.44-12.29-2.97c1.42-1.07,3.42-2.87,4.29-5c1.01-2.46.4-6.57-.04-8.74c3.97,1.79,8.21,2.88,12.54,3.23c4.64.31,9.3.09,13.89-.66-1.87,1.88-4.79,5.19-6,8.55v0Z" fill="#050505"/></g><g transform="translate(399.467 500.617)"><path d="M-140.02,-157.1l13.84-22.61c4.81.76,9.54,1.93,14.15,3.52c8.05,2.71,11.88,4.94,11.88,4.94l-.32,13.74c0,0-3.51,3.5-18.64,3.39s-20.91-2.98-20.91-2.98Z" fill="url(#e6OP4hnGjpA139-fill)"/><path d="M-118.45,-153.44c-.22,0-.44,0-.67,0-15.11-.11-20.97-2.92-21.21-3.05l-.67-.33l14.47-23.64.44.06c4.85.77,9.63,1.95,14.28,3.54c8.03,2.7,11.85,4.91,12.01,5l.35.2-.33,14.42-.2.19c-.16.17-3.79,3.61-18.47,3.61Zm-20.56-3.99c1.94.72,8.03,2.53,19.9,2.62c12.66.1,17.03-2.39,17.96-3.05l.3-13c-3.67-1.87-7.48-3.43-11.4-4.69-4.43-1.5-8.97-2.65-13.58-3.42l-13.18,21.54Z" fill="#050505"/></g><g transform="translate(422.283 477.599)"><path d="M-143.65,-170.76c0,0,1.29,5.02-.21,8.19-1.51,3.16-5.14,5.88-5.14,5.88l14.7,3.7l11.32,4.75c-.47-3.11-.43-6.27.1-9.37.88-5.24,6.6-10.7,6.6-10.7-4.71,1.06-9.54,1.45-14.35,1.15-4.54-.24-8.99-1.47-13.02-3.6Z" fill="url(#e6OP4hnGjpA142-fill)"/><path d="M-115.8,-169.13l-.64.16c-4.64,1.04-9.4,1.42-14.14,1.13-4.44-.25-8.78-1.45-12.71-3.51l-.66-.39c-.05.07-.1.13-.15.2-.12.18-.22.37-.32.56l.1.4c.01.05,1.21,4.82-.17,7.72-1.41,2.97-4.89,5.6-4.93,5.62v0c.04.38-.04.76-.23,1.1l15.13,3.81l12.45,5.23-.24-1.26c-.45-3.03-.41-6.11.11-9.13.83-4.95,6.34-10.26,6.4-10.31l.06-.05c-.01-.43-.03-.86-.06-1.28Zm-7.74,11.41c-.47,2.77-.56,5.59-.27,8.38l-10.21-4.29-13.48-3.41c1.74-1.46,3.19-3.25,4.27-5.25c1.09-2.3.84-5.41.55-7.21c3.79,1.74,7.86,2.77,12.03,3.02c4.14.25,8.3.01,12.39-.72-1.83,2.07-4.66,5.78-5.28,9.48Z" fill="#050505"/></g><g transform="translate(483.849 396.311)"><path d="M-171.77,-123.68c4.82.05,9.58-1.04,13.9-3.16c7.33-3.56,15.88-13.42,15.88-13.42s-2.98,17.75-3.36,33.06c-.19,9.46.94,18.9,3.36,28.05c0,0-5.44,1.76-15.93,1.04-10.5-.71-13.7-3.59-13.7-3.59s5.53-9.69,5.4-20.6-5.55-21.38-5.55-21.38Z" fill="url(#e6OP4hnGjpA145-fill)"/><path d="M-144.66,-107.18c.36-14.65,3.15-31.76,3.34-32.9-.25-.19-.49-.4-.71-.63-.08-.09-.16-.19-.24-.28l-.24.28c-.08.1-8.54,9.8-15.66,13.25-4.22,2.06-8.86,3.12-13.56,3.09l-1.21-.07.55,1.07c.05.1,5.34,10.47,5.47,21.09.13,10.59-5.25,20.16-5.31,20.25l-.28.48.41.37c.14.12,3.5,3.04,14.11,3.76c1.81.12,3.46.17,4.97.17c7.26,0,11.03-1.19,11.22-1.25l.64-.21-.19-.64c-2.36-9.06-3.48-18.44-3.31-27.83Zm-13.21,28.4c-8.01-.55-11.68-2.38-12.85-3.11c1.17-2.23,5.31-10.77,5.19-20.4-.11-9.11-3.77-17.78-5.13-20.69c4.54-.15,9.01-1.25,13.1-3.24c5.58-2.7,11.72-8.86,14.55-11.87-.81,5.3-2.71,18.9-3.01,30.88-.16,9.3.92,18.57,3.2,27.59-1.72.41-6.83,1.4-15.05.84v0Z" fill="#050505"/></g><g transform="translate(429.3 393.725)"><path d="M-151.26,-128.75c0,0,7.61-2.23,13.21-3.74s13.41-6.27,13.41-6.27-.59,19.77-.42,29.8s1.76,24.53,1.76,24.53c-4.49,1.18-9.14,1.64-13.77,1.37-4.82-.22-9.53-1.57-13.73-3.96c0,0,4.62-9.97,4.59-21.53-.04-7.04-1.78-13.97-5.05-20.2Z" fill="url(#e6OP4hnGjpA148-fill)"/><path d="M-134.69,-82.32c-.77,0-1.57-.02-2.4-.06-4.95-.21-9.77-1.61-14.06-4.07l-.51-.32.25-.55c.05-.1,4.56-9.97,4.52-21.24-.07-6.92-1.78-13.72-4.97-19.86l-.44-.76.84-.25c.08-.02,7.68-2.25,13.23-3.74c5.44-1.46,13.16-6.15,13.24-6.19l1.08-.66-.04,1.27c-.01.2-.59,19.86-.42,29.77.17,9.89,1.74,24.32,1.76,24.47l.06.56-.54.17c-3.78,1.02-7.68,1.51-11.6,1.46Zm-15.21-4.99c3.98,2.11,8.38,3.33,12.88,3.56c4.37.23,8.74-.17,12.99-1.19-.3-2.81-1.55-15.19-1.7-24.01-.14-8.48.26-24.08.38-28.59-2.36,1.36-8.06,4.51-12.51,5.71-4.46,1.2-10.27,2.88-12.38,3.49c3.06,6.15,4.68,12.91,4.74,19.78.03,10.15-3.42,18.95-4.4,21.25v0Z" fill="#050505"/></g><g transform="translate(412.757 343.699)"><path d="M-100.68,-71.06l-20.82-18.96-23.28-19.39c0,0,17.26-8.6,32.36-10.15c15.1-1.54,25.04-.45,25.04-.45s.13,9.39,4.38,17.22s12.11,15.16,12.11,15.16-3.26,5.35-13.02,11.58c-9.77,6.22-16.77,4.99-16.77,4.99Z" fill="url(#e6OP4hnGjpA151-fill)"/><path d="M-99.04,-70.27c-.59.01-1.17-.03-1.76-.12l-.2-.03-20.97-19.09-24.07-20.05.94-.47c.17-.09,17.55-8.68,32.6-10.22c14.99-1.53,25.08-.46,25.18-.45l.6.07.01.61c0,.09.19,9.32,4.3,16.9c4.14,7.64,11.89,14.91,11.97,14.98l.41.38-.29.48c-.14.22-3.45,5.56-13.24,11.8-7.1,4.54-12.76,5.21-15.48,5.21Zm-1.33-1.45c1.15.12,7.56.52,16.09-4.92c7.88-5.03,11.48-9.51,12.49-10.91-1.72-1.66-8.08-8.05-11.81-14.93-3.7-6.82-4.33-14.67-4.44-16.91-8.1-.55-16.23-.38-24.3.51-12.79,1.31-27.35,7.82-31.17,9.62l22.46,18.71l20.68,18.83Z" fill="#050505"/></g><g transform="translate(381.381 190.753)"><path d="M-133.41,-58.12c9.35-2.48,18.94-3.93,28.61-4.3c16.16-.65,25.38,2.57,25.38,2.57s25.86,16.73,30.67,29.11c2.36,6.08.56,21.42-.69,34.39-1.39,14.48-3.27,20.95-3.27,20.95L-56,32.94c0,0-9.18-1.92-27.83.97s-29.57,9.63-29.57,9.63s6.63-27.47,3.66-54.66-23.67-47-23.67-47Z" fill="url(#e6OP4hnGjpA154-fill)"/><path d="M-48.12,-31c-4.84-12.44-29.88-28.75-30.94-29.43l-.15-.07c-.38-.13-9.53-3.25-25.63-2.61-9.71.39-19.35,1.84-28.75,4.32-.09.36-.29.67-.58.91l.27.26c.21.2,20.55,19.96,23.46,46.57c2.93,26.75-3.58,54.15-3.65,54.42l-.39,1.62l1.42-.87c.11-.07,11.04-6.7,29.32-9.53s27.49-1,27.58-.98l.57.12l3.53-8.94c.08-.27,1.91-6.69,3.29-21.07.11-1.18.23-2.38.35-3.59c1.24-12.52,2.51-25.45.3-31.13Zm-1.66,30.98c-.12,1.21-.24,2.42-.35,3.6-1.37,14.23-3.23,20.76-3.22,20.76l-3.09,7.82c-2.29-.37-11.31-1.45-27.5,1.07-14.85,2.31-24.95,7.1-28.46,8.96c1.31-6.14,5.9-30,3.34-53.38-2.62-23.97-19.11-42.46-23.04-46.56c8.95-2.25,18.1-3.58,27.32-3.97c15.06-.61,24.14,2.21,25.05,2.51c1.51.99,25.78,17.02,30.33,28.73c2.09,5.35.78,18.69-.38,30.46Z" fill="#050505"/></g><g transform="translate(94.275 520.92)"><path d="M-7.8,-187.34c0,0,9.22,2.59,16.62,6.32c4.31,2.13,8.23,4.98,11.59,8.42l-2.7,11.65c0,0-14.46,2.86-26.2,2.21s-16.1-4.55-16.1-4.55l16.79-24.05Z" fill="url(#e6OP4hnGjpA157-fill)"/><path d="M-4.83,-157.96c-1.25,0-2.49-.03-3.7-.1-11.85-.66-16.34-4.55-16.52-4.72l-.46-.41l17.43-24.95.47.13c.09.03,9.37,2.65,16.74,6.37c4.39,2.16,8.38,5.07,11.79,8.58l.24.27-2.88,12.43-.44.09c-.13.02-11.83,2.31-22.67,2.31Zm-18.82-5.49c1.41.95,6,3.5,15.2,4.01c10.4.58,23.1-1.65,25.59-2.11l2.51-10.85c-3.27-3.24-7.03-5.95-11.15-8.01-6.31-3.19-14.06-5.56-16.02-6.14l-16.13,23.1Z" fill="#050505"/></g><g transform="translate(147.019 537.128)"><path d="M-44.52,-174.15l14.65-19.43c5.65.04,11.28.61,16.82,1.71c8.84,1.81,13.38,6.68,13.38,6.68l-2.76,17.28c0,0-17.63.67-28.62-1.8s-13.47-4.44-13.47-4.44Z" fill="url(#e6OP4hnGjpA160-fill)"/><path d="M-7.8,-167.14c-6.13,0-16.21-.28-23.39-1.9-11.02-2.48-13.64-4.5-13.75-4.58l-.52-.42l15.25-20.23h.34c5.7.04,11.38.62,16.97,1.73c8.95,1.83,13.55,6.68,13.75,6.89l.23.25-2.9,18.17-.56.02c-.08,0-2.21.07-5.42.07Zm-35.71-7.21c1.24.66,4.68,2.19,12.62,3.97c9.68,2.18,24.78,1.89,27.88,1.8l2.61-16.37c-1.02-.97-5.37-4.73-12.78-6.25-5.38-1.07-10.85-1.64-16.34-1.7l-13.99,18.55Z" fill="#050505"/></g><g transform="translate(121.081 493.926)"><path d="M-24.61,-177.8l-10,17.45c0,0,9.76,2.4,17.57,6.91c7.81,4.52,9.92,7,9.92,7s.05-8.46,2.07-14.07c1.33-3.56,3.19-6.89,5.52-9.88l-25.08-7.41Z" fill="url(#e6OP4hnGjpA163-fill)"/><path d="M1.09,-169.51c-.07-.19-.08-.39-.13-.58-.02-.06-.04-.13-.05-.2l-25.84-7.63-10.72,18.71.89.22c.1.02,9.76,2.42,17.39,6.84c7.56,4.37,9.72,6.83,9.74,6.85l.07.08c.23-.33.47-.66.71-.98.12-.18.27-.34.45-.47.08-2.33.44-8.55,2-12.91c1.31-3.48,3.13-6.74,5.41-9.68l.12-.14c-.01-.04-.03-.08-.04-.11Zm-6.78,9.46c-1.53,4.26-1.95,10.01-2.06,12.74-2.79-2.28-5.78-4.3-8.93-6.04-6.44-3.73-14.28-6.05-16.87-6.75l9.28-16.2l23.6,6.97c-2.1,2.85-3.79,5.97-5.02,9.28Z" fill="#050505"/></g><g transform="translate(137.608 417.909)"><path d="M-38.23,-148.47c0,0,3.27,16.22,2.03,27.32-.74,6.65-2.4,13.17-4.93,19.37l14.38,4.3l10.71,3.11c0,0-1.21-14.46-.3-25.73.71-7.51,2.1-14.94,4.16-22.2c0,0-2.79-3.08-11.96-4.66s-14.09-1.51-14.09-1.51Z" fill="url(#e6OP4hnGjpA166-fill)"/><path d="M-15.28,-93.43l-9.24-2.02c-2.07-.45-4.12-1.04-6.11-1.76l-11.28-3.54.69-2.06c2.23-5.92,3.69-12.11,4.34-18.4c1.22-10.87-1.99-26.95-2.02-27.11l-.16-.81.83-.01c.21,0,5.08-.07,14.21,1.51c9.3,1.61,12.23,4.75,12.35,4.88l.26.29-.11.37c-2.04,7.22-3.42,14.6-4.13,22.07-.9,11.08.28,25.47.3,25.61l.07.98Zm-24.93-8.79l9.53,3.51c2.28.84,4.62,1.51,7,1.99l6.86,1.41c-.25-3.47-.99-15.35-.22-24.84.71-7.41,2.07-14.75,4.06-21.93-.88-.73-4.03-2.95-11.3-4.21-4.34-.8-8.73-1.3-13.13-1.48.64,3.48,2.96,17.06,1.88,26.7-.73,6.46-2.3,12.8-4.68,18.85v0Z" fill="#050505"/></g><g transform="translate(189.131 426.09)"><path d="M-56.55,-151.53c0,0,2.59,13.4,1.94,25.07s-6.22,25.24-6.22,25.24s7.38-.87,13.69,0s12.4,4.91,12.4,4.91-.59-17.65.44-28.04c.81-7.12,2.15-14.17,4-21.09c0,0-3.3-2.89-12.42-4.69s-13.83-1.4-13.83-1.4Z" fill="url(#e6OP4hnGjpA169-fill)"/><path d="M-29.84,-145.95c-.14-.12-3.54-3.04-12.74-4.85-9.11-1.79-13.83-1.43-14.03-1.41l-.76.06.14.75c.03.13,2.57,13.45,1.93,24.9-.61,10.82-5.55,23.47-6.11,24.88.06.04.12.08.17.13.18.13.33.3.43.5.08.14.13.29.15.44.88-.1,7.65-.79,13.42.01c6.08.84,12.06,4.76,12.12,4.8l.4.26c.14-.31.38-.57.68-.74v-.12c-.01-.18-.58-17.73.44-27.95.81-7.08,2.14-14.09,3.98-20.98l.12-.42-.34-.26Zm-5.14,21.54c-.87,8.69-.59,22.6-.48,26.85-2.06-1.21-6.72-3.66-11.58-4.34-2.15-.28-4.31-.41-6.47-.4-2.65,0-4.96.17-6.26.28c1.31-3.44,5.31-14.63,5.86-24.41.56-10.01-1.27-21.4-1.8-24.45c4.33.03,8.65.51,12.89,1.42c7.23,1.42,10.74,3.56,11.77,4.28-1.82,6.83-3.13,13.77-3.93,20.77Z" fill="#050505"/></g><g transform="translate(169.433 505.644)"><path d="M-52.29,-162.1c2.81-3.23,5.37-6.67,7.67-10.28c1.62-2.58,2.8-5.42,3.48-8.39c4.75-1.17,9.71-1.23,14.48-.17c8.27,1.73,11.61,5.08,11.61,5.08s-4,5.7-5.39,11.49c-.84,3.5-1.39,7.07-1.66,10.66c0,0-2.28-4.37-13.38-6.68-11.09-2.31-16.81-1.71-16.81-1.71Z" fill="url(#e6OP4hnGjpA172-fill)"/><path d="M-21.54,-151.17l-1.16-2.22c-.02-.03-2.36-4.13-12.91-6.33-10.84-2.26-16.55-1.71-16.61-1.71l-1.74.18l1.15-1.32c2.78-3.2,5.32-6.61,7.6-10.18c1.57-2.51,2.72-5.27,3.4-8.15l.07-.42.4-.12c.26-.08,6.48-1.93,14.83-.19c8.38,1.75,11.81,5.12,11.96,5.27l.41.41-.33.47c-.04.06-3.95,5.66-5.28,11.26-.83,3.47-1.37,6.99-1.64,10.54l-.15,2.51Zm-28.73-11.69c5.03.1,10.04.7,14.94,1.8c7.49,1.56,11.09,4.06,12.7,5.63.31-3.06.83-6.1,1.53-9.1c1.17-4.91,4.12-9.66,5.15-11.21-1.12-.89-4.5-3.2-10.84-4.53-4.54-.97-9.23-.96-13.76.05-.74,2.89-1.91,5.65-3.48,8.19-2.02,3.21-4.27,6.27-6.72,9.17.15,0,.31,0,.48,0v0Z" fill="#050505"/></g><g transform="translate(189.012 275.99)"><path d="M-59.47,-73.54c0,0-2.19,19.39-.66,29.74s3.25,13.52,3.77,24.31c.33,6.02.31,12.05-.07,18.06c0,0,8.94.36,15.43,1.71c3.85.78,7.52,2.27,10.83,4.39c0,0,4.98-10.71,8.57-16.51s6.59-11.19,6.59-11.19s14.71-22.2,10.98-44.3c-2.28-13.58-13.29-19.77-16.81-21.75-5.64-3.16-13.67-5.59-13.67-5.59-4.31,4.81-8.92,9.33-13.81,13.55-8.2,7.09-11.15,7.58-11.15,7.58Z" fill="url(#e6OP4hnGjpA175-fill)"/><path d="M-3.35,-67.44c-2.35-13.94-13.5-20.18-17.16-22.23-5.64-3.16-13.47-5.55-13.8-5.65l-.43-.13-.29.34c-4.29,4.78-8.88,9.28-13.74,13.48-7.72,6.67-10.71,7.4-10.82,7.42l-.5.08-.06.52c-.09.8-2.19,19.6-.65,29.92.58,3.9,1.2,6.85,1.74,9.44c1.12,4.86,1.8,9.82,2.02,14.8.32,5.96.3,11.93-.06,17.89.14.07.27.17.37.28l.01.01c.14.16.25.34.33.54.76.03,9.17.43,15.26,1.69c3.76.77,7.34,2.22,10.57,4.28l.67.47.35-.75c.05-.11,5.01-10.74,8.53-16.44c3.56-5.74,6.57-11.16,6.57-11.17.15-.22,14.82-22.68,11.09-44.79Zm-12.26,44.08c-.03.05-3.03,5.45-6.57,11.16-3.03,4.9-7.09,13.36-8.28,15.86-3.21-1.93-6.73-3.3-10.4-4.05-4.9-.89-9.86-1.45-14.83-1.68.32-5.81.32-11.63.03-17.44-.22-5.06-.91-10.09-2.05-15.02-.57-2.7-1.15-5.5-1.73-9.36-1.38-9.27.3-26.15.61-29.11c1.19-.43,4.49-1.99,10.96-7.58c4.79-4.15,9.33-8.58,13.58-13.28c1.72.55,8.33,2.73,13.11,5.4c3.52,1.97,14.23,7.97,16.48,21.26c3.63,21.55-10.74,43.57-10.91,43.84Z" fill="#050505"/></g><g transform="translate(119.36 310.379)"><path d="M-34.58,-90.89c4.66,4.38,9.66,8.39,14.95,11.99c2.96,2.02,6.09,3.78,9.36,5.26c11.71,5.1,22.57,9.39,22.57,9.39s-3.08-13.34-2.95-23.88.84-19.8.84-19.8-6.83,5.43-20.79,10.86c-7.73,2.95-15.78,5.03-23.98,6.18Z" fill="url(#e6OP4hnGjpA178-fill)"/><path d="M12.97,-64.4c-.03-.13-3.06-13.39-2.94-23.72.12-10.4.83-19.66.83-19.75l.05-.59c-.22.09-.46.14-.7.14-.18,0-.36-.03-.53-.08-.75.57-7.58,5.66-20.53,10.7-7.65,2.92-15.61,4.97-23.72,6.13c0,.45-.15.89-.44,1.24c4.68,4.39,9.69,8.41,14.99,12.02c2.99,2.05,6.16,3.83,9.47,5.32c11.59,5.05,22.49,9.35,22.6,9.39l1.22.48-.3-1.28ZM-10,-74.26c-3.23-1.46-6.33-3.2-9.25-5.2-4.86-3.31-9.47-6.97-13.81-10.94c7.76-1.22,15.37-3.24,22.71-6.03c10.72-4.17,17.21-8.3,19.74-10.07-.2,3.04-.64,10.36-.73,18.36-.1,8.61,1.94,19.17,2.7,22.78-3.15-1.26-12.03-4.84-21.36-8.9Z" fill="#050505"/></g><g transform="translate(142.482 355.978)"><path d="M-43.1,-86.54c.75-5.91,1.16-11.86,1.23-17.82.15-6.73-.15-13.45-.88-20.14c0,0,10.96,5.82,19.8,9.47s12.14,5.18,12.14,5.18c.52,2.67.79,5.38.83,8.09v8.25l-7.07,13.13-11.96-4.66-14.09-1.5Z" fill="url(#e6OP4hnGjpA181-fill)"/><path d="M-10.14,-109.99l-.07-.34-.31-.15c-.03-.01-3.42-1.58-12.17-5.19-8.7-3.59-19.63-9.38-19.74-9.44l-1.17-.62.16,1.31c.73,6.65,1.02,13.35.87,20.04-.08,5.87-.48,11.72-1.2,17.54.3.24.51.59.57.97l7.82.83c4.11.44,8.14,1.42,11.98,2.92l6.64,2.59l7.44-13.82v-8.43c-.01-2.74-.3-5.49-.82-8.21Zm-.54,16.32l-6.7,12.44-5.63-2.2c-3.82-1.49-7.83-2.47-11.9-2.92l-7.41-.81c.67-5.71,1.05-11.45,1.14-17.19.12-6.32-.12-12.65-.75-18.94c3.05,1.59,11.61,5.96,18.71,8.89c7.23,2.98,10.77,4.56,11.79,5.02.46,2.51.71,5.06.75,7.62v8.09Z" fill="#050505"/></g><g transform="translate(51.265 110.707)"><path d="M-0.32,-10.17l-8.62-6.18l11.2-9.61l8.54-6.67.28.51c.04.06,3.46,6.44-1.68,13.62-5.06,7.07-9.33,8.23-9.51,8.27l-.21.06Zm-7-6.25l7.19,5.15c.9-.33,4.53-1.95,8.73-7.81c3.97-5.55,2.53-10.42,1.87-12.01l-7.57,5.9-10.22,8.77Z" fill="#d4af7f"/><path d="M-0.35,-9.97l-8.89-6.36L2.14,-26.1l8.72-6.81.39.7c.15.26,3.52,6.55-1.69,13.82-5.1,7.12-9.43,8.3-9.61,8.34l-.3.08Z" fill="#050505"/></g><g transform="translate(62.434 146.377)"><line x1="-12.77" y1="-8.54" x2="-11.38" y2="-46.38" fill="none"/><rect width="37.87" height="1.38" rx="0" ry="0" transform="matrix(.0371-.9993 0.9993 0.0371-13.467353-8.566286)" fill="#050505"/></g><g transform="translate(82.169 61.493)"><line x1="-18.76" y1="-14.25" x2="-20.25" y2="17.34" fill="none"/><rect width="31.63" height="1.38" rx="0" ry="0" transform="matrix(.047-.9989 0.9989 0.047-20.938275 17.308494)" fill="#050505"/></g><g transform="translate(383.819 359.879)"><path d="M-133.63,-117.51c0,0,10.47,6.49,18.13,11.51s9.72,11.09,9.72,11.09s1.73-.65,8.5-2.49c7.57-2.06,10.64-3.65,10.64-3.65l-29.89-25.24c-2.7,2.28-5.74,4.11-9.02,5.42-5.42,2.15-8.08,3.36-8.08,3.36Z" fill="url(#e6OP4hnGjpA193-fill)"/><path d="M-106.19,-94.02l-.23-.67c-.02-.06-2.1-5.92-9.45-10.74-7.57-4.96-18.01-11.44-18.11-11.5l-1.09-.68l1.17-.53c.03-.01,2.73-1.24,8.1-3.37c3.2-1.28,6.18-3.07,8.82-5.29l.45-.4l31.14,26.29-.92.47c-.13.07-3.22,1.64-10.77,3.7-6.62,1.81-8.43,2.47-8.44,2.47l-.67.25Zm-25.97-23.38c2.9,1.81,10.91,6.82,17.04,10.83c6.4,4.2,8.98,9.08,9.74,10.81.98-.32,3.26-1.02,7.92-2.3c3.25-.84,6.43-1.9,9.54-3.16l-28.62-24.16c-2.65,2.15-5.61,3.88-8.77,5.15-3.3,1.31-5.58,2.28-6.85,2.83Z" fill="#050505"/></g><g transform="translate(.199 0.208)"><path d="M44.6,23.28C26.82,33.74,23.79,41.29,23.79,41.29L10.79,44c0,0,13.39-22.76,40.07-30.48c23.32-6.75,39.75-2.8,39.75-2.8s-22.62-1.2-46.01,12.56Z" fill="url(#e6OP4hnGjpA196-fill)"/><path d="M50.66,12.86C24.02,20.57,10.33,43.42,10.19,43.65l-.11.19c.32.2.56.51.66.87l13.18-2.75.36-.08.14-.34c.03-.07,3.24-7.51,20.53-17.68C67.87,10.39,90.34,11.39,90.56,11.4l.2-1.36c-.16-.03-16.87-3.9-40.1,2.82Zm-6.41,9.83c-15.87,9.34-20.12,16.37-20.94,18l-11.06,2.3C15.62,38,28.68,20.65,51.04,14.18c8.68-2.55,17.68-3.86,26.72-3.9c1.62,0,3.11.05,4.45.12-13.38,1.34-26.33,5.53-37.96,12.29v0Z" fill="#050505"/></g><g transform="translate(69.02 126.494)"><path id="e6OP4hnGjpA199" d="M-14.48,-38.88c1.63.73,2.36,2.64,1.63,4.27-.54,1.21-1.78,1.97-3.1,1.9c1.63.75,3.55.03,4.29-1.59.75-1.63.03-3.55-1.59-4.29-.39-.18-.81-.28-1.23-.29Z" fill="#d8d8d8" opacity="0.584444"/></g><path d="M73.07,352.98c0,0,1.33-.63,7.09.75c2.93.68,5.81,1.56,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M77.17,347.79c0,0,1.33-.65,7.09.75c3.87.94,8.62,2.63,8.62,2.63s-5.38-2.88-6.95-3.47-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M79.98,343.3c0,0,1.34-.69,7.09.75c2.92.72,5.8,1.59,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M105.76,359.59c0,0,1.33-.63,7.09.75c2.93.68,5.81,1.56,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M109.85,354.4c0,0,1.33-.65,7.09.75c3.87.94,8.62,2.63,8.62,2.63s-5.38-2.88-6.95-3.47-7.13-2.71-7.13-2.71l-1.63,2.8Z" fill="#050505"/><path d="M112.66,349.91c0,0,1.34-.69,7.09.75c2.92.72,5.8,1.59,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M263.8,336.85c0,0,1.33-.65,7.09.75c3.87.94,8.62,2.63,8.62,2.63s-5.38-2.88-6.95-3.47-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M267.99,330.3c0,0,1.34-.69,7.09.75c2.92.72,5.8,1.59,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M297.53,346.17c0,0,1.33-.63,7.09.75c2.93.68,5.81,1.56,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M300.93,340.98c0,0,1.33-.65,7.09.75c3.87.94,8.62,2.63,8.62,2.63s-5.38-2.88-6.95-3.47-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M303.75,336.49c0,0,1.34-.69,7.09.75c2.92.72,5.8,1.59,8.62,2.63c0,0-5.38-2.88-6.95-3.47s-7.13-2.7-7.13-2.7l-1.63,2.79Z" fill="#050505"/><path d="M53.28,362.06l25.58,17.17-25.5-13.33-.08-3.84Z" fill="#050505"/><path d="M53.35,368.97l14.53,10.26-14.45-7.63-.08-2.63Z" fill="#050505"/><path d="M162.53,382.65l26.92-1.6-26.04,3.14-.88-1.54Z" fill="#050505"/><path d="M165.35,388.27l27.77-1.66-27.66,3.54-.11-1.88Z" fill="#050505"/><path d="M166,395.04L188.56,394l-22.3,2.83-.26-1.79Z" fill="#050505"/><path d="M261.31,372.95l27.83-1.3-27.06,3.24-.77-1.94Z" fill="#050505"/><path d="M262.63,377.92l14.33-.52-14.29,2.48-.04-1.96Z" fill="#050505"/><path d="M108.65,302.73l-5.25,16.59l2.67.25l2.58-16.84Z" fill="#050505"/><path d="M112.3,309.42l-2.41,11.31l2.31.53.1-11.84Z" fill="#050505"/><path d="M134.48,323.68l4.38-16.64-2.2,17.16-2.18-.52Z" fill="#050505"/><path d="M141.74,324.12l2.86-12.97-.79,13.61-2.07-.64Z" fill="#050505"/><path d="M147.32,325.48l3.34-27.18-1.26,28.32-2.08-1.14Z" fill="#050505"/><path d="M111.39,270.84l-.62,16.94l2.66-16.87-2.04-.07Z" fill="#050505"/><path d="M117.23,272.89l-2.44,31.05l5.09-30.66-2.65-.39Z" fill="#050505"/><path d="M137.7,275.52l1.78,19.64.89-20.01-2.67.37Z" fill="#050505"/><path d="M146.85,276.29l2.94.37-2.43,21.47-.51-21.84Z" fill="#050505"/><g transform="translate(262.426 354.095)"><path d="M-78.7,-124.28c-1.21,5.22-2.98,10.3-5.28,15.14-3.66,7.55-4.01,7.9-4.01,7.9s1.38.69,6.88.69s6.82-.49,6.82-.49l9.84-22.31-14.25-.93Z" fill="url(#e6OP4hnGjpA228-fill)"/><path d="M-81.11,-99.87c-5.51,0-7.03-.68-7.18-.76l-.85-.43.63-.63c.12-.19.82-1.37,3.92-7.75c2.27-4.8,4.02-9.82,5.22-14.98l.12-.58l15.83,1.03-10.36,23.48-.27.1c-.14.04-1.59.52-7.06.52Zm-5.84-1.79c1.93.33,3.89.47,5.84.42c2.12.07,4.23-.06,6.32-.39l9.31-21.11-12.69-.82c-1.23,5.07-2.97,10-5.2,14.72-1.26,2.62-2.76,5.68-3.58,7.18v0Z" fill="#050505"/></g><g transform="translate(284.6 355.16)"><path d="M-72.19,-124.7l-14.43.28-9.84,22.31c0,0,4.87-.2,7.62-.2c1.38,0,8.69-.95,8.69-.95l7.96-21.44Z" fill="url(#e6OP4hnGjpA231-fill)"/><path d="M-97.54,-101.38l10.46-23.73l15.88-.31-8.45,22.78-.41.05c-.3.04-7.38.96-8.78.96-2.71,0-7.55.19-7.6.2l-1.1.05Zm11.37-22.37l-9.22,20.9c1.61-.06,4.61-.16,6.55-.16c1,0,5.58-.56,8.19-.89l7.46-20.11-12.98.26Z" fill="#050505"/></g><g transform="translate(310.955 352.183)"><path d="M-90.23,-102.28l8.5-21.2-16.81,1.76-7.96,21.44v0c5.2-.28,10.38-.9,15.5-1.86l.77-.14Z" fill="url(#e6OP4hnGjpA234-fill)"/><path d="M-107.51,-99.54l8.47-22.83l18.37-1.92-9.06,22.62-1.14.21c-5.15.96-10.36,1.58-15.59,1.86l-1.05.06Zm9.47-21.55l-7.44,20.06c4.82-.31,9.62-.9,14.37-1.78l.39-.07l7.93-19.79-15.25,1.58Z" fill="#050505"/></g><g transform="translate(337.024 348.558)"><path d="M-93.64,-122.06l-14.17,2.2-8.5,21.2c3.17-.45,6.32-1.07,9.43-1.86c5.5-1.38,6.69-2.02,6.69-2.02l6.55-19.52Z" fill="url(#e6OP4hnGjpA237-fill)"/><path d="M-117.37,-97.83l9.08-22.65l15.67-2.44-7,20.84-.24.13c-.13.07-1.42.73-6.85,2.09-3.13.8-6.31,1.43-9.51,1.88l-1.15.15Zm10.06-21.41l-7.91,19.73c1.55-.24,4.53-.77,8.18-1.68c2.14-.48,4.24-1.1,6.3-1.86l6.1-18.16-12.67,1.97Z" fill="#050505"/></g><g transform="translate(362.981 342.405)"><path d="M-106.48,-119.58l-13.12,3.68-6.55,19.52c0,0,2.94-.73,7.07-2.1c4.13-1.38,6.86-2.34,6.86-2.34l5.74-18.76Z" fill="url(#e6OP4hnGjpA240-fill)"/><path d="M-127.2,-95.42l7.06-21.05l14.68-4.11-6.21,20.28-.33.12c-.03.01-2.79.98-6.87,2.35-4.1,1.37-7.09,2.11-7.12,2.12l-1.21.29Zm8.14-19.92l-6.03,17.96c1.23-.34,3.3-.93,5.79-1.76c3.26-1.09,5.68-1.93,6.52-2.22l5.27-17.21-11.55,3.23Z" fill="#050505"/></g><g transform="translate(385.364 335.406)"><path d="M-117.39,-116.94l-11.47,4.36-5.74,18.75c0,0,4.83-1.78,8.96-3.85c4.13-2.06,8.34-3.98,8.34-3.98l-.09-15.28Z" fill="url(#e6OP4hnGjpA243-fill)"/><path d="M-135.67,-92.71l6.25-20.4l12.71-4.83.09,16.71-.41.19c-.04.02-4.25,1.94-8.32,3.97-4.11,2.06-8.98,3.86-9.03,3.88l-1.29.48Zm7.37-19.35l-5.23,17.08c1.71-.67,4.82-1.94,7.58-3.32c3.35-1.68,6.8-3.27,7.96-3.8l-.08-13.84-10.23,3.88Z" fill="#050505"/></g><path d="M258.22,146.21l-.81-1.83c.5-.22,12.55-5.46,31.07-5.58c18.44-.13,30.42,3.01,30.54,3.04l-.51,1.93c-.12-.03-11.9-3.08-30.01-2.97-18.09.12-30.16,5.36-30.28,5.41Z"/><path d="M266.42,161.29l-.77-1.85c.17-.07,16.68-6.82,37.63-5.54c20.93,1.28,29.75,5.36,30.11,5.54l-.86,1.81c-.09-.04-8.9-4.1-29.38-5.35-20.49-1.24-36.57,5.32-36.73,5.39Z"/><path d="M333.65,175.64c-.08-.02-8.44-1.97-25.23-2.9s-37.49,2.67-37.69,2.71l-.35-1.97c.21-.04,21.12-3.68,38.15-2.73c17,.94,25.24,2.87,25.59,2.95l-.47,1.94Z"/><path d="M307.95,171.75l-.02-.48c-.15-4.2-.52-8.44-1.09-12.61l-.47-3.41l1.98-.27.47,3.41c.59,4.24.96,8.55,1.11,12.81l.02.48-2,.07Z"/><path d="M271.87,194.62l-.34-1.97c10.05-1.73,20.31-2.93,30.48-3.55c10.13-.52,20.39-.31,30.49.61l-.18,1.99c-10-.92-20.16-1.12-30.19-.6-10.1.61-20.28,1.8-30.26,3.52Z"/><path d="M271.56,219.14l-.6-1.91c.17-.05,17.49-5.43,31.82-7.25c14.3-1.81,26.83-2.13,26.96-2.13l.05,2c-.12,0-12.56.32-26.76,2.12-14.15,1.79-31.3,7.11-31.47,7.17Z"/><polygon points="303.26,211.18 301.26,211.18 301.26,202.61 301.08,190.11 303.08,190.08 303.26,202.6"/><circle r="1.03" transform="translate(303.74 163.44)"/><circle r="1.03" transform="translate(313.37 164.13)"/><circle r="1.03" transform="translate(296.86 201.27)"/><circle r="1.03" transform="translate(307.87 199.89)"/><g transform="translate(246.037 217.543)"><path d="M-43.99,-58.2c-.99-4.71-2.47-9.33-4.4-13.74l-.44-1l1.83-.8.43.99c1.99,4.53,3.51,9.28,4.53,14.13l-1.95.42Z"/><path d="M-33.72,-57.67c-1.92,0-3.84-.03-5.76-.08-24.36-.87-34.68-1.92-34.78-1.93l.21-1.99c.1.01,10.37,1.06,34.64,1.92c15.28.45,30.63-.91,45.61-4.03l.41,1.96c-13.27,2.76-26.8,4.15-40.33,4.15Z"/><path d="M-44.31,-45.54c-21.89,0-37.03-1.66-37.19-1.67l.22-1.99c.17.02,17.64,1.93,42.2,1.63c24.5-.3,49.88-6.4,50.13-6.47l.47,1.94c-.26.06-25.84,6.22-50.58,6.52-1.79.03-3.54.04-5.25.04Z"/><path d="M-70.53,-32.03c-7.32,0-12.29-.09-12.43-.09l.04-2c.41.01,41.11.73,61.93-2.02c20.8-2.75,35.76-7.56,35.91-7.61l.62,1.9c-.15.05-15.28,4.92-36.26,7.69-13.73,1.81-35.96,2.13-49.81,2.13Z"/><path d="M-47.8,-20.69c-11.07,0-19.9-.42-20.06-.43l.1-2c.3.02,29.96,1.44,48.78-.98c18.8-2.41,36.63-8.54,36.81-8.6l.65,1.89c-.18.06-18.2,6.25-37.21,8.69-8.71,1.13-19.7,1.43-29.07,1.43Z"/><rect width="2" height="12.18" rx="0" ry="0" transform="matrix(.9924-.1234 0.1234 0.9924-21.353454-35.061689)"/><rect width="2" height="13.52" rx="0" ry="0" transform="matrix(.9825-.1862 0.1862 0.9825-60.158605-59.637429)"/><rect width="2" height="12.39" rx="0" ry="0" transform="matrix(.9795-.2013 0.2013 0.9795-27.527172-58.838926)"/><circle r="1.03" transform="translate(-41.33-65.79)"/><circle r="1.03" transform="translate(-42.71-39.66)"/><circle r="1.03" transform="translate(-35.83-40.35)"/><circle r="1.03" transform="translate(-21.39-52.72)"/><circle r="1.03" transform="translate(-56.46-14.21)"/><circle r="1.03" transform="translate(-55.09-5.27)"/><circle r="1.03" transform="translate(-54.4 5.73)"/><circle r="1.03" transform="translate(12.31-21.78)"/><circle r="1.03" transform="translate(13.69-11.46)"/><circle r="1.03" transform="translate(15.75-1.83)"/></g><path d="M204.93,231.59c-6.6,0-13.2-.33-19.77-.98l.2-1.99c14.25,1.42,28.68,1.29,42.9-.41c23.62-2.76,37.95-10.51,38.09-10.59l.96,1.75c-.15.08-14.78,8.01-38.82,10.82-7.81.93-15.69,1.4-23.56,1.4Z"/><circle r="1.03" transform="translate(196.45 151.75)"/><path d="M136.81,236.63c-.72-7.27-.72-14.63,0-21.9.75-6.91,1.94-13.84,3.55-20.59l1.95.46c-1.59,6.67-2.77,13.51-3.5,20.33-.7,7.13-.7,14.36,0,21.5l-2,.2Z"/><path d="M154.75,236.24c-.01-.1-.57-10.31.95-25.26c1.52-14.93,4.33-28.02,4.35-28.15l1.96.42c-.03.13-2.81,13.11-4.32,27.93-1.5,14.79-.95,24.84-.95,24.94l-1.99.12Z"/><polygon points="163.39,237.57 161.42,237.19 165.78,214.68 170.36,189.06 172.33,189.41 167.74,215.04"/><path d="M170.93,240.42l-1.91-.59c.03-.1,3.1-9.96,5.75-19.1c2.63-9.07,4.51-23.9,4.53-24.05l1.98.25c-.02.15-1.92,15.14-4.59,24.36-2.66,9.15-5.73,19.03-5.76,19.13Z"/><path d="M177.33,245.74c-.08-.07-8.02-7.41-23.57-8.56-15.65-1.15-23.37,1.91-23.45,1.94l-.76-1.85c.33-.13,8.17-3.28,24.36-2.09c16.31,1.2,24.46,8.78,24.8,9.1l-1.38,1.46Z"/><path d="M294.5,278.08l.47-17.39-2.64.5l2.17,16.89Z" fill="#050505"/><path d="M288.53,274.08l-.8-11.54-2.36.12l3.16,11.42Z" fill="#050505"/><path d="M299.31,310.36l-2.62-16.74.61,17.07l2.01-.33Z" fill="#050505"/><path d="M290.65,310.47l.26-31.15-2.94,30.96l2.68.19Z" fill="#050505"/><path d="M317.85,317.07l4.38-16.64-2.2,17.16-2.18-.52Z" fill="#050505"/><path d="M326.65,317.95l1.49-13.21.82,13.34-2.31-.13Z" fill="#050505"/><path d="M334.23,318.16l-1.07-26.97l3.36,26.3-2.29.67Z" fill="#050505"/><path d="M330.89,283.99l1.11-18.4-2.69,1.44l1.58,16.96Z" fill="#050505"/><path d="M324.58,282.16l-.8-11.54-2.36.12l3.16,11.42Z" fill="#050505"/></g><g id="e6OP4hnGjpA291" transform="matrix(-0.029168 -0.999575 0.999575 -0.029168 -247.199296 547.72479)"><g transform="translate(318.509 555.589)"><path d="M-173.79,-175.52c-4.98,0-6.78-4.62-5.65-8.33-.46.02-.87.04-1.2.04-10.61,0-19.21,9.94-19.21,22.21s7.2,21.01,19.21,22.21c1.62.23,3.26.33,4.9.31-.74-3.23.81-7.17,4.5-8.16l.65-29.05c-.9.48-1.96.77-3.2.77Z" fill="url(#e6OP4hnGjpA293-fill)"/><path d="M-180.58,-139.99c-11.52-1.15-18.67-9.43-18.67-21.61c0-11.92,8.35-21.61,18.61-21.61.3,0,.65-.01,1.04-.03.09-.42,2.62-.83,2.78-1.22-.55.03-2.11,0-2.49,0-10.92,0-21.15,10.28-21.15,22.86c0,12.85,7.57,21.59,19.72,22.8c1.56.22,3.12.33,4.69.33.15,0,.3-.01.46-.01-.13-.39-.22-.79-.28-1.2-1.57.01-3.15-.08-4.71-.31Z" fill="#050505"/></g><g><g transform="translate(176.886 571.568)"><g><path d="M-24.65,-198.55c11.49,4.82,16.88,18.08,12.04,29.61s-18.08,16.98-29.56,12.16c-11.49-4.82-16.88-18.08-12.04-29.61s18.07-16.98,29.56-12.16Z" fill="url(#e6OP4hnGjpA298-fill)"/></g><path d="M-42.42,-156.21c-11.83-4.96-17.41-18.62-12.45-30.45s18.62-17.41,30.45-12.45s17.41,18.62,12.45,30.45-18.62,17.41-30.45,12.45Zm17.53-41.77c-11.11-4.66-23.98.66-28.68,11.87s.51,24.11,11.63,28.78s23.98-.66,28.68-11.87-.52-24.12-11.63-28.78Z" fill="#050505"/></g><ellipse rx="6.8" ry="6.77" transform="matrix(.3892-.9211 0.9211 0.3892 144.478309 394.057093)" fill="#a9a9a9"/><path d="M141.19,401.01c-3.78-1.6-5.57-5.95-3.98-9.7s5.95-5.5,9.73-3.91c3.78,1.6,5.57,5.95,3.98,9.7s-5.95,5.51-9.73,3.91Zm5.3-12.52c-3.09-1.31-6.69.19-8.03,3.35s.1,6.78,3.19,8.09s6.69-.19,8.03-3.35c1.33-3.15-.1-6.78-3.19-8.09Z" fill="#2b190e"/><g><rect width="22.84" height="4.35" rx="0" ry="0" transform="translate(132.14 379.83)" fill="url(#e6OP4hnGjpA303-fill)"/><path d="M155.36,384.55h-23.59v-5.1h23.59v5.1Zm-22.85-.75h22.09v-3.6h-22.09v3.6Z"/></g><g><rect width="22.84" height="4.35" rx="0" ry="0" transform="translate(132.14 404.07)" fill="url(#e6OP4hnGjpA306-fill)"/><path d="M155.36,408.8h-23.59v-5.1h23.59v5.1Zm-22.85-.75h22.09v-3.6h-22.09v3.6Z"/></g><circle r="0.93" transform="translate(152.57 382)" fill="url(#e6OP4hnGjpA308-fill)"/><circle r="0.93" transform="translate(134.55 382)" fill="url(#e6OP4hnGjpA309-fill)"/><circle r="0.93" transform="translate(143.87 382)" fill="url(#e6OP4hnGjpA310-fill)"/><circle r="0.93" transform="translate(152.57 406.25)" fill="url(#e6OP4hnGjpA311-fill)"/><circle r="0.93" transform="translate(134.55 406.25)" fill="url(#e6OP4hnGjpA312-fill)"/><circle r="0.93" transform="translate(143.87 406.25)" fill="url(#e6OP4hnGjpA313-fill)"/></g></g><g id="e6OP4hnGjpA314" transform="matrix(-0.029168 -0.999575 0.999575 -0.029168 -135.43591 631.017756)"><g transform="translate(318.509 555.589)"><path d="M-78.87,-188.25c-4.96.5-7.21-3.91-6.46-7.73-.45.07-.86.13-1.19.16-10.56,1.06-18.12,11.82-16.89,24.02s9.27,20.18,21.33,20.18c1.64.07,3.28,0,4.9-.18-1.06-3.14.09-7.21,3.66-8.57l-2.26-28.97c-.83.57-1.86.96-3.09,1.09Z" fill="url(#e6OP4hnGjpA316-fill)"/><path d="M-82.07,-152.22c-11.57.01-19.52-7.52-20.74-19.64-1.19-11.86,6.14-22.34,16.35-23.36.3-.03.65-.08,1.04-.14.05-.42,2.53-1.08,2.65-1.49-.55.08-2.1.21-2.47.25-10.87,1.09-20.02,12.35-18.76,24.86c1.29,12.79,9.69,20.72,21.91,20.72c1.57.07,3.14.02,4.7-.14.15-.02.3-.04.45-.06-.17-.37-.3-.76-.4-1.17-1.57.17-3.15.23-4.73.17Z" fill="#050505"/></g><g><g transform="translate(176.886 571.568)"><g><path d="M69.52,-212c11.91,3.65,18.6,16.3,14.94,28.26s-16.29,18.7-28.2,15.06c-11.91-3.65-18.6-16.3-14.94-28.26s16.29-18.7,28.2-15.06Z" fill="url(#e6OP4hnGjpA321-fill)"/></g><path d="M56.09,-168.1c-12.27-3.75-19.19-16.79-15.44-29.05s16.79-19.19,29.05-15.44s19.19,16.79,15.44,29.05c-3.76,12.27-16.79,19.2-29.05,15.44Zm13.25-43.31c-11.52-3.53-23.79,3.06-27.35,14.68s2.92,23.94,14.45,27.47s23.79-3.06,27.35-14.68-2.92-23.95-14.45-27.47Z" fill="#050505"/></g><ellipse rx="6.8" ry="6.77" transform="matrix(.2951-.9555 0.9555 0.2951 240.83052 381.262182)" fill="#a9a9a9"/><path d="M238.23,388.53c-3.92-1.21-6.13-5.36-4.93-9.25s5.37-6.07,9.29-4.86s6.13,5.36,4.93,9.25-5.37,6.07-9.29,4.86Zm4.01-12.99c-3.21-.99-6.64.86-7.65,4.13s.78,6.74,3.99,7.73s6.64-.86,7.65-4.13-.78-6.74-3.99-7.73Z" fill="#2b190e"/><g><polygon points="250.26,370.4 227.53,372.68 227.1,368.35 249.83,366.07" fill="url(#e6OP4hnGjpA326-fill)"/><path d="M227.2,373.09l-.51-5.08l23.47-2.36.51,5.08-23.47,2.36Zm.31-4.4l.36,3.58l21.98-2.21-.36-3.58-21.98,2.21Z"/></g><g><polygon points="252.69,394.52 229.96,396.8 229.52,392.47 252.25,390.19" fill="url(#e6OP4hnGjpA329-fill)"/><path d="M229.62,397.21l-.51-5.08l23.48-2.36.51,5.08-23.48,2.36Zm.31-4.4l.36,3.58l21.98-2.21-.36-3.58-21.98,2.21Z"/></g><circle r="0.93" transform="translate(247.65 368.47)" fill="url(#e6OP4hnGjpA331-fill)"/><circle r="0.93" transform="translate(229.71 370.28)" fill="url(#e6OP4hnGjpA332-fill)"/><circle r="0.93" transform="translate(238.99 369.34)" fill="url(#e6OP4hnGjpA333-fill)"/><circle r="0.93" transform="translate(250.07 392.59)" fill="url(#e6OP4hnGjpA334-fill)"/><circle r="0.93" transform="translate(232.14 394.4)" fill="url(#e6OP4hnGjpA335-fill)"/><circle r="0.93" transform="translate(241.41 393.47)" fill="url(#e6OP4hnGjpA336-fill)"/></g></g><g><g id="e6OP4hnGjpA338" transform="matrix(0.025996 -0.999662 0.999662 0.025996 -56.13443 691.542808)"><g transform="translate(318.509 555.589)"><path d="M10.64,-194.85c-4.98,0-6.78-4.62-5.65-8.33-.46.02-.87.04-1.2.04-10.61,0-19.21,9.94-19.21,22.21s7.2,21.01,19.21,22.21c1.62.23,3.26.33,4.9.31-.74-3.23.81-7.17,4.5-8.16l.65-29.05c-.91.48-1.97.77-3.2.77Z" fill="url(#e6OP4hnGjpA340-fill)"/><path d="M3.84,-159.32c-11.52-1.15-18.67-9.43-18.67-21.61c0-11.92,8.35-21.61,18.61-21.61.3,0,.65-.01,1.04-.03.09-.42,2.62-.83,2.78-1.22-.55.03-2.11,0-2.49,0-10.92,0-21.15,10.28-21.15,22.86c0,12.85,7.57,21.59,19.72,22.8c1.56.22,3.12.33,4.69.33.15,0,.3-.01.46-.01-.13-.39-.22-.79-.28-1.2-1.56.01-3.14-.08-4.71-.31Z" fill="#050505"/></g><g><g transform="translate(176.886 571.568)"><g><path d="M159.77,-217.88c11.49,4.82,16.88,18.08,12.04,29.61-4.84,11.54-18.08,16.98-29.56,12.16-11.49-4.82-16.88-18.08-12.04-29.61s18.07-16.98,29.56-12.16Z" fill="url(#e6OP4hnGjpA345-fill)"/></g><path d="M142.01,-175.54c-11.83-4.96-17.41-18.62-12.45-30.45s18.62-17.41,30.45-12.45s17.41,18.62,12.45,30.45-18.62,17.41-30.45,12.45Zm17.52-41.77c-11.11-4.66-23.98.66-28.68,11.87s.51,24.11,11.63,28.78c11.11,4.66,23.98-.66,28.68-11.87s-.52-24.12-11.63-28.78Z" fill="#050505"/></g><ellipse rx="6.8" ry="6.77" transform="matrix(.3892-.9211 0.9211 0.3892 328.894713 374.739581)" fill="#a9a9a9"/><path d="M325.62,381.68c-3.78-1.6-5.57-5.95-3.98-9.7s5.95-5.5,9.73-3.91c3.78,1.6,5.57,5.95,3.98,9.7-1.59,3.76-5.95,5.51-9.73,3.91Zm5.29-12.52c-3.09-1.31-6.69.19-8.03,3.35-1.33,3.15.1,6.78,3.19,8.09s6.69-.19,8.03-3.35c1.34-3.15-.1-6.78-3.19-8.09Z" fill="#2b190e"/><g><rect width="22.84" height="4.35" rx="0" ry="0" transform="translate(316.56 360.5)" fill="url(#e6OP4hnGjpA350-fill)"/><path d="M339.78,365.23h-23.59v-5.1h23.59v5.1Zm-22.84-.75h22.09v-3.6h-22.09v3.6Z"/></g><g><rect width="22.84" height="4.35" rx="0" ry="0" transform="translate(316.56 384.74)" fill="url(#e6OP4hnGjpA353-fill)"/><path d="M339.78,389.47h-23.59v-5.1h23.59v5.1Zm-22.84-.75h22.09v-3.6h-22.09v3.6Z"/></g><circle r="0.93" transform="translate(337 362.67)" fill="url(#e6OP4hnGjpA355-fill)"/><circle r="0.93" transform="translate(318.97 362.67)" fill="url(#e6OP4hnGjpA356-fill)"/><circle r="0.93" transform="translate(328.29 362.67)" fill="url(#e6OP4hnGjpA357-fill)"/><circle r="0.93" transform="translate(337 386.92)" fill="url(#e6OP4hnGjpA358-fill)"/><circle r="0.93" transform="translate(318.97 386.92)" fill="url(#e6OP4hnGjpA359-fill)"/><circle r="0.93" transform="translate(328.29 386.92)" fill="url(#e6OP4hnGjpA360-fill)"/></g></g><path d="M288.87,382.53l14.76-1.91.5,1.86-15.26.05Z" fill="#050505"/></g>
        </svg>
      </div>
      <div class="headerAnimationLayer">
        <img src="../../assets/image/box_bcg_l1.png" alt="" class="layer1">
        <img src="../../assets/image/box_bcg_l2.png" alt="" class="layer2">
        <!--<img src="../../assets/image/box_bcg_layer.png" alt="" class="layer3">-->
      </div>
      <!--<audio src="/static/sound/HerosTheme.mp3" :autoplay="true1" :loop="true" />-->
    </div>
    <div class="toPlay">
      <div class="title">
        {{lg("how_to_play")}}
      </div>
      <div class="toPlaySteps">
        <div class="stepCard" v-for="(item, index) in steps" :key="index">
          <div class="header">
            <div class="stepTitle">{{lg(item.name)}}</div>
            <div class="step">
              <div class="stepNum">
                {{lg("step")}} {{ item.step }}
              </div>
            </div>
          </div>
          <div class="stepDesc">
            {{lg(item.desc)}}
          </div>
        </div>
      </div>
    </div>
    <div class="leaderboard">
      <div class="leaderboardTitle">
        {{lg("leaderboard")}}
      </div>
      <div class="boardSwitchBtn">
        <div :class="['boardBtn', selectLeaderboard === 'new_start' ? 'newStartSelected' : 'newStartBtn']"
             @click="switchLeaderboard('new_start')">
          {{lg("new_start")}}
        </div>
        <div :class="['boardBtn', selectLeaderboard === 'season' ? 'boardBtnSelected' : 'romanBtn']"
             @click="switchLeaderboard('season')">
          {{lg("season_champion")}}
        </div>
      </div>
      <div class="boardCards">
        <div class="boardCard" v-for="(item, index) in leaderboardData" :key="index">
          <div class="winnerNum">
            <img src="../../assets/image/gold.png" alt="" width="40" v-if="index === 0">
            <img src="../../assets/image/sliver.png" alt="" width="40" v-if="index === 1">
            <img src="../../assets/image/bronze.png" alt="" width="40" v-if="index === 2">
          </div>
          <div class="winnerInfo">
            <div class="winnerAvatar">
              <img :src="gods[item.avatar].url" alt="Zeus" width="120">
            </div>
            <div class="winnerName">
              {{item.nick_name.length > 10 ? hideMiddle(item.nick_name, 5, 2) : item.nick_name}} No.{{index + 1}}</div>
          </div>
          <div class="winnerAres">
            {{lg("win")}} {{item.reward}} ARES
          </div>
        </div>
      </div>
      <!--<div class="tips">-->
      <!--  * {{lg("leaderboard_tips")}}-->
      <!--</div>-->
    </div>
    <div class="aboutBox">
      <div class="aboutTable" v-if="selectLeaderboard === 'season'">
        <a-table :columns="columns" :data-source="championData" size="middle" :pagination="false"
                 :row-key="record => record.id" :scroll="{ x: screenWidth < 376 ? 800 : 0 }">
          <template slot="nickName" slot-scope="text, record, index">
            <div class="tableUsername">
              <div class="tableUserIndex">{{index + 4}}</div>
              <span>{{text}}</span>
            </div>
          </template>
        </a-table>
      </div>
      <div class="aboutBoxTitle">
        {{lg("about_trojan_war")}}
      </div>
      <div class="aboutDesc">
        {{lg("trojan_war")}}
      </div>
      <div class="winNow" @click="toWin">
          {{lg("win_now")}}!
      </div>
    </div>
    <div class="greekGods">
      <div class="borderDecoration">
        <img src="../../assets/image/border_decoration.png" alt="">
      </div>
      <div class="greekGodsTitle">
        {{lg("greek_gods")}}
      </div>
      <div class="greekGodsContent">
        <el-carousel :interval="4000" height="260px" arrow="always" :type="screenWidth < 500 ? '' : 'card'">
          <el-carousel-item v-for="item in gods" :key="item.name">
            <div class="greekGodCard">
              <div class="greekGodAvatar">
                <img :src="item.url" alt="">
              </div>
              <div class="greekGodCardInfo">
                <div class="greekGodCardName">{{lg(item.name)}}</div>
                <div class="greekGodCardDesc">{{lg(item.desc)}}</div>
                <div class="greekGodCardType">
                  <img :src="item.typeImg" alt="">
                  <span>{{lg(item.army)}}</span>
                </div>
              </div>
            </div>
          </el-carousel-item>
        </el-carousel>

      </div>
    </div>
    <div class="footer">
      Copyright © 2021. Ares Protocol All rights reserved.
    </div>
    <div class="media" >
      <a class="toggle bg-share">
        <!--<span class="fa fa-share-alt"></span>-->
        <img src="../../assets/image/share.png" alt="">
      </a>
      <ul class="dials">
        <li v-for="(item, index) in medias" :key="index">
          <a :href="item.link" target="_blank" rel="noreferrer noopener">
            <img :src="item.name" width="22" alt=""></a>
        </li>
      </ul>
    </div>
    <a-modal title="" :visible="modalShow" :footer="null" :closable="false"
             v-if="modalShow" :centered="true">
      <div class="modalContent">
        <div>
          {{lg("tikkets_tips")}}
        </div>
        <div class="modalBtns">
          <div class="modalBtn bottomBtn" @click="buyTickets">{{lg("buy")}} ARES</div>
          <div class="modalBtn bottomBtn" @click="cancel()">{{lg("cancel")}}</div>
        </div>
      </div>
    </a-modal>

    <a-modal title="" :visible="showShareModal" :footer="null" :closable="false"
             @cancel="showShareModal = !showShareModal" v-if="showShareModal" width="650"
             :centered="true" :maskClosable="true" :destroyOnClose="true">
      <div class="shareWrapper">
        <div class="shareTitle">
          Share to Earn
          <img src="../../assets/image/coin.png"  alt=""/>
        </div>
        <div class="shareDesc">
          The Trojan Box is Officially Launched & Recruits Embassador for Advertising.
          Since today, you can share the Trojan Box in below social media, and submit your shared link to us to get rewards.
        </div>
        <div class="shareApp">
          Share in
          <div class="shareAppItem">
            <img src="../../assets/image/share/twitter.png" alt="">
            <div class="sharedIcon" v-if="todayShare.includes(3)">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
          <div class="shareAppItem">
            <img src="../../assets/image/share/gate.png" alt="">
            <div class="sharedIcon" v-if="todayShare.includes(1)">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
          <div class="shareAppItem">
            <img src="../../assets/image/share/weibo.png" alt="">
            <div class="sharedIcon" v-if="todayShare.includes(2)">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
          <div class="shareAppItem">
            <img src="../../assets/image/share/reddit.png" alt="">
            <div class="sharedIcon" v-if="todayShare.includes(4)">
              <i class="fa fa-check" aria-hidden="true"></i>
            </div>
          </div>
        </div>
        <div class="linkWrapper">
          <div class="linkTitle">Link</div>
          <a-input placeholder="Your link here" v-model="shareLink"/>

          <div class="postTitle" v-if="uploadState === false">Or Post image</div>
          <div class="postTitle" v-if="uploadState">Select media</div>
          <div class="postImageWrapper">
            <a-upload
                name="file"
                :multiple="false"
                :showUploadList="false"
                :before-upload="beforeUpload"
                class="upload"
                v-if="!uploadState"
            >
              <div class="upContent">
                <a-icon slot="prefix" type="file-image" />
                <span v-if="fileList.length < 1">Your post image</span>
                <span v-if="fileList.length > 0">{{fileList[0].name}}</span>
              </div>
            </a-upload>
            <div class="shareApp mediaChannel" v-if="uploadState">
              <div class="shareAppItem selectMedia" @click="selectMedia(3)">
                <img src="../../assets/image/share/twitter.png" alt="">
                <div class="sharedIcon" v-if="selectMediaIndex === 3 || todayShare.includes(3)">
                  <i class="fa fa-check" aria-hidden="true" v-if="!todayShare.includes(3)"></i>
                </div>
              </div>

              <div class="shareAppItem selectMedia" @click="selectMedia(1)">
                <img src="../../assets/image/share/gate.png" alt="">
                <div class="sharedIcon" v-if="selectMediaIndex === 1 || todayShare.includes(1)">
                  <i class="fa fa-check" aria-hidden="true" v-if="!todayShare.includes(1)"></i>
                </div>
              </div>
              <div class="shareAppItem selectMedia" @click="selectMedia(2)">
                <img src="../../assets/image/share/weibo.png" alt="">
                <div class="sharedIcon" v-if="selectMediaIndex === 2 || todayShare.includes(2)">
                  <i class="fa fa-check" aria-hidden="true" v-if="!todayShare.includes(2)"></i>
                </div>
              </div>
              <div class="shareAppItem selectMedia" @click="selectMedia(4)">
                <img src="../../assets/image/share/reddit.png" alt="">
                <div class="sharedIcon" v-if="selectMediaIndex === 4 || todayShare.includes(4)">
                  <i class="fa fa-check" aria-hidden="true" v-if="!todayShare.includes(4)"></i>
                </div>
              </div>

            </div>
            <div class="submitShare uploadBtn" v-if="isUploading">
              <a-spin tip="Uploading..." />
            </div>
            <div class="submitShare uploadBtn" @click="handleUpload" v-if="!uploadState && !isUploading">
              <a-icon type="upload" />
              Upload
            </div>
          </div>
        </div>
        <!--<div class="shareTips" v-if="todayShare.length > 0">-->
        <div class="shareTips">
          <!--Thank you! You have completed {{shareMedia}} sharing today and you will get ARES!-->
          Everyday you can share once for each channel and you will get ARES.
        </div>
        <div class="shareTips" v-if="checkLink">
          please check share link or select share media
        </div>
        <div class="submitShare" @click="submitShareLink">
          Submit
        </div>
      </div>
    </a-modal>

    <extract v-bind:extractShow.sync="extractShow" :nickName="nickName" @freshBonus="getMyBonus"
             :maxGameBalance="gameAccountBalance" :totalWinAres="totalWinAres"></extract>
  </div>
</template>

<script>
import Decimal from "decimal.js";
import data_main_list from "@/data/main_list.js";
import bus from "../../bus";
import {MediaChannel, ShareType} from "./contant";
const tokenAbi = require("@/data/token_abi.json");
import extract from "./comps/extract"

export default {
  name: "boxes",
  components: {extract},
  data() {
    return {
      medias: [
        {
          name: "/static/img/media/telegram.png",
          link: "https://t.me/AresProtocolLab"
        },
        {
          name: "/static/img/media/twitter.png",
          link: "https://twitter.com/AresProtocolLab"
        },
        {
          name: "/static/img/media/facebook.png",
          link: "https://www.facebook.com/aresprotocollab"
        },
        {
          name: "/static/img/media/discord.png",
          link: "https://discord.com/invite/cqduK4ZNaY"
        },
        {
          name: "/static/img/media/reddit.png",
          link: "https://www.reddit.com/r/AresProtocolLabs/"
        },
        {
          name: "/static/img/media/medium.png",
          link: "https://aresprotocollab.medium.com/"
        },
        {
          name: "/static/img/media/github.png",
          link: "https://github.com/aresprotocols"
        },
        {
          name: "/static/img/media/instagram.png",
          link: "https://www.instagram.com/aresprotocollab/"
        },
        {
          name: "/static/img/media/youtube.png",
          link: "https://www.youtube.com/channel/UCgwY4NwkoP8Hx1Fqmp_rJUw"
        }
      ],
      steps: [
        {
          name: "buy_tickets",
          step: " 1",
          desc: "buy_tickets_tips"
        },
        {
          name: "wait_for_draw",
          step: " 2",
          desc: "wait_for_draw_tips"
        },
        {
          name: "check_for_prize",
          step: " 3",
          desc: "check_for_prize_tips"
        }
      ],
      columns: [
        {
          dataIndex: 'id',
          className: "tableHide"
        },
        {
          title: 'User',
          dataIndex: 'nick_name',
          align: 'left',
          scopedSlots: { customRender: 'nickName' },
        },
        {
          title: 'Rewards',
          dataIndex: 'reward',
          align: 'center'
        },
        {
          title: 'Address',
          dataIndex: 'address',
          align: 'center'
        },
      ],
      tdata: [],
      lang_type: "",
      extractShow: false,
      todayShare: [],
      shareMedia: "",
      checkLink: false,
      leaderboardData: [],
      championData: [],
      gods: [
        {
          index: 0,
          name: "eris",
          slogan: "eris_desc",
          desc: "eris_type",
          army: "eris_army",
          url: "/static/img/gods/Eris.png",
          trs_url: "/static/img/gods_trs/Eris.png",
          typeImg: '/static/img/gods//ball1.png'
        },
        {
          index: 1,
          name: "aphrodite",
          slogan: "aphrodite_desc",
          desc: "aphrodite_type",
          army: "aphrodite_army",
          url: "/static/img/gods/Aphrodite.png",
          trs_url: "/static/img/gods_trs/Aphrodite.png",
          typeImg: '/static/img/gods//ball3.png'
        },
        {
          index: 2,
          name: "athena",
          slogan: "athena_desc",
          desc: "athena_type",
          army: "athena_army",
          url: "/static/img/gods/Athena.png",
          trs_url: "/static/img/gods_trs/Athena.png",
          typeImg: '/static/img/gods//ball2.png'
        },
        {
          index: 3,
          name: "hera",
          slogan: "hera_desc",
          desc: "hera_type",
          army: "hera_army",
          url: "/static/img/gods/Hera.png",
          trs_url: "/static/img/gods_trs/Hera.png",
          typeImg: '/static/img/gods//ball2.png'
        },
        {
          index: 4,
          name: "thetis",
          slogan: "thetis_desc",
          desc: "thetis_type",
          army: "thetis_army",
          url: "/static/img/gods/Thetis.png",
          trs_url: "/static/img/gods_trs/Thetis.png",
          typeImg: '/static/img/gods//ball2.png'
        },
        {
          index: 5,
          name: "zeus",
          slogan: "zeus_desc",
          desc: "zeus_type",
          army: "zeus_army",
          url: "/static/img/gods/Zeus.png",
          trs_url: "/static/img/gods_trs/Zeus.png",
          typeImg: '/static/img/gods//ball3.png'
        },
        {
          index: 6,
          name: "apollo",
          slogan: "apollo_desc",
          desc: "apollo_type",
          army: "apollo_army",
          url: "/static/img/gods/Apollo.png",
          trs_url: "/static/img/gods_trs/Apollo.png",
          typeImg: '/static/img/gods//ball3.png'
        },
        {
          index: 7,
          name: "ares",
          slogan: "ares_desc",
          desc: "ares_type",
          army: "ares_army",
          url: "/static/img/gods/Ares.png",
          trs_url: "/static/img/gods_trs/Ares.png",
          typeImg: '/static/img/gods//ball3.png'
        },
        {
          index: 8,
          name: "hermes",
          slogan: "hermes_desc",
          desc: "hermes_type",
          army: "hermes_army",
          url: "/static/img/gods/Hermes.png",
          trs_url: "/static/img/gods_trs/Hermes.png",
          typeImg: '/static/img/gods//ball2.png'
        }
      ],
      num_balance: 0,
      gameAccountBalance: 0,
      modalShow: false,
      showShareModal: false,
      winTotalNum: 0,
      selectLeaderboard: "new_start",
      screenWidth: 0,
      shareLink: "",
      selectAddress: "",
      prize: 500000,
      miniBalance: 100000,
      totalWinAres: 0,
      nickName: "",
      message: [],
      messageInterval: null,
      fileList: [],
      selectMediaIndex: 0,
      uploadState: false,
      isUploading: false
    };
  },
  computed: {
    account_default_address() {
      return this.$store.state.account.default_address;
    },
  },
  watch: {
    //检测到获取了地址
    account_default_address() {
      if (this.account_default_address !== "") {
        this.getDefaultAddress();
        this.getBalance();
      }
    },
  },
  methods: {
    async getBalance() {
      let v = this;
      const local_address = await v.action.getAddress();
      // const trc20_address = data_main_list[0].token_address;
      const trc20_address = "0xf10B05f0aB4D2Be938135191bAD6eb790D722db6";
      const decimals = data_main_list[0].token_decimals;

      let contract = new v.myWeb3.eth.Contract(tokenAbi, trc20_address);
      await contract.methods.balanceOf(local_address).call(function (error, result) {
        let balance = new Decimal(result).div(Math.pow(10, decimals)).toFixed();
        console.log("win balance result", balance);
        v.num_balance = balance;
      });
    },
    getUserProfile() {
      const token = this.$store.state.trojanBox.token;
      fetch("/api/v1/user/profile", {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.nickName = result.data.nick_name;
      })
    },
    init() {
      const token = this.$store.state.trojanBox.token;
      if(token) {
        this.getMyBonus();
        this.getUserProfile();
        this.getMessage();
        return;
      }
      const timestamp = parseInt(new Date().getTime() / 1000);
      let v = this;
      v.action.getAddress().then(address => {
        address = v.myWeb3.utils.toChecksumAddress(address);
        fetch(`/api/v1/nonce?address=${address}`, {
          method: "GET",
          mode: "cors",
        }).then(async (res) => {
          const nonceRes = await res.json();
          const LoginSignMsg = `
trojan-box wants you to sign in with your Ethereum account:
${address}
for login
Nonce: ${nonceRes.data}
Timestamp: ${timestamp}
`

          const msg = v.myWeb3.utils.keccak256(LoginSignMsg);
          v.myWeb3.eth.sign(msg, address).then(sign => {
            const signBytes = v.myWeb3.utils.hexToBytes(sign);
            signBytes[64] -= 27;
            sign = v.myWeb3.utils.bytesToHex(signBytes);
            const param = {
              address: address,
              nonce: nonceRes.data,
              signed_msg: sign,
              timestamp: timestamp.toString()
            }
            fetch("/api/v1/user/auth", {
              method: "POST",
              mode: "cors",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(param),
            }).then(async (res) => {
              if (res.ok) {
                const result = await res.json();
                bus.appvue.$store.commit("setToken", result.data);
                this.getUserProfile();
                this.getMyBonus();
                this.getMessage();
              } else {
                return Promise.reject("login error", res);
              }
            });
          });
        })
      });
    },
    getMyBonus() {
      const token = this.$store.state.trojanBox.token;
      fetch("/api/v1/bonus/my", {
        method: "GET",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        this.gameAccountBalance = result.data.balance;
        this.totalWinAres = result.data.total_win;
      })
    },
    getConfig() {
      fetch(`/api/v1/app/config`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.miniBalance = result.data.game.min_balance;
      });
    },
    buyTickets() {
      this.$router.push("/box/tikkets");
    },
    async toWin() {
      await this.getBalance();
      if (this.num_balance < this.miniBalance) {
        this.modalShow = true;
      } else {
        this.$router.push('/box/win');
      }
    },
    cancel() {
      this.modalShow = false;
    },
    getPrize() {
      fetch(`/api/v1/bonus_pool/info`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.prize = result.data.total;
      });
    },
    getParticipationNum() {
      fetch("/api/v1/stats/total", {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.winTotalNum = result.data.part_in_address;
      })
    },
    switchLeaderboard(type) {
      this.selectLeaderboard = type;
      if (type === 'new_start') {
        this.getLeaderboard(1);
      } else {
        this.getLeaderboard(2);
      }
    },
    getLeaderboard(type) {
      this.leaderboardData = [];
      fetch(`/api/v1/leaderboard?type=${type}`, {
        method: "GET",
        mode: "cors",
      }).then(async (res) => {
        const result = await res.json();
        this.leaderboardData = result.data;
        if  (this.leaderboardData.length > 3) {
          this.leaderboardData = this.leaderboardData.slice(0, 3);
          if (type === 2) {
            this.championData = result.data.slice(3);
          }
        }
      });
    },
    hideMiddle(str, frontLen, endLen) {
      let newStr = "";
      for (let i = 0; i < 2; i++) {
        newStr += "*";
      }
      return (
          str.substring(0, frontLen) + newStr + str.substring(str.length - endLen)
      );
    },
    async getDefaultAddress() {
      this.selectAddress = await this.action.getAddress();
    },
    setAppLang(str) {
      let v = this;
      if (str) {
        v.lang_type = str;
      }
      window.lang = v.lang_type;

      v.$store.commit("lang", v.lang_type);
    },
    showShare() {
      const token = this.$store.state.trojanBox.token;
      this.showShareModal = !this.showShareModal;
      let startTime = new Date(new Date().setHours(0, 0, 0, 1));
      let endTime = new Date(new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000);
      startTime = parseInt((startTime - 1) / 1000);
      endTime = parseInt((endTime - 1) / 1000);


      fetch(`/api/v1/share/my?page=0&type=2&beginTime=${startTime}&endTime=${endTime}`, {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
      }).then(async (res) => {
        const result = await res.json();
        const shares = [];
        let shareMedia = "";
        result.data.items.map(item => {
          item.apply_time = new Date(item.apply_time * 1000).toLocaleString();
          shares.push(item.channel);
          if (item.channel === MediaChannel.Twitter) {
            shareMedia += " Twitter";
          } else if (item.channel === MediaChannel.Gate) {
            shareMedia += " Gate";
          } else if (item.channel === MediaChannel.Webio) {
            shareMedia += " Webio";
          } else if (item.channel === MediaChannel.Reddit) {
            shareMedia += " Reddit";
          }
        });
        this.todayShare = shares;
        this.shareMedia = shareMedia;
      })
    },
    submitShareLink() {
      this.checkLink = false;
      const token = this.$store.state.trojanBox.token;
      let channelIndex = 0;
      if (this.shareLink.startsWith("https://www.reddit.com/")) {
        channelIndex = MediaChannel.Reddit;
      } else if (this.shareLink.includes("weibo.cn") || this.shareLink.includes("weibo.com")) {
        channelIndex = MediaChannel.Webio;
      } else if (this.shareLink.startsWith("https://twitter.com") || this.shareLink.startsWith("https://www.twitter.com")) {
        channelIndex = MediaChannel.Twitter;
      } else if (this.shareLink.startsWith("https://www.gate.io")) {
        channelIndex = MediaChannel.Gate;
      } else if (this.selectMediaIndex > 0) {
        channelIndex = this.selectMediaIndex;
      }

      if (channelIndex === 0) {
        this.checkLink = true;
        return;
      }

      const data = {
        link: this.shareLink,
        channel: channelIndex,
        share_type: ShareType.Common
      }
      fetch("/api/v1/share", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token
        },
        body: JSON.stringify(data),
      }).then(async (res) => {
        const result = await res.json();
        if (res.ok) {
          this.shareLink = "";
          this.uploadState = false;
          this.showShareModal = !this.showShareModal;
        } else {
          console.log(result.message)
        }
      })
    },
    getMessage() {
      const token = this.$store.state.trojanBox.token;

      if (!token) {
        return;
      }

      let language = window.lang;
      if (language === 'zh') {
        language = "zh_CN";
      }

      fetch("/api/v1/message/my?state=1", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
          lang: language
        },
      }).then(async (res) => {
        const result = await res.json();
        if (res.ok) {
          this.message = result.data.items;
        }
      })
    },
    readMessage(item) {
      const token = this.$store.state.trojanBox.token;

      const param = {
        id: item.id
      }
      fetch("/api/v1/message/read", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer " + token,
        },
        body: JSON.stringify(param),
      }).then(async (res) => {
        const result = await res.json();
        if (res.ok) {
          const newMessage = [];
          this.message.map(m => {
            if (item.id !== item.id) {
              newMessage.push(m);
            }
          });
          this.message = newMessage;
        }
      })
    },
    beforeUpload(file) {
      this.fileList = [file];
      return false;
    },
    selectMedia(index) {
      if (this.todayShare.includes(index))
      {
        return;
      } else {
        if (this.selectMediaIndex === index ) {
          this.selectMediaIndex = 0;
        } else {
          this.selectMediaIndex = index;
        }
      }
    },
    handleUpload() {
      if (this.fileList < 1)
      {
        return;
      }

      this.isUploading = true;
      const formData = new FormData();
      formData.append('file', this.fileList[0]);
      const token = this.$store.state.trojanBox.token;
      fetch("/api/v1/file/upload", {
        method: "POST",
        mode: "cors",
        headers: {
          "Authorization": "Bearer " + token,
        },
        body: formData
      }).then(async (res) =>
      {
        const result = await res.json();
        this.shareLink = result.data;
        this.uploadState = true;
        this.fileList = [];
        this.isUploading = false;
      }).catch(err => {
        this.isUploading = false;
        console.log("up load image err", err);
      });
    },
  },
  created() {
    this.screenWidth = window.innerWidth;
    this.lang_type = this.$store.state.app.lang;
  },
  mounted() {
    this.getConfig();
    // 监听事件
    this.action.listenMetaMask();
    this.getDefaultAddress();
    setTimeout(() => {
      this.getBalance();
    }, 500);
    this.getLeaderboard(1);
    this.getPrize();
    this.getParticipationNum();
    this.init();

    this.messageInterval = setInterval(() => {
      this.getMessage();
    }, 1000 * 60 * 5);

    /* eslint-disable */
    !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((t="undefined"!=typeof globalThis?globalThis:t||self).__SVGATOR_PLAYER__=t.__SVGATOR_PLAYER__||{},t.__SVGATOR_PLAYER__["5c7f360c"]=n())}(this,(function(){"use strict";function t(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function n(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?t(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n,r){return n&&i(t.prototype,n),r&&i(t,r),t}function u(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n,r){return(s=f()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&l(i,r.prototype),i}).apply(null,arguments)}function c(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t,n,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,r){var e=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=a(t)););return t}(t,n);if(e){var i=Object.getOwnPropertyDescriptor(e,n);return i.get?i.get.call(r):i.value}})(t,n,r||t)}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var g=d(Math.pow(10,-6));function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;if(Number.isInteger(t))return t;var r=Math.pow(10,n);return Math.round((+t+Number.EPSILON)*r)/r}function p(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return Math.abs(t-n)<r}var m=Math.PI/180;function b(t){return t}function w(t,n,r){var e=1-r;return 3*r*e*(t*e+n*r)+r*r*r}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t<0||t>1||r<0||r>1?null:p(t,n)&&p(r,e)?b:function(i){if(i<=0)return t>0?i*n/t:0===n&&r>0?i*e/r:0;if(i>=1)return r<1?1+(i-1)*(e-1)/(r-1):1===r&&t<1?1+(i-1)*(n-1)/(t-1):1;for(var o,u=0,a=1;u<a;){var l=w(t,r,o=(u+a)/2);if(p(i,l))break;l<i?u=o:a=o}return w(n,e,o)}}function x(){return 1}function k(t){return 1===t?1:0}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t){if(0===n)return k;if(1===n)return x}var r=1/t;return function(t){return t>=1?1:(t+=n*r)-t%r}}var _=Math.sin,O=Math.cos,j=Math.acos,M=Math.asin,P=Math.tan,E=Math.atan2,I=Math.PI/180,R=180/Math.PI,F=Math.sqrt,N=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;e(this,t),this.m=[n,r,i,o,u,a],this.i=null,this.w=null,this.s=null}return o(t,[{key:"determinant",get:function(){var t=this.m;return t[0]*t[3]-t[1]*t[2]}},{key:"isIdentity",get:function(){if(null===this.i){var t=this.m;this.i=1===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&0===t[4]&&0===t[5]}return this.i}},{key:"point",value:function(t,n){var r=this.m;return{x:r[0]*t+r[2]*n+r[4],y:r[1]*t+r[3]*n+r[5]}}},{key:"translateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t&&!n)return this;var r=this.m;return r[4]+=r[0]*t+r[2]*n,r[5]+=r[1]*t+r[3]*n,this.w=this.s=this.i=null,this}},{key:"rotateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t%=360){var n=_(t*=I),r=O(t),e=this.m,i=e[0],o=e[1];e[0]=i*r+e[2]*n,e[1]=o*r+e[3]*n,e[2]=e[2]*r-i*n,e[3]=e[3]*r-o*n,this.w=this.s=this.i=null}return this}},{key:"scaleSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1!==t||1!==n){var r=this.m;r[0]*=t,r[1]*=t,r[2]*=n,r[3]*=n,this.w=this.s=this.i=null}return this}},{key:"skewSelf",value:function(t,n){if(n%=360,(t%=360)||n){var r=this.m,e=r[0],i=r[1],o=r[2],u=r[3];t&&(t=P(t*I),r[2]+=e*t,r[3]+=i*t),n&&(n=P(n*I),r[0]+=o*n,r[1]+=u*n),this.w=this.s=this.i=null}return this}},{key:"resetSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=this.m;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=i,u[5]=o,this.w=this.s=this.i=null,this}},{key:"recomposeSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return this.isIdentity||this.resetSelf(),t&&(t.x||t.y)&&this.translateSelf(t.x,t.y),n&&this.rotateSelf(n),r&&(r.x&&this.skewSelf(r.x,0),r.y&&this.skewSelf(0,r.y)),!e||1===e.x&&1===e.y||this.scaleSelf(e.x,e.y),i&&(i.x||i.y)&&this.translateSelf(i.x,i.y),this}},{key:"decompose",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.m,e=r[0]*r[0]+r[1]*r[1],i=[[r[0],r[1]],[r[2],r[3]]],o=F(e);if(0===o)return{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:0,y:0},skew:{x:0,y:0},rotate:0};i[0][0]/=o,i[0][1]/=o;var u=r[0]*r[3]-r[1]*r[2]<0;u&&(o=-o);var a=i[0][0]*i[1][0]+i[0][1]*i[1][1];i[1][0]-=i[0][0]*a,i[1][1]-=i[0][1]*a;var l=F(i[1][0]*i[1][0]+i[1][1]*i[1][1]);if(0===l)return{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:d(o),y:0},skew:{x:0,y:0},rotate:0};i[1][0]/=l,i[1][1]/=l,a/=l;var f=0;return i[1][1]<0?(f=j(i[1][1])*R,i[0][1]<0&&(f=360-f)):f=M(i[0][1])*R,u&&(f=-f),a=E(a,F(i[0][0]*i[0][0]+i[0][1]*i[0][1]))*R,u&&(a=-a),{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:d(o),y:d(l)},skew:{x:d(a),y:0},rotate:d(f)}}},{key:"clone",value:function(){var t=this.m;return new this.constructor(t[0],t[1],t[2],t[3],t[4],t[5])}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";if(null===this.s){var n=this.m.map((function(t){return d(t)}));1===n[0]&&0===n[1]&&0===n[2]&&1===n[3]?this.s="translate("+n[4]+t+n[5]+")":this.s="matrix("+n.join(t)+")"}return this.s}}],[{key:"create",value:function(t){return t?Array.isArray(t)?s(this,v(t)):t instanceof this?t.clone():(new this).recomposeSelf(t.origin,t.rotate,t.skew,t.scale,t.translate):new this}}]),t}();function T(t,n,r){return t>=.5?r:n}function B(t,n,r){return 0===t||n===r?n:t*(r-n)+n}function q(t,n,r){var e=B(t,n,r);return e<=0?0:e}function L(t,n,r){var e=B(t,n,r);return e<=0?0:e>=1?1:e}function C(t,n,r){return 0===t?n:1===t?r:{x:B(t,n.x,r.x),y:B(t,n.y,r.y)}}function D(t,n,r){var e=function(t,n,r){return Math.round(B(t,n,r))}(t,n,r);return e<=0?0:e>=255?255:e}function z(t,n,r){return 0===t?n:1===t?r:{r:D(t,n.r,r.r),g:D(t,n.g,r.g),b:D(t,n.b,r.b),a:B(t,null==n.a?1:n.a,null==r.a?1:r.a)}}function V(t,n){for(var r=[],e=0;e<t;e++)r.push(n);return r}function G(t,n){if(--n<=0)return t;var r=(t=Object.assign([],t)).length;do{for(var e=0;e<r;e++)t.push(t[e])}while(--n>0);return t}var Y,$=function(){function t(n){e(this,t),this.list=n,this.length=n.length}return o(t,[{key:"setAttribute",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].setAttribute(t,n)}},{key:"removeAttribute",value:function(t){for(var n=this.list,r=0;r<this.length;r++)n[r].removeAttribute(t)}},{key:"style",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].style[t]=n}}]),t}(),U=/-./g,Q=function(t,n){return n.toUpperCase()};function H(t){return"function"==typeof t?t:T}function J(t){return t?"function"==typeof t?t:Array.isArray(t)?function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(!Array.isArray(t))return n;switch(t.length){case 1:return S(t[0])||n;case 2:return S(t[0],t[1])||n;case 4:return A(t[0],t[1],t[2],t[3])||n}return n}(t,null):function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;switch(t){case"linear":return b;case"steps":return S(n.steps||1,n.jump||0)||r;case"bezier":case"cubic-bezier":return A(n.x1||0,n.y1||0,n.x2||0,n.y2||0)||r}return r}(t.type,t.value,null):null}function Z(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.length-1;if(t<=n[0].t)return e?[0,0,n[0].v]:n[0].v;if(t>=n[i].t)return e?[i,1,n[i].v]:n[i].v;var o,u=n[0],a=null;for(o=1;o<=i;o++){if(!(t>n[o].t)){a=n[o];break}u=n[o]}return null==a?e?[i,1,n[i].v]:n[i].v:u.t===a.t?e?[o,1,a.v]:a.v:(t=(t-u.t)/(a.t-u.t),u.e&&(t=u.e(t)),e?[o,t,r(t,u.v,a.v)]:r(t,u.v,a.v))}function K(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t&&t.length?"function"!=typeof n?null:("function"!=typeof r&&(r=null),function(e){var i=Z(e,t,n);return null!=i&&r&&(i=r(i)),i}):null}function W(t,n){return t.t-n.t}function X(t,n,e,i,o){var u,a="@"===e[0],l="#"===e[0],f=Y[e],s=T;switch(a?(u=e.substr(1),e=u.replace(U,Q)):l&&(e=e.substr(1)),r(f)){case"function":if(s=f(i,o,Z,J,e,a,n,t),l)return s;break;case"string":s=K(i,H(f));break;case"object":if((s=K(i,H(f.i),f.f))&&"function"==typeof f.u)return f.u(n,s,e,a,t)}return s?function(t,n,r){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3])return t instanceof $?function(e){return t.style(n,r(e))}:function(e){return t.style[n]=r(e)};if(Array.isArray(n)){var e=n.length;return function(i){var o=r(i);if(null==o)for(var u=0;u<e;u++)t[u].removeAttribute(n);else for(var a=0;a<e;a++)t[a].setAttribute(n,o)}}return function(e){var i=r(e);null==i?t.removeAttribute(n):t.setAttribute(n,i)}}(n,e,s,a):null}function tt(t,n,e,i){if(!i||"object"!==r(i))return null;var o=null,u=null;return Array.isArray(i)?u=function(t){if(!t||!t.length)return null;for(var n=0;n<t.length;n++)t[n].e&&(t[n].e=J(t[n].e));return t.sort(W)}(i):(u=i.keys,o=i.data||null),u?X(t,n,e,u,o):null}function nt(t,n,r){if(!r)return null;var e=[];for(var i in r)if(r.hasOwnProperty(i)){var o=tt(t,n,i,r[i]);o&&e.push(o)}return e.length?e:null}function rt(t,n){if(!n.duration||n.duration<0)return null;var r=function(t,n){if(!n)return null;var r=[];if(Array.isArray(n))for(var e=n.length,i=0;i<e;i++){var o=n[i];if(2===o.length){var u=null;if("string"==typeof o[0])u=t.getElementById(o[0]);else if(Array.isArray(o[0])){u=[];for(var a=0;a<o[0].length;a++)if("string"==typeof o[0][a]){var l=t.getElementById(o[0][a]);l&&u.push(l)}u=u.length?1===u.length?u[0]:new $(u):null}if(u){var f=nt(t,u,o[1]);f&&(r=r.concat(f))}}}else for(var s in n)if(n.hasOwnProperty(s)){var c=t.getElementById(s);if(c){var h=nt(t,c,n[s]);h&&(r=r.concat(h))}}return r.length?r:null}(t,n.elements);return r?function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=t.length,a=e>0?n:0;i&&r%2==0&&(a=n-a);var l=null;return function(f,s){var c=f%n,h=1+(f-c)/n;s*=e,i&&h%2==0&&(s=-s);var v=!1;if(h>r)c=a,v=!0,-1===o&&(c=e>0?0:n);else if(s<0&&(c=n-c),c===l)return!1;l=c;for(var y=0;y<u;y++)t[y](c);return v}}(r,n.duration,n.iterations||1/0,n.direction||1,!!n.alternate,n.fill||1):null}function et(t){return+("0x"+(t.replace(/[^0-9a-fA-F]+/g,"")||27))}function it(t,n,r){return!t||!r||n>t.length?t:t.substring(0,n)+it(t.substring(n+1),r,r)}function ot(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:27;return!t||t%n?t%n:ot(t/n,n)}function ut(t,n,r){if(t&&t.length){var e=et(r),i=et(n),o=ot(e)+5,u=it(t,ot(e,5),o);return u=u.replace(/\x7c$/g,"==").replace(/\x2f$/g,"="),u=function(t,n,r){var e=+("0x"+t.substring(0,4));t=t.substring(4);for(var i=n%e+r%27,o=[],u=0;u<t.length;u+=2)if("|"!==t[u]){var a=+("0x"+t[u]+t[u+1])-i;o.push(a)}else{var l=+("0x"+t.substring(u+1,u+1+4))-i;u+=3,o.push(l)}return String.fromCharCode.apply(String,o)}(u=(u=atob(u)).replace(/[\x41-\x5A]/g,""),i,e),u=JSON.parse(u)}}Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),Number.EPSILON||(Number.EPSILON=2220446049250313e-31);var at=function(){function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(this,t),this._id=0,this._running=!1,this._rollingBack=!1,this._animations=n,this.duration=r.duration,this.alternate=r.alternate,this.fill=r.fill,this.iterations=r.iterations,this.direction=i.direction||1,this.speed=i.speed||1,this.fps=i.fps||100,this.offset=i.offset||0,this.rollbackStartOffset=0}return o(t,[{key:"_rollback",value:function(){var t=this,n=1/0,r=null;this.rollbackStartOffset=this.offset,this._rollingBack||(this._rollingBack=!0,this._running=!0);this._id=window.requestAnimationFrame((function e(i){if(t._rollingBack){null==r&&(r=i);var o=i-r,u=t.rollbackStartOffset-o,a=Math.round(u*t.speed);if(a>t.duration&&n!=1/0){var l=!!t.alternate&&a/t.duration%2>1,f=a%t.duration;a=(f+=l?t.duration:0)||t.duration}var s=t.fps?1e3/t.fps:0,c=Math.max(0,a);if(c<n-s){t.offset=c,n=c;for(var h=t._animations,v=h.length,y=0;y<v;y++)h[y](c,t.direction)}var g=!1;if(t.iterations>0&&-1===t.fill){var d=t.iterations*t.duration,p=d==a;a=p?0:a,t.offset=p?0:t.offset,g=a>d}a>0&&t.offset>=a&&!g?t._id=window.requestAnimationFrame(e):t.stop()}}))}},{key:"_start",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=-1/0,e=null,i={},o=function o(u){t._running=!0,null==e&&(e=u);var a=Math.round((u-e+n)*t.speed),l=t.fps?1e3/t.fps:0;if(a>r+l&&!t._rollingBack){t.offset=a,r=a;for(var f=t._animations,s=f.length,c=0,h=0;h<s;h++)i[h]?c++:(i[h]=f[h](a,t.direction),i[h]&&c++);if(c===s)return void t._stop()}t._id=window.requestAnimationFrame(o)};this._id=window.requestAnimationFrame(o)}},{key:"_stop",value:function(){this._id&&window.cancelAnimationFrame(this._id),this._running=!1,this._rollingBack=!1}},{key:"play",value:function(){!this._rollingBack&&this._running||(this._rollingBack=!1,this.rollbackStartOffset>this.duration&&(this.offset=this.rollbackStartOffset-(this.rollbackStartOffset-this.offset)%this.duration,this.rollbackStartOffset=0),this._start(this.offset))}},{key:"stop",value:function(){this._stop(),this.offset=0,this.rollbackStartOffset=0;var t=this.direction,n=this._animations;window.requestAnimationFrame((function(){for(var r=0;r<n.length;r++)n[r](0,t)}))}},{key:"reachedToEnd",value:function(){return this.iterations>0&&this.offset>=this.iterations*this.duration}},{key:"restart",value:function(){this._stop(),this.offset=0,this._start()}},{key:"pause",value:function(){this._stop()}},{key:"reverse",value:function(){this.direction=-this.direction}}],[{key:"build",value:function(r,e){return delete r.animationSettings,r.options=ut(r.options,r.root,"5c7f360c"),r.animations.map((function(t){var e=ut(t.s,r.root,"5c7f360c");for(var i in delete t.s,r.animationSettings||(r.animationSettings=n({},e)),e)e.hasOwnProperty(i)&&(t[i]=e[i])})),(r=function(t,n){if(Y=n,!t||!t.root||!Array.isArray(t.animations))return null;for(var r=document.getElementsByTagName("svg"),e=!1,i=0;i<r.length;i++)if(r[i].id===t.root&&!r[i].svgatorAnimation){(e=r[i]).svgatorAnimation=!0;break}if(!e)return null;var o=t.animations.map((function(t){return rt(e,t)})).filter((function(t){return!!t}));return o.length?{element:e,animations:o,animationSettings:t.animationSettings,options:t.options||void 0}:null}(r,e))?{el:r.element,options:r.options||{},player:new t(r.animations,r.animationSettings,r.options)}:null}},{key:"push",value:function(t){return this.build(t)}},{key:"init",value:function(){var t=this,n=window.__SVGATOR_PLAYER__&&window.__SVGATOR_PLAYER__["5c7f360c"];Array.isArray(n)&&n.splice(0).forEach((function(n){return t.build(n)}))}}]),t}();function lt(t){return d(t)+""}function ft(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length?t.map(lt).join(n):""}function st(t){if(!t)return"transparent";if(null==t.a||t.a>=1){var n=function(t){return 1===(t=parseInt(t).toString(16)).length?"0"+t:t},r=function(t){return t.charAt(0)===t.charAt(1)},e=n(t.r),i=n(t.g),o=n(t.b);return r(e)&&r(i)&&r(o)&&(e=e.charAt(0),i=i.charAt(0),o=o.charAt(0)),"#"+e+i+o}return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function ct(t){return t?"url(#"+t+")":"none"}!function(){for(var t=0,n=["ms","moz","webkit","o"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var r=Date.now(),e=Math.max(0,16-(r-t)),i=window.setTimeout((function(){n(r+e)}),e);return t=r+e,i},window.cancelAnimationFrame=window.clearTimeout)}();var ht={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{x:q(t,n.x,r.x),y:q(t,n.y,r.y)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("rx",lt(e.x)),t.setAttribute("ry",lt(e.y))}}},vt={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{width:q(t,n.width,r.width),height:q(t,n.height,r.height)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("width",lt(e.width)),t.setAttribute("height",lt(e.height))}}};Object.freeze({M:2,L:2,Z:0,H:1,V:1,C:6,Q:4,T:2,S:4,A:7});var yt={},gt=null;function dt(t){var n=function(){if(gt)return gt;if("object"!==("undefined"==typeof document?"undefined":r(document))||!document.createElementNS)return{};var t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t&&t.style?(t.style.position="absolute",t.style.opacity="0.01",t.style.zIndex="-9999",t.style.left="-9999px",t.style.width="1px",t.style.height="1px",gt={svg:t}):{}}().svg;if(!n)return function(t){return null};var e=document.createElementNS(n.namespaceURI,"path");e.setAttributeNS(null,"d",t),e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","none"),n.appendChild(e);var i=e.getTotalLength();return function(t){var n=e.getPointAtLength(i*t);return{x:n.x,y:n.y}}}function pt(t){return yt[t]?yt[t]:yt[t]=dt(t)}function mt(t,n,r,e){if(!t||!e)return!1;var i=["M",t.x,t.y];if(n&&r&&(i.push("C"),i.push(n.x),i.push(n.y),i.push(r.x),i.push(r.y)),n?!r:r){var o=n||r;i.push("Q"),i.push(o.x),i.push(o.y)}return n||r||i.push("L"),i.push(e.x),i.push(e.y),i.join(" ")}function bt(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=mt(t,n,r,e),u=pt(o);try{return u(i)}catch(t){return null}}function wt(t,n,r){return t+(n-t)*r}function At(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={x:wt(t.x,n.x,r),y:wt(t.y,n.y,r)};return e&&(i.a=xt(t,n)),i}function xt(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function kt(t,n,r,e){var i=1-e;return i*i*t+2*i*e*n+e*e*r}function St(t,n,r,e){return 2*(1-e)*(n-t)+2*e*(r-n)}function _t(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=bt(t,n,null,r,e);return o||(o={x:kt(t.x,n.x,r.x,e),y:kt(t.y,n.y,r.y,e)}),i&&(o.a=Ot(t,n,r,e)),o}function Ot(t,n,r,e){return Math.atan2(St(t.y,n.y,r.y,e),St(t.x,n.x,r.x,e))}function jt(t,n,r,e,i){var o=i*i;return i*o*(e-t+3*(n-r))+3*o*(t+r-2*n)+3*i*(n-t)+t}function Mt(t,n,r,e,i){var o=1-i;return 3*(o*o*(n-t)+2*o*i*(r-n)+i*i*(e-r))}function Pt(t,n,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=bt(t,n,r,e,i);return u||(u={x:jt(t.x,n.x,r.x,e.x,i),y:jt(t.y,n.y,r.y,e.y,i)}),o&&(u.a=Et(t,n,r,e,i)),u}function Et(t,n,r,e,i){return Math.atan2(Mt(t.y,n.y,r.y,e.y,i),Mt(t.x,n.x,r.x,e.x,i))}function It(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Ft(n)){if(Nt(r))return _t(n,r.start,r,t,e)}else if(Ft(r)){if(n.end)return _t(n,n.end,r,t,e)}else{if(n.end)return r.start?Pt(n,n.end,r.start,r,t,e):_t(n,n.end,r,t,e);if(r.start)return _t(n,r.start,r,t,e)}return At(n,r,t,e)}function Rt(t,n,r){var e=It(t,n,r,!0);return e.a=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t+Math.PI:t}(e.a)/m,e}function Ft(t){return!t.type||"corner"===t.type}function Nt(t){return null!=t.start&&!Ft(t)}var Tt=new N;var Bt={f:lt,i:B},qt={f:lt,i:L};function Lt(t,n,r){return t.map((function(t){return function(t,n,r){var e=t.v;if(!e||"g"!==e.t||e.s||!e.v||!e.r)return t;var i=r.getElementById(e.r),o=i&&i.querySelectorAll("stop")||[];return e.s=e.v.map((function(t,n){var r=o[n]&&o[n].getAttribute("offset");return{c:t,o:r=d(parseInt(r)/100)}})),delete e.v,t}(t,0,r)}))}var Ct={gt:"gradientTransform",c:{x:"cx",y:"cy"},rd:"r",f:{x:"x1",y:"y1"},to:{x:"x2",y:"y2"}};function Dt(t,n,e,i,o,u,a,l){return Lt(t,0,l),n=function(t,n,r){for(var e,i,o,u=t.length-1,a={},l=0;l<=u;l++)(e=t[l]).e&&(e.e=n(e.e)),e.v&&"g"===(i=e.v).t&&i.r&&(o=r.getElementById(i.r))&&(a[i.r]={e:o,s:o.querySelectorAll("stop")});return a}(t,i,l),function(i){var o=e(i,t,zt);if(!o)return"none";if("c"===o.t)return st(o.v);if("g"===o.t){if(!n[o.r])return ct(o.r);var u=n[o.r];return function(t,n){for(var r=t.s,e=r.length;e<n.length;e++){var i=r[r.length-1].cloneNode();i.id=Yt(i.id),t.e.appendChild(i),r=t.s=t.e.querySelectorAll("stop")}for(var o=0,u=r.length,a=n.length-1;o<u;o++)r[o].setAttribute("stop-color",st(n[Math.min(o,a)].c)),r[o].setAttribute("offset",n[Math.min(o,a)].o)}(u,o.s),Object.keys(Ct).forEach((function(t){if(void 0!==o[t])if("object"!==r(Ct[t])){var n,e="gt"===t?(n=o[t],Array.isArray(n)?"matrix("+n.join(" ")+")":""):o[t],i=Ct[t];u.e.setAttribute(i,e)}else Object.keys(Ct[t]).forEach((function(n){if(void 0!==o[t][n]){var r=o[t][n],e=Ct[t][n];u.e.setAttribute(e,r)}}))})),ct(o.r)}return"none"}}function zt(t,r,e){if(0===t)return r;if(1===t)return e;if(r&&e){var i=r.t;if(i===e.t)switch(r.t){case"c":return{t:i,v:z(t,r.v,e.v)};case"g":if(r.r===e.r){var o={t:i,s:Vt(t,r.s,e.s),r:r.r};return r.gt&&e.gt&&(o.gt=function(t,n,r){var e=n.length;if(e!==r.length)return T(t,n,r);for(var i=new Array(e),o=0;o<e;o++)i[o]=B(t,n[o],r[o]);return i}(t,r.gt,e.gt)),r.c?(o.c=C(t,r.c,e.c),o.rd=q(t,r.rd,e.rd)):r.f&&(o.f=C(t,r.f,e.f),o.to=C(t,r.to,e.to)),o}}if("c"===r.t&&"g"===e.t||"c"===e.t&&"g"===r.t){var u="c"===r.t?r:e,a="g"===r.t?n({},r):n({},e),l=a.s.map((function(t){return{c:u.v,o:t.o}}));return a.s="c"===r.t?Vt(t,l,a.s):Vt(t,a.s,l),a}}return T(t,r,e)}function Vt(t,n,r){if(n.length===r.length)return n.map((function(n,e){return Gt(t,n,r[e])}));for(var e=Math.max(n.length,r.length),i=[],o=0;o<e;o++){var u=Gt(t,n[Math.min(o,n.length-1)],r[Math.min(o,r.length-1)]);i.push(u)}return i}function Gt(t,n,r){return{o:L(t,n.o,r.o||0),c:z(t,n.c,r.c||{})}}function Yt(t){return t.replace(/-fill-([0-9]+)$/,(function(t,n){return"-fill-"+(+n+1)}))}var $t={fill:Dt,"fill-opacity":qt,stroke:Dt,"stroke-opacity":qt,"stroke-width":Bt,"stroke-dashoffset":{f:lt,i:B},"stroke-dasharray":{f:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length>0&&(t=t.map((function(t){return d(t,4)}))),ft(t,n)},i:function(t,n,r){var e,i,o,u=n.length,a=r.length;if(u!==a)if(0===u)n=V(u=a,0);else if(0===a)a=u,r=V(u,0);else{var l=(o=(e=u)*(i=a)/function(t,n){for(var r;n;)r=n,n=t%n,t=r;return t||1}(e,i))<0?-o:o;n=G(n,Math.floor(l/u)),r=G(r,Math.floor(l/a)),u=a=l}for(var f=[],s=0;s<u;s++)f.push(d(q(t,n[s],r[s])));return f}},opacity:qt,transform:function(t,n,e,i){if(!(t=function(t,n){if(!t||"object"!==r(t))return null;var e=!1;for(var i in t)t.hasOwnProperty(i)&&(t[i]&&t[i].length?(t[i].forEach((function(t){t.e&&(t.e=n(t.e))})),e=!0):delete t[i]);return e?t:null}(t,i)))return null;var o=function(r,i,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t[r]?e(i,t[r],o):n&&n[r]?n[r]:u};return n&&n.a&&t.o?function(n){var r=e(n,t.o,Rt);return Tt.recomposeSelf(r,o("r",n,B,0)+r.a,o("k",n,C),o("s",n,C),o("t",n,C)).toString()}:function(t){return Tt.recomposeSelf(o("o",t,It,null),o("r",t,B,0),o("k",t,C),o("s",t,C),o("t",t,C)).toString()}},r:Bt,"#size":vt,"#radius":ht,_:function(t,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)this[t[r]]=n;else this[t]=n}},Ut=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(u,t);var n,r,i=(n=u,r=f(),function(){var t,e=a(n);if(r){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return c(this,t)});function u(){return e(this,u),i.apply(this,arguments)}return o(u,null,[{key:"build",value:function(t){var n=h(a(u),"build",this).call(this,t,$t);if(!n)return null;n.el,n.options,function(t,n,r){t.play()}(n.player)}}]),u}(at);return Ut.init(),Ut}));(function(s,i,o,w){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('5c7f360c',{"root":"eCVXhK8UueL1","animations":[{"elements":{"eCVXhK8UueL3":{"transform":{"data":{"o":{"x":273.200035,"y":263.945381,"type":"corner"},"t":{"x":-273.200035,"y":-263.945381}},"keys":{"r":[{"t":0,"v":0},{"t":2500,"v":0.730959},{"t":5000,"v":0.730959}]}}},"eCVXhK8UueL6":{"transform":{"data":{"o":{"x":262.140013,"y":212.234993,"type":"corner"},"t":{"x":-262.140013,"y":-212.234993}},"keys":{"s":[{"t":0,"v":{"x":0.951895,"y":0.96151}},{"t":1600,"v":{"x":1,"y":1}},{"t":3300,"v":{"x":0.951895,"y":0.96151}},{"t":5000,"v":{"x":1,"y":1}}]}}},"eCVXhK8UueL207":{"transform":{"data":{"t":{"x":-249.071899,"y":-237.564186}},"keys":{"o":[{"t":0,"v":{"x":250.071899,"y":229.564186,"type":"corner"}},{"t":2500,"v":{"x":249.071899,"y":237.564186,"type":"corner"}},{"t":5000,"v":{"x":249.071899,"y":237.564186,"type":"corner"}}]}}},"eCVXhK8UueL399":{"transform":{"data":{"t":{"x":-262.769669,"y":-234.496117}},"keys":{"o":[{"t":0,"v":{"x":262.769669,"y":217.496117,"type":"corner"}},{"t":2500,"v":{"x":262.769669,"y":234.496117,"type":"corner"}},{"t":5000,"v":{"x":262.769669,"y":234.496117,"type":"corner"}}]}}},"eCVXhK8UueL450":{"transform":{"data":{"t":{"x":-249.216972,"y":-184.700005}},"keys":{"o":[{"t":0,"v":{"x":249.216972,"y":156.700005,"type":"corner"}},{"t":2500,"v":{"x":249.216972,"y":199.700005,"type":"corner"}},{"t":5000,"v":{"x":249.216972,"y":199.700005,"type":"corner"}}],"r":[{"t":0,"v":39.320038},{"t":2500,"v":0}]}}},"eCVXhK8UueL496":{"transform":{"data":{"t":{"x":-243.795006,"y":-229.543472}},"keys":{"o":[{"t":0,"v":{"x":240.795006,"y":207.543472,"type":"corner"}},{"t":2500,"v":{"x":243.795006,"y":229.543472,"type":"corner"}},{"t":5000,"v":{"x":243.795006,"y":229.543472,"type":"corner"}}]}}},"eCVXhK8UueL544":{"transform":{"data":{"t":{"x":-258.102013,"y":-220.585747}},"keys":{"o":[{"t":0,"v":{"x":258.102013,"y":196.585747,"type":"corner"}},{"t":2500,"v":{"x":258.102013,"y":220.585747,"type":"corner"}},{"t":5000,"v":{"x":258.102013,"y":220.585747,"type":"corner"}}],"r":[{"t":0,"v":-23.326438},{"t":2500,"v":0}]}}},"eCVXhK8UueL592":{"transform":{"data":{"t":{"x":-274.147125,"y":-203.793175}},"keys":{"o":[{"t":0,"v":{"x":275.070015,"y":166.793175,"type":"corner"}},{"t":2500,"v":{"x":273.070015,"y":203.793175,"type":"corner"}},{"t":5000,"v":{"x":273.070015,"y":203.793175,"type":"corner"}}],"r":[{"t":0,"v":-43.618671},{"t":2500,"v":0}]}}},"eCVXhK8UueL631":{"transform":{"data":{"t":{"x":-281.816025,"y":-221.985229}},"keys":{"o":[{"t":0,"v":{"x":281.816025,"y":203.985229,"type":"corner"}},{"t":2500,"v":{"x":281.816025,"y":221.985229,"type":"corner"}},{"t":5000,"v":{"x":281.816025,"y":221.985229,"type":"corner"}}]}}},"eCVXhK8UueL679":{"transform":{"data":{"t":{"x":-298.194778,"y":-214.74501}},"keys":{"o":[{"t":0,"v":{"x":298.194778,"y":208.74501,"type":"corner"}},{"t":2500,"v":{"x":298.194778,"y":214.74501,"type":"corner"}},{"t":5000,"v":{"x":298.194778,"y":214.74501,"type":"corner"}}]}}},"eCVXhK8UueL727":{"transform":{"data":{"t":{"x":-233.779995,"y":-240.195011}},"keys":{"o":[{"t":0,"v":{"x":236.705002,"y":238.805016,"type":"corner"}},{"t":2500,"v":{"x":235.705002,"y":241.805016,"type":"corner"}},{"t":5000,"v":{"x":235.705002,"y":241.805016,"type":"corner"}}]}}},"eCVXhK8UueL775":{"transform":{"data":{"t":{"x":-276.005402,"y":-235.883911}},"keys":{"o":[{"t":0,"v":{"x":276.005402,"y":230.883911,"type":"corner"}},{"t":2500,"v":{"x":276.005402,"y":235.883911,"type":"corner"}},{"t":5000,"v":{"x":276.005402,"y":235.883911,"type":"corner"}}]}}}},"s":"MIDA1NGQwNzdiOWNhYzCdiNmM5YmVjNGMzNzdHGOGY4Njg1ODU4NTg1HODE3N2I5QWJlYzdiYBWI4YzliZWM0RWMzNzKc4Zjg2ODE3N2JlYzlIiYVJjN2I2YzliZWM0MYzNjODc3OGY4NTgxNXzdiYmJlYzFjMTc3OGSZYODY4MUE3N2I2YzFTjOWJhYzdjM2I2YzliYYTc3OGZiYmI2YzFjOSGJhODFGNzdjOGM1YmGFiYWI5WTc3OGY4NkNDkMg|"}],"options":"MVDAxMDg4MmY4MDgxTDEZlN2ZCODEyZjQ3MmYV3OTdjSzZlNzEyZjhhL"},'__SVGATOR_PLAYER__',window)

    !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((t="undefined"!=typeof globalThis?globalThis:t||self).__SVGATOR_PLAYER__=t.__SVGATOR_PLAYER__||{},t.__SVGATOR_PLAYER__["5c7f360c"]=n())}(this,(function(){"use strict";function t(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function n(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?t(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n,r){return n&&i(t.prototype,n),r&&i(t,r),t}function u(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n,r){return(s=f()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&l(i,r.prototype),i}).apply(null,arguments)}function c(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t,n,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,r){var e=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=a(t)););return t}(t,n);if(e){var i=Object.getOwnPropertyDescriptor(e,n);return i.get?i.get.call(r):i.value}})(t,n,r||t)}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}var g=d(Math.pow(10,-6));function d(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;if(Number.isInteger(t))return t;var r=Math.pow(10,n);return Math.round((+t+Number.EPSILON)*r)/r}function p(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return Math.abs(t-n)<r}var m=Math.PI/180;function b(t){return t}function w(t,n,r){var e=1-r;return 3*r*e*(t*e+n*r)+r*r*r}function A(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t<0||t>1||r<0||r>1?null:p(t,n)&&p(r,e)?b:function(i){if(i<=0)return t>0?i*n/t:0===n&&r>0?i*e/r:0;if(i>=1)return r<1?1+(i-1)*(e-1)/(r-1):1===r&&t<1?1+(i-1)*(n-1)/(t-1):1;for(var o,u=0,a=1;u<a;){var l=w(t,r,o=(u+a)/2);if(p(i,l))break;l<i?u=o:a=o}return w(n,e,o)}}function x(){return 1}function k(t){return 1===t?1:0}function S(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t){if(0===n)return k;if(1===n)return x}var r=1/t;return function(t){return t>=1?1:(t+=n*r)-t%r}}var _=Math.sin,O=Math.cos,j=Math.acos,M=Math.asin,P=Math.tan,E=Math.atan2,I=Math.PI/180,R=180/Math.PI,F=Math.sqrt,N=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;e(this,t),this.m=[n,r,i,o,u,a],this.i=null,this.w=null,this.s=null}return o(t,[{key:"determinant",get:function(){var t=this.m;return t[0]*t[3]-t[1]*t[2]}},{key:"isIdentity",get:function(){if(null===this.i){var t=this.m;this.i=1===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&0===t[4]&&0===t[5]}return this.i}},{key:"point",value:function(t,n){var r=this.m;return{x:r[0]*t+r[2]*n+r[4],y:r[1]*t+r[3]*n+r[5]}}},{key:"translateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t&&!n)return this;var r=this.m;return r[4]+=r[0]*t+r[2]*n,r[5]+=r[1]*t+r[3]*n,this.w=this.s=this.i=null,this}},{key:"rotateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t%=360){var n=_(t*=I),r=O(t),e=this.m,i=e[0],o=e[1];e[0]=i*r+e[2]*n,e[1]=o*r+e[3]*n,e[2]=e[2]*r-i*n,e[3]=e[3]*r-o*n,this.w=this.s=this.i=null}return this}},{key:"scaleSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1!==t||1!==n){var r=this.m;r[0]*=t,r[1]*=t,r[2]*=n,r[3]*=n,this.w=this.s=this.i=null}return this}},{key:"skewSelf",value:function(t,n){if(n%=360,(t%=360)||n){var r=this.m,e=r[0],i=r[1],o=r[2],u=r[3];t&&(t=P(t*I),r[2]+=e*t,r[3]+=i*t),n&&(n=P(n*I),r[0]+=o*n,r[1]+=u*n),this.w=this.s=this.i=null}return this}},{key:"resetSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=this.m;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=i,u[5]=o,this.w=this.s=this.i=null,this}},{key:"recomposeSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return this.isIdentity||this.resetSelf(),t&&(t.x||t.y)&&this.translateSelf(t.x,t.y),n&&this.rotateSelf(n),r&&(r.x&&this.skewSelf(r.x,0),r.y&&this.skewSelf(0,r.y)),!e||1===e.x&&1===e.y||this.scaleSelf(e.x,e.y),i&&(i.x||i.y)&&this.translateSelf(i.x,i.y),this}},{key:"decompose",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.m,e=r[0]*r[0]+r[1]*r[1],i=[[r[0],r[1]],[r[2],r[3]]],o=F(e);if(0===o)return{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:0,y:0},skew:{x:0,y:0},rotate:0};i[0][0]/=o,i[0][1]/=o;var u=r[0]*r[3]-r[1]*r[2]<0;u&&(o=-o);var a=i[0][0]*i[1][0]+i[0][1]*i[1][1];i[1][0]-=i[0][0]*a,i[1][1]-=i[0][1]*a;var l=F(i[1][0]*i[1][0]+i[1][1]*i[1][1]);if(0===l)return{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:d(o),y:0},skew:{x:0,y:0},rotate:0};i[1][0]/=l,i[1][1]/=l,a/=l;var f=0;return i[1][1]<0?(f=j(i[1][1])*R,i[0][1]<0&&(f=360-f)):f=M(i[0][1])*R,u&&(f=-f),a=E(a,F(i[0][0]*i[0][0]+i[0][1]*i[0][1]))*R,u&&(a=-a),{origin:{x:d(r[4]),y:d(r[5])},translate:{x:d(t),y:d(n)},scale:{x:d(o),y:d(l)},skew:{x:d(a),y:0},rotate:d(f)}}},{key:"clone",value:function(){var t=this.m;return new this.constructor(t[0],t[1],t[2],t[3],t[4],t[5])}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";if(null===this.s){var n=this.m.map((function(t){return d(t)}));1===n[0]&&0===n[1]&&0===n[2]&&1===n[3]?this.s="translate("+n[4]+t+n[5]+")":this.s="matrix("+n.join(t)+")"}return this.s}}],[{key:"create",value:function(t){return t?Array.isArray(t)?s(this,v(t)):t instanceof this?t.clone():(new this).recomposeSelf(t.origin,t.rotate,t.skew,t.scale,t.translate):new this}}]),t}();function T(t,n,r){return t>=.5?r:n}function B(t,n,r){return 0===t||n===r?n:t*(r-n)+n}function q(t,n,r){var e=B(t,n,r);return e<=0?0:e}function L(t,n,r){var e=B(t,n,r);return e<=0?0:e>=1?1:e}function C(t,n,r){return 0===t?n:1===t?r:{x:B(t,n.x,r.x),y:B(t,n.y,r.y)}}function D(t,n,r){var e=function(t,n,r){return Math.round(B(t,n,r))}(t,n,r);return e<=0?0:e>=255?255:e}function z(t,n,r){return 0===t?n:1===t?r:{r:D(t,n.r,r.r),g:D(t,n.g,r.g),b:D(t,n.b,r.b),a:B(t,null==n.a?1:n.a,null==r.a?1:r.a)}}function V(t,n){for(var r=[],e=0;e<t;e++)r.push(n);return r}function G(t,n){if(--n<=0)return t;var r=(t=Object.assign([],t)).length;do{for(var e=0;e<r;e++)t.push(t[e])}while(--n>0);return t}var Y,$=function(){function t(n){e(this,t),this.list=n,this.length=n.length}return o(t,[{key:"setAttribute",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].setAttribute(t,n)}},{key:"removeAttribute",value:function(t){for(var n=this.list,r=0;r<this.length;r++)n[r].removeAttribute(t)}},{key:"style",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].style[t]=n}}]),t}(),U=/-./g,Q=function(t,n){return n.toUpperCase()};function H(t){return"function"==typeof t?t:T}function J(t){return t?"function"==typeof t?t:Array.isArray(t)?function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(!Array.isArray(t))return n;switch(t.length){case 1:return S(t[0])||n;case 2:return S(t[0],t[1])||n;case 4:return A(t[0],t[1],t[2],t[3])||n}return n}(t,null):function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;switch(t){case"linear":return b;case"steps":return S(n.steps||1,n.jump||0)||r;case"bezier":case"cubic-bezier":return A(n.x1||0,n.y1||0,n.x2||0,n.y2||0)||r}return r}(t.type,t.value,null):null}function Z(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.length-1;if(t<=n[0].t)return e?[0,0,n[0].v]:n[0].v;if(t>=n[i].t)return e?[i,1,n[i].v]:n[i].v;var o,u=n[0],a=null;for(o=1;o<=i;o++){if(!(t>n[o].t)){a=n[o];break}u=n[o]}return null==a?e?[i,1,n[i].v]:n[i].v:u.t===a.t?e?[o,1,a.v]:a.v:(t=(t-u.t)/(a.t-u.t),u.e&&(t=u.e(t)),e?[o,t,r(t,u.v,a.v)]:r(t,u.v,a.v))}function K(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t&&t.length?"function"!=typeof n?null:("function"!=typeof r&&(r=null),function(e){var i=Z(e,t,n);return null!=i&&r&&(i=r(i)),i}):null}function W(t,n){return t.t-n.t}function X(t,n,e,i,o){var u,a="@"===e[0],l="#"===e[0],f=Y[e],s=T;switch(a?(u=e.substr(1),e=u.replace(U,Q)):l&&(e=e.substr(1)),r(f)){case"function":if(s=f(i,o,Z,J,e,a,n,t),l)return s;break;case"string":s=K(i,H(f));break;case"object":if((s=K(i,H(f.i),f.f))&&"function"==typeof f.u)return f.u(n,s,e,a,t)}return s?function(t,n,r){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3])return t instanceof $?function(e){return t.style(n,r(e))}:function(e){return t.style[n]=r(e)};if(Array.isArray(n)){var e=n.length;return function(i){var o=r(i);if(null==o)for(var u=0;u<e;u++)t[u].removeAttribute(n);else for(var a=0;a<e;a++)t[a].setAttribute(n,o)}}return function(e){var i=r(e);null==i?t.removeAttribute(n):t.setAttribute(n,i)}}(n,e,s,a):null}function tt(t,n,e,i){if(!i||"object"!==r(i))return null;var o=null,u=null;return Array.isArray(i)?u=function(t){if(!t||!t.length)return null;for(var n=0;n<t.length;n++)t[n].e&&(t[n].e=J(t[n].e));return t.sort(W)}(i):(u=i.keys,o=i.data||null),u?X(t,n,e,u,o):null}function nt(t,n,r){if(!r)return null;var e=[];for(var i in r)if(r.hasOwnProperty(i)){var o=tt(t,n,i,r[i]);o&&e.push(o)}return e.length?e:null}function rt(t,n){if(!n.duration||n.duration<0)return null;var r=function(t,n){if(!n)return null;var r=[];if(Array.isArray(n))for(var e=n.length,i=0;i<e;i++){var o=n[i];if(2===o.length){var u=null;if("string"==typeof o[0])u=t.getElementById(o[0]);else if(Array.isArray(o[0])){u=[];for(var a=0;a<o[0].length;a++)if("string"==typeof o[0][a]){var l=t.getElementById(o[0][a]);l&&u.push(l)}u=u.length?1===u.length?u[0]:new $(u):null}if(u){var f=nt(t,u,o[1]);f&&(r=r.concat(f))}}}else for(var s in n)if(n.hasOwnProperty(s)){var c=t.getElementById(s);if(c){var h=nt(t,c,n[s]);h&&(r=r.concat(h))}}return r.length?r:null}(t,n.elements);return r?function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=t.length,a=e>0?n:0;i&&r%2==0&&(a=n-a);var l=null;return function(f,s){var c=f%n,h=1+(f-c)/n;s*=e,i&&h%2==0&&(s=-s);var v=!1;if(h>r)c=a,v=!0,-1===o&&(c=e>0?0:n);else if(s<0&&(c=n-c),c===l)return!1;l=c;for(var y=0;y<u;y++)t[y](c);return v}}(r,n.duration,n.iterations||1/0,n.direction||1,!!n.alternate,n.fill||1):null}function et(t){return+("0x"+(t.replace(/[^0-9a-fA-F]+/g,"")||27))}function it(t,n,r){return!t||!r||n>t.length?t:t.substring(0,n)+it(t.substring(n+1),r,r)}function ot(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:27;return!t||t%n?t%n:ot(t/n,n)}function ut(t,n,r){if(t&&t.length){var e=et(r),i=et(n),o=ot(e)+5,u=it(t,ot(e,5),o);return u=u.replace(/\x7c$/g,"==").replace(/\x2f$/g,"="),u=function(t,n,r){var e=+("0x"+t.substring(0,4));t=t.substring(4);for(var i=n%e+r%27,o=[],u=0;u<t.length;u+=2)if("|"!==t[u]){var a=+("0x"+t[u]+t[u+1])-i;o.push(a)}else{var l=+("0x"+t.substring(u+1,u+1+4))-i;u+=3,o.push(l)}return String.fromCharCode.apply(String,o)}(u=(u=atob(u)).replace(/[\x41-\x5A]/g,""),i,e),u=JSON.parse(u)}}Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),Number.EPSILON||(Number.EPSILON=2220446049250313e-31);var at=function(){function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(this,t),this._id=0,this._running=!1,this._rollingBack=!1,this._animations=n,this.duration=r.duration,this.alternate=r.alternate,this.fill=r.fill,this.iterations=r.iterations,this.direction=i.direction||1,this.speed=i.speed||1,this.fps=i.fps||100,this.offset=i.offset||0,this.rollbackStartOffset=0}return o(t,[{key:"_rollback",value:function(){var t=this,n=1/0,r=null;this.rollbackStartOffset=this.offset,this._rollingBack||(this._rollingBack=!0,this._running=!0);this._id=window.requestAnimationFrame((function e(i){if(t._rollingBack){null==r&&(r=i);var o=i-r,u=t.rollbackStartOffset-o,a=Math.round(u*t.speed);if(a>t.duration&&n!=1/0){var l=!!t.alternate&&a/t.duration%2>1,f=a%t.duration;a=(f+=l?t.duration:0)||t.duration}var s=t.fps?1e3/t.fps:0,c=Math.max(0,a);if(c<n-s){t.offset=c,n=c;for(var h=t._animations,v=h.length,y=0;y<v;y++)h[y](c,t.direction)}var g=!1;if(t.iterations>0&&-1===t.fill){var d=t.iterations*t.duration,p=d==a;a=p?0:a,t.offset=p?0:t.offset,g=a>d}a>0&&t.offset>=a&&!g?t._id=window.requestAnimationFrame(e):t.stop()}}))}},{key:"_start",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=-1/0,e=null,i={},o=function o(u){t._running=!0,null==e&&(e=u);var a=Math.round((u-e+n)*t.speed),l=t.fps?1e3/t.fps:0;if(a>r+l&&!t._rollingBack){t.offset=a,r=a;for(var f=t._animations,s=f.length,c=0,h=0;h<s;h++)i[h]?c++:(i[h]=f[h](a,t.direction),i[h]&&c++);if(c===s)return void t._stop()}t._id=window.requestAnimationFrame(o)};this._id=window.requestAnimationFrame(o)}},{key:"_stop",value:function(){this._id&&window.cancelAnimationFrame(this._id),this._running=!1,this._rollingBack=!1}},{key:"play",value:function(){!this._rollingBack&&this._running||(this._rollingBack=!1,this.rollbackStartOffset>this.duration&&(this.offset=this.rollbackStartOffset-(this.rollbackStartOffset-this.offset)%this.duration,this.rollbackStartOffset=0),this._start(this.offset))}},{key:"stop",value:function(){this._stop(),this.offset=0,this.rollbackStartOffset=0;var t=this.direction,n=this._animations;window.requestAnimationFrame((function(){for(var r=0;r<n.length;r++)n[r](0,t)}))}},{key:"reachedToEnd",value:function(){return this.iterations>0&&this.offset>=this.iterations*this.duration}},{key:"restart",value:function(){this._stop(),this.offset=0,this._start()}},{key:"pause",value:function(){this._stop()}},{key:"reverse",value:function(){this.direction=-this.direction}}],[{key:"build",value:function(r,e){return delete r.animationSettings,r.options=ut(r.options,r.root,"5c7f360c"),r.animations.map((function(t){var e=ut(t.s,r.root,"5c7f360c");for(var i in delete t.s,r.animationSettings||(r.animationSettings=n({},e)),e)e.hasOwnProperty(i)&&(t[i]=e[i])})),(r=function(t,n){if(Y=n,!t||!t.root||!Array.isArray(t.animations))return null;for(var r=document.getElementsByTagName("svg"),e=!1,i=0;i<r.length;i++)if(r[i].id===t.root&&!r[i].svgatorAnimation){(e=r[i]).svgatorAnimation=!0;break}if(!e)return null;var o=t.animations.map((function(t){return rt(e,t)})).filter((function(t){return!!t}));return o.length?{element:e,animations:o,animationSettings:t.animationSettings,options:t.options||void 0}:null}(r,e))?{el:r.element,options:r.options||{},player:new t(r.animations,r.animationSettings,r.options)}:null}},{key:"push",value:function(t){return this.build(t)}},{key:"init",value:function(){var t=this,n=window.__SVGATOR_PLAYER__&&window.__SVGATOR_PLAYER__["5c7f360c"];Array.isArray(n)&&n.splice(0).forEach((function(n){return t.build(n)}))}}]),t}();function lt(t){return d(t)+""}function ft(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length?t.map(lt).join(n):""}function st(t){if(!t)return"transparent";if(null==t.a||t.a>=1){var n=function(t){return 1===(t=parseInt(t).toString(16)).length?"0"+t:t},r=function(t){return t.charAt(0)===t.charAt(1)},e=n(t.r),i=n(t.g),o=n(t.b);return r(e)&&r(i)&&r(o)&&(e=e.charAt(0),i=i.charAt(0),o=o.charAt(0)),"#"+e+i+o}return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function ct(t){return t?"url(#"+t+")":"none"}!function(){for(var t=0,n=["ms","moz","webkit","o"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var r=Date.now(),e=Math.max(0,16-(r-t)),i=window.setTimeout((function(){n(r+e)}),e);return t=r+e,i},window.cancelAnimationFrame=window.clearTimeout)}();var ht={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{x:q(t,n.x,r.x),y:q(t,n.y,r.y)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("rx",lt(e.x)),t.setAttribute("ry",lt(e.y))}}},vt={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{width:q(t,n.width,r.width),height:q(t,n.height,r.height)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("width",lt(e.width)),t.setAttribute("height",lt(e.height))}}};Object.freeze({M:2,L:2,Z:0,H:1,V:1,C:6,Q:4,T:2,S:4,A:7});var yt={},gt=null;function dt(t){var n=function(){if(gt)return gt;if("object"!==("undefined"==typeof document?"undefined":r(document))||!document.createElementNS)return{};var t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t&&t.style?(t.style.position="absolute",t.style.opacity="0.01",t.style.zIndex="-9999",t.style.left="-9999px",t.style.width="1px",t.style.height="1px",gt={svg:t}):{}}().svg;if(!n)return function(t){return null};var e=document.createElementNS(n.namespaceURI,"path");e.setAttributeNS(null,"d",t),e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","none"),n.appendChild(e);var i=e.getTotalLength();return function(t){var n=e.getPointAtLength(i*t);return{x:n.x,y:n.y}}}function pt(t){return yt[t]?yt[t]:yt[t]=dt(t)}function mt(t,n,r,e){if(!t||!e)return!1;var i=["M",t.x,t.y];if(n&&r&&(i.push("C"),i.push(n.x),i.push(n.y),i.push(r.x),i.push(r.y)),n?!r:r){var o=n||r;i.push("Q"),i.push(o.x),i.push(o.y)}return n||r||i.push("L"),i.push(e.x),i.push(e.y),i.join(" ")}function bt(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=mt(t,n,r,e),u=pt(o);try{return u(i)}catch(t){return null}}function wt(t,n,r){return t+(n-t)*r}function At(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={x:wt(t.x,n.x,r),y:wt(t.y,n.y,r)};return e&&(i.a=xt(t,n)),i}function xt(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function kt(t,n,r,e){var i=1-e;return i*i*t+2*i*e*n+e*e*r}function St(t,n,r,e){return 2*(1-e)*(n-t)+2*e*(r-n)}function _t(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=bt(t,n,null,r,e);return o||(o={x:kt(t.x,n.x,r.x,e),y:kt(t.y,n.y,r.y,e)}),i&&(o.a=Ot(t,n,r,e)),o}function Ot(t,n,r,e){return Math.atan2(St(t.y,n.y,r.y,e),St(t.x,n.x,r.x,e))}function jt(t,n,r,e,i){var o=i*i;return i*o*(e-t+3*(n-r))+3*o*(t+r-2*n)+3*i*(n-t)+t}function Mt(t,n,r,e,i){var o=1-i;return 3*(o*o*(n-t)+2*o*i*(r-n)+i*i*(e-r))}function Pt(t,n,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=bt(t,n,r,e,i);return u||(u={x:jt(t.x,n.x,r.x,e.x,i),y:jt(t.y,n.y,r.y,e.y,i)}),o&&(u.a=Et(t,n,r,e,i)),u}function Et(t,n,r,e,i){return Math.atan2(Mt(t.y,n.y,r.y,e.y,i),Mt(t.x,n.x,r.x,e.x,i))}function It(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Ft(n)){if(Nt(r))return _t(n,r.start,r,t,e)}else if(Ft(r)){if(n.end)return _t(n,n.end,r,t,e)}else{if(n.end)return r.start?Pt(n,n.end,r.start,r,t,e):_t(n,n.end,r,t,e);if(r.start)return _t(n,r.start,r,t,e)}return At(n,r,t,e)}function Rt(t,n,r){var e=It(t,n,r,!0);return e.a=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t+Math.PI:t}(e.a)/m,e}function Ft(t){return!t.type||"corner"===t.type}function Nt(t){return null!=t.start&&!Ft(t)}var Tt=new N;var Bt={f:lt,i:B},qt={f:lt,i:L};function Lt(t,n,r){return t.map((function(t){return function(t,n,r){var e=t.v;if(!e||"g"!==e.t||e.s||!e.v||!e.r)return t;var i=r.getElementById(e.r),o=i&&i.querySelectorAll("stop")||[];return e.s=e.v.map((function(t,n){var r=o[n]&&o[n].getAttribute("offset");return{c:t,o:r=d(parseInt(r)/100)}})),delete e.v,t}(t,0,r)}))}var Ct={gt:"gradientTransform",c:{x:"cx",y:"cy"},rd:"r",f:{x:"x1",y:"y1"},to:{x:"x2",y:"y2"}};function Dt(t,n,e,i,o,u,a,l){return Lt(t,0,l),n=function(t,n,r){for(var e,i,o,u=t.length-1,a={},l=0;l<=u;l++)(e=t[l]).e&&(e.e=n(e.e)),e.v&&"g"===(i=e.v).t&&i.r&&(o=r.getElementById(i.r))&&(a[i.r]={e:o,s:o.querySelectorAll("stop")});return a}(t,i,l),function(i){var o=e(i,t,zt);if(!o)return"none";if("c"===o.t)return st(o.v);if("g"===o.t){if(!n[o.r])return ct(o.r);var u=n[o.r];return function(t,n){for(var r=t.s,e=r.length;e<n.length;e++){var i=r[r.length-1].cloneNode();i.id=Yt(i.id),t.e.appendChild(i),r=t.s=t.e.querySelectorAll("stop")}for(var o=0,u=r.length,a=n.length-1;o<u;o++)r[o].setAttribute("stop-color",st(n[Math.min(o,a)].c)),r[o].setAttribute("offset",n[Math.min(o,a)].o)}(u,o.s),Object.keys(Ct).forEach((function(t){if(void 0!==o[t])if("object"!==r(Ct[t])){var n,e="gt"===t?(n=o[t],Array.isArray(n)?"matrix("+n.join(" ")+")":""):o[t],i=Ct[t];u.e.setAttribute(i,e)}else Object.keys(Ct[t]).forEach((function(n){if(void 0!==o[t][n]){var r=o[t][n],e=Ct[t][n];u.e.setAttribute(e,r)}}))})),ct(o.r)}return"none"}}function zt(t,r,e){if(0===t)return r;if(1===t)return e;if(r&&e){var i=r.t;if(i===e.t)switch(r.t){case"c":return{t:i,v:z(t,r.v,e.v)};case"g":if(r.r===e.r){var o={t:i,s:Vt(t,r.s,e.s),r:r.r};return r.gt&&e.gt&&(o.gt=function(t,n,r){var e=n.length;if(e!==r.length)return T(t,n,r);for(var i=new Array(e),o=0;o<e;o++)i[o]=B(t,n[o],r[o]);return i}(t,r.gt,e.gt)),r.c?(o.c=C(t,r.c,e.c),o.rd=q(t,r.rd,e.rd)):r.f&&(o.f=C(t,r.f,e.f),o.to=C(t,r.to,e.to)),o}}if("c"===r.t&&"g"===e.t||"c"===e.t&&"g"===r.t){var u="c"===r.t?r:e,a="g"===r.t?n({},r):n({},e),l=a.s.map((function(t){return{c:u.v,o:t.o}}));return a.s="c"===r.t?Vt(t,l,a.s):Vt(t,a.s,l),a}}return T(t,r,e)}function Vt(t,n,r){if(n.length===r.length)return n.map((function(n,e){return Gt(t,n,r[e])}));for(var e=Math.max(n.length,r.length),i=[],o=0;o<e;o++){var u=Gt(t,n[Math.min(o,n.length-1)],r[Math.min(o,r.length-1)]);i.push(u)}return i}function Gt(t,n,r){return{o:L(t,n.o,r.o||0),c:z(t,n.c,r.c||{})}}function Yt(t){return t.replace(/-fill-([0-9]+)$/,(function(t,n){return"-fill-"+(+n+1)}))}var $t={fill:Dt,"fill-opacity":qt,stroke:Dt,"stroke-opacity":qt,"stroke-width":Bt,"stroke-dashoffset":{f:lt,i:B},"stroke-dasharray":{f:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length>0&&(t=t.map((function(t){return d(t,4)}))),ft(t,n)},i:function(t,n,r){var e,i,o,u=n.length,a=r.length;if(u!==a)if(0===u)n=V(u=a,0);else if(0===a)a=u,r=V(u,0);else{var l=(o=(e=u)*(i=a)/function(t,n){for(var r;n;)r=n,n=t%n,t=r;return t||1}(e,i))<0?-o:o;n=G(n,Math.floor(l/u)),r=G(r,Math.floor(l/a)),u=a=l}for(var f=[],s=0;s<u;s++)f.push(d(q(t,n[s],r[s])));return f}},opacity:qt,transform:function(t,n,e,i){if(!(t=function(t,n){if(!t||"object"!==r(t))return null;var e=!1;for(var i in t)t.hasOwnProperty(i)&&(t[i]&&t[i].length?(t[i].forEach((function(t){t.e&&(t.e=n(t.e))})),e=!0):delete t[i]);return e?t:null}(t,i)))return null;var o=function(r,i,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t[r]?e(i,t[r],o):n&&n[r]?n[r]:u};return n&&n.a&&t.o?function(n){var r=e(n,t.o,Rt);return Tt.recomposeSelf(r,o("r",n,B,0)+r.a,o("k",n,C),o("s",n,C),o("t",n,C)).toString()}:function(t){return Tt.recomposeSelf(o("o",t,It,null),o("r",t,B,0),o("k",t,C),o("s",t,C),o("t",t,C)).toString()}},r:Bt,"#size":vt,"#radius":ht,_:function(t,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)this[t[r]]=n;else this[t]=n}},Ut=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(u,t);var n,r,i=(n=u,r=f(),function(){var t,e=a(n);if(r){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return c(this,t)});function u(){return e(this,u),i.apply(this,arguments)}return o(u,null,[{key:"build",value:function(t){var n=h(a(u),"build",this).call(this,t,$t);if(!n)return null;n.el,n.options,function(t,n,r){t.play()}(n.player)}}]),u}(at);return Ut.init(),Ut}));
    (function(s,i,o,w){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('5c7f360c',{"root":"e7uSzKwBns11","animations":[{"elements":{"e7uSzKwBns12":{"transform":{"data":{"o":{"x":259.168594,"y":349.369644,"type":"corner"},"t":{"x":-259.168594,"y":-349.369644}},"keys":{"r":[{"t":0,"v":0},{"t":5000,"v":-180},{"t":10000,"v":-360}]}}},"e7uSzKwBns110":{"transform":{"data":{"o":{"x":175.688599,"y":356.049637,"type":"corner"},"t":{"x":-175.688599,"y":-356.049637}},"keys":{"r":[{"t":0,"v":0},{"t":5000,"v":-180},{"t":10000,"v":-360}]}}},"e7uSzKwBns118":{"transform":{"data":{"o":{"x":83.82859,"y":361.644653,"type":"corner"},"t":{"x":-83.82859,"y":-361.644653}},"keys":{"r":[{"t":0,"v":0},{"t":5000,"v":-180},{"t":10000,"v":-360}]}}},"e7uSzKwBns1199":{"opacity":[{"t":0,"v":1},{"t":1700,"v":1},{"t":1900,"v":0},{"t":3500,"v":1},{"t":4800,"v":1},{"t":5000,"v":0},{"t":6500,"v":1},{"t":7700,"v":1},{"t":8000,"v":0},{"t":10000,"v":1}]},"e7uSzKwBns1291":{"transform":{"data":{"o":{"x":142.387955,"y":393.90799,"type":"corner"},"t":{"x":-142.387955,"y":-393.90799}},"keys":{"r":[{"t":0,"v":0},{"t":4600,"v":-180},{"t":10000,"v":-360}]}}},"e7uSzKwBns1314":{"transform":{"data":{"o":{"x":238.718605,"y":381.279633,"type":"corner"},"t":{"x":-238.718605,"y":-381.279633}},"keys":{"r":[{"t":0,"v":0},{"t":5000,"v":-180},{"t":10000,"v":-360}]}}},"e7uSzKwBns1338":{"transform":{"data":{"o":{"x":326.812958,"y":374.578003,"type":"corner"},"t":{"x":-326.812958,"y":-374.578003}},"keys":{"r":[{"t":0,"v":0},{"t":5400,"v":-180},{"t":10000,"v":-360}]}}}},"s":"MODA1NGM0NmJhZFhiZWSJiYWFiZGIyYjhiNzZFiODM3YTc5Nzk3OTc5XNzU2YmFkYjJiYkphZKWFjYmRiMmI4Yjc2YjSgzN2E3NTZiYjJiZGFNlYmJhYWJkYjJiOGI3XYmM2YlY4Mzc5NzU2YRmFmYjJiNWI1NmI4MzCdhNzU2YmFhYjViZGFKlYmJiN2FhYmRhZTZiPODNPYWZhYWI1YmNTYXWU3NTZiYmNiOWFlYWNVhZDZiODM3YWM2"}],"options":"MQDAxMDg4MmZSODA4MUUc2ZTdmODEyZjQ3MmYB3OTdjNmVDNzEyZjhhX"},'__SVGATOR_PLAYER__',window);

      // new Hours animation
    !function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):((t="undefined"!=typeof globalThis?globalThis:t||self).__SVGATOR_PLAYER__=t.__SVGATOR_PLAYER__||{},t.__SVGATOR_PLAYER__["5c7f360c"]=n())}(this,(function(){"use strict";function t(t,n){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);n&&(e=e.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),r.push.apply(r,e)}return r}function n(n){for(var r=1;r<arguments.length;r++){var e=null!=arguments[r]?arguments[r]:{};r%2?t(Object(e),!0).forEach((function(t){u(n,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):t(Object(e)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(e,t))}))}return n}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function e(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function i(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,e.key,e)}}function o(t,n,r){return n&&i(t.prototype,n),r&&i(t,r),t}function u(t,n,r){return n in t?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,t}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){return(l=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function f(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}function s(t,n,r){return(s=f()?Reflect.construct:function(t,n,r){var e=[null];e.push.apply(e,n);var i=new(Function.bind.apply(t,e));return r&&l(i,r.prototype),i}).apply(null,arguments)}function c(t,n){if(n&&("object"==typeof n||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function h(t,n,r){return(h="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,r){var e=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=a(t)););return t}(t,n);if(e){var i=Object.getOwnPropertyDescriptor(e,n);return i.get?i.get.call(r):i.value}})(t,n,r||t)}function v(t){return function(t){if(Array.isArray(t))return y(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"==typeof t)return y(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return y(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}Number.isInteger||(Number.isInteger=function(t){return"number"==typeof t&&isFinite(t)&&Math.floor(t)===t}),Number.EPSILON||(Number.EPSILON=2220446049250313e-31);var g=p(Math.pow(10,-6));function p(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:6;if(Number.isInteger(t))return t;var r=Math.pow(10,n);return Math.round((+t+Number.EPSILON)*r)/r}function d(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:g;return Math.abs(t-n)<r}var m=Math.PI/180;function b(t){return t}function w(t,n,r){var e=1-r;return 3*r*e*(t*e+n*r)+r*r*r}function x(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;return t<0||t>1||r<0||r>1?null:d(t,n)&&d(r,e)?b:function(i){if(i<=0)return t>0?i*n/t:0===n&&r>0?i*e/r:0;if(i>=1)return r<1?1+(i-1)*(e-1)/(r-1):1===r&&t<1?1+(i-1)*(n-1)/(t-1):1;for(var o,u=0,a=1;u<a;){var l=w(t,r,o=(u+a)/2);if(d(i,l))break;l<i?u=o:a=o}return w(n,e,o)}}function A(){return 1}function k(t){return 1===t?1:0}function _(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(1===t){if(0===n)return k;if(1===n)return A}var r=1/t;return function(t){return t>=1?1:(t+=n*r)-t%r}}var S=Math.sin,O=Math.cos,j=Math.acos,M=Math.asin,P=Math.tan,E=Math.atan2,I=Math.PI/180,R=180/Math.PI,F=Math.sqrt,N=function(){function t(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,u=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;e(this,t),this.m=[n,r,i,o,u,a],this.i=null,this.w=null,this.s=null}return o(t,[{key:"determinant",get:function(){var t=this.m;return t[0]*t[3]-t[1]*t[2]}},{key:"isIdentity",get:function(){if(null===this.i){var t=this.m;this.i=1===t[0]&&0===t[1]&&0===t[2]&&1===t[3]&&0===t[4]&&0===t[5]}return this.i}},{key:"point",value:function(t,n){var r=this.m;return{x:r[0]*t+r[2]*n+r[4],y:r[1]*t+r[3]*n+r[5]}}},{key:"translateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;if(!t&&!n)return this;var r=this.m;return r[4]+=r[0]*t+r[2]*n,r[5]+=r[1]*t+r[3]*n,this.w=this.s=this.i=null,this}},{key:"rotateSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;if(t%=360){var n=S(t*=I),r=O(t),e=this.m,i=e[0],o=e[1];e[0]=i*r+e[2]*n,e[1]=o*r+e[3]*n,e[2]=e[2]*r-i*n,e[3]=e[3]*r-o*n,this.w=this.s=this.i=null}return this}},{key:"scaleSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;if(1!==t||1!==n){var r=this.m;r[0]*=t,r[1]*=t,r[2]*=n,r[3]*=n,this.w=this.s=this.i=null}return this}},{key:"skewSelf",value:function(t,n){if(n%=360,(t%=360)||n){var r=this.m,e=r[0],i=r[1],o=r[2],u=r[3];t&&(t=P(t*I),r[2]+=e*t,r[3]+=i*t),n&&(n=P(n*I),r[0]+=o*n,r[1]+=u*n),this.w=this.s=this.i=null}return this}},{key:"resetSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,u=this.m;return u[0]=t,u[1]=n,u[2]=r,u[3]=e,u[4]=i,u[5]=o,this.w=this.s=this.i=null,this}},{key:"recomposeSelf",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null;return this.isIdentity||this.resetSelf(),t&&(t.x||t.y)&&this.translateSelf(t.x,t.y),n&&this.rotateSelf(n),r&&(r.x&&this.skewSelf(r.x,0),r.y&&this.skewSelf(0,r.y)),!e||1===e.x&&1===e.y||this.scaleSelf(e.x,e.y),i&&(i.x||i.y)&&this.translateSelf(i.x,i.y),this}},{key:"decompose",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=this.m,e=r[0]*r[0]+r[1]*r[1],i=[[r[0],r[1]],[r[2],r[3]]],o=F(e);if(0===o)return{origin:{x:p(r[4]),y:p(r[5])},translate:{x:p(t),y:p(n)},scale:{x:0,y:0},skew:{x:0,y:0},rotate:0};i[0][0]/=o,i[0][1]/=o;var u=r[0]*r[3]-r[1]*r[2]<0;u&&(o=-o);var a=i[0][0]*i[1][0]+i[0][1]*i[1][1];i[1][0]-=i[0][0]*a,i[1][1]-=i[0][1]*a;var l=F(i[1][0]*i[1][0]+i[1][1]*i[1][1]);if(0===l)return{origin:{x:p(r[4]),y:p(r[5])},translate:{x:p(t),y:p(n)},scale:{x:p(o),y:0},skew:{x:0,y:0},rotate:0};i[1][0]/=l,i[1][1]/=l,a/=l;var f=0;return i[1][1]<0?(f=j(i[1][1])*R,i[0][1]<0&&(f=360-f)):f=M(i[0][1])*R,u&&(f=-f),a=E(a,F(i[0][0]*i[0][0]+i[0][1]*i[0][1]))*R,u&&(a=-a),{origin:{x:p(r[4]),y:p(r[5])},translate:{x:p(t),y:p(n)},scale:{x:p(o),y:p(l)},skew:{x:p(a),y:0},rotate:p(f)}}},{key:"clone",value:function(){var t=this.m;return new this.constructor(t[0],t[1],t[2],t[3],t[4],t[5])}},{key:"toString",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:" ";if(null===this.s){var n=this.m.map((function(t){return p(t)}));1===n[0]&&0===n[1]&&0===n[2]&&1===n[3]?this.s="translate("+n[4]+t+n[5]+")":this.s="matrix("+n.join(t)+")"}return this.s}}],[{key:"create",value:function(t){return t?Array.isArray(t)?s(this,v(t)):t instanceof this?t.clone():(new this).recomposeSelf(t.origin,t.rotate,t.skew,t.scale,t.translate):new this}}]),t}();function T(t,n,r){return t>=.5?r:n}function q(t,n,r){return 0===t||n===r?n:t*(r-n)+n}function B(t,n,r){var e=q(t,n,r);return e<=0?0:e}function L(t,n,r){var e=q(t,n,r);return e<=0?0:e>=1?1:e}function C(t,n,r){return 0===t?n:1===t?r:{x:q(t,n.x,r.x),y:q(t,n.y,r.y)}}function D(t,n,r){var e=function(t,n,r){return Math.round(q(t,n,r))}(t,n,r);return e<=0?0:e>=255?255:e}function z(t,n,r){return 0===t?n:1===t?r:{r:D(t,n.r,r.r),g:D(t,n.g,r.g),b:D(t,n.b,r.b),a:q(t,null==n.a?1:n.a,null==r.a?1:r.a)}}function V(t,n){for(var r=[],e=0;e<t;e++)r.push(n);return r}function G(t,n){if(--n<=0)return t;var r=(t=Object.assign([],t)).length;do{for(var e=0;e<r;e++)t.push(t[e])}while(--n>0);return t}var Y,$=function(){function t(n){e(this,t),this.list=n,this.length=n.length}return o(t,[{key:"setAttribute",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].setAttribute(t,n)}},{key:"removeAttribute",value:function(t){for(var n=this.list,r=0;r<this.length;r++)n[r].removeAttribute(t)}},{key:"style",value:function(t,n){for(var r=this.list,e=0;e<this.length;e++)r[e].style[t]=n}}]),t}(),U=/-./g,Q=function(t,n){return n.toUpperCase()};function H(t){return"function"==typeof t?t:T}function J(t){return t?"function"==typeof t?t:Array.isArray(t)?function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b;if(!Array.isArray(t))return n;switch(t.length){case 1:return _(t[0])||n;case 2:return _(t[0],t[1])||n;case 4:return x(t[0],t[1],t[2],t[3])||n}return n}(t,null):function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:b;switch(t){case"linear":return b;case"steps":return _(n.steps||1,n.jump||0)||r;case"bezier":case"cubic-bezier":return x(n.x1||0,n.y1||0,n.x2||0,n.y2||0)||r}return r}(t.type,t.value,null):null}function Z(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i=n.length-1;if(t<=n[0].t)return e?[0,0,n[0].v]:n[0].v;if(t>=n[i].t)return e?[i,1,n[i].v]:n[i].v;var o,u=n[0],a=null;for(o=1;o<=i;o++){if(!(t>n[o].t)){a=n[o];break}u=n[o]}return null==a?e?[i,1,n[i].v]:n[i].v:u.t===a.t?e?[o,1,a.v]:a.v:(t=(t-u.t)/(a.t-u.t),u.e&&(t=u.e(t)),e?[o,t,r(t,u.v,a.v)]:r(t,u.v,a.v))}function K(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;return t&&t.length?"function"!=typeof n?null:("function"!=typeof r&&(r=null),function(e){var i=Z(e,t,n);return null!=i&&r&&(i=r(i)),i}):null}function W(t,n){return t.t-n.t}function X(t,n,e,i,o){var u,a="@"===e[0],l="#"===e[0],f=Y[e],s=T;switch(a?(u=e.substr(1),e=u.replace(U,Q)):l&&(e=e.substr(1)),r(f)){case"function":if(s=f(i,o,Z,J,e,a,n,t),l)return s;break;case"string":s=K(i,H(f));break;case"object":if((s=K(i,H(f.i),f.f))&&"function"==typeof f.u)return f.u(n,s,e,a,t)}return s?function(t,n,r){if(arguments.length>3&&void 0!==arguments[3]&&arguments[3])return t instanceof $?function(e){return t.style(n,r(e))}:function(e){return t.style[n]=r(e)};if(Array.isArray(n)){var e=n.length;return function(i){var o=r(i);if(null==o)for(var u=0;u<e;u++)t[u].removeAttribute(n);else for(var a=0;a<e;a++)t[a].setAttribute(n,o)}}return function(e){var i=r(e);null==i?t.removeAttribute(n):t.setAttribute(n,i)}}(n,e,s,a):null}function tt(t,n,e,i){if(!i||"object"!==r(i))return null;var o=null,u=null;return Array.isArray(i)?u=function(t){if(!t||!t.length)return null;for(var n=0;n<t.length;n++)t[n].e&&(t[n].e=J(t[n].e));return t.sort(W)}(i):(u=i.keys,o=i.data||null),u?X(t,n,e,u,o):null}function nt(t,n,r){if(!r)return null;var e=[];for(var i in r)if(r.hasOwnProperty(i)){var o=tt(t,n,i,r[i]);o&&e.push(o)}return e.length?e:null}function rt(t,n){if(!n.duration||n.duration<0)return null;var r=function(t,n){if(!n)return null;var r=[];if(Array.isArray(n))for(var e=n.length,i=0;i<e;i++){var o=n[i];if(2===o.length){var u=null;if("string"==typeof o[0])u=t.getElementById(o[0]);else if(Array.isArray(o[0])){u=[];for(var a=0;a<o[0].length;a++)if("string"==typeof o[0][a]){var l=t.getElementById(o[0][a]);l&&u.push(l)}u=u.length?1===u.length?u[0]:new $(u):null}if(u){var f=nt(t,u,o[1]);f&&(r=r.concat(f))}}}else for(var s in n)if(n.hasOwnProperty(s)){var c=t.getElementById(s);if(c){var h=nt(t,c,n[s]);h&&(r=r.concat(h))}}return r.length?r:null}(t,n.elements);return r?function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1/0,e=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,u=t.length,a=e>0?n:0;i&&r%2==0&&(a=n-a);var l=null;return function(f,s){var c=f%n,h=1+(f-c)/n;s*=e,i&&h%2==0&&(s=-s);var v=!1;if(h>r)c=a,v=!0,-1===o&&(c=e>0?0:n);else if(s<0&&(c=n-c),c===l)return!1;l=c;for(var y=0;y<u;y++)t[y](c);return v}}(r,n.duration,n.iterations||1/0,n.direction||1,!!n.alternate,n.fill||1):null}function et(t){return+("0x"+(t.replace(/[^0-9a-fA-F]+/g,"")||27))}function it(t,n,r){return!t||!r||n>t.length?t:t.substring(0,n)+it(t.substring(n+1),r,r)}function ot(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:27;return!t||t%n?t%n:ot(t/n,n)}function ut(t,n,r){if(t&&t.length){var e=et(r),i=et(n),o=ot(e)+5,u=it(t,ot(e,5),o);return u=u.replace(/\x7c$/g,"==").replace(/\x2f$/g,"="),u=function(t,n,r){var e=+("0x"+t.substring(0,4));t=t.substring(4);for(var i=n%e+r%27,o=[],u=0;u<t.length;u+=2)if("|"!==t[u]){var a=+("0x"+t[u]+t[u+1])-i;o.push(a)}else{var l=+("0x"+t.substring(u+1,u+1+4))-i;u+=3,o.push(l)}return String.fromCharCode.apply(String,o)}(u=(u=atob(u)).replace(/[\x41-\x5A]/g,""),i,e),u=JSON.parse(u)}}var at=function(){function t(n,r){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};e(this,t),this._id=0,this._running=!1,this._rollingBack=!1,this._animations=n,this.duration=r.duration,this.alternate=r.alternate,this.fill=r.fill,this.iterations=r.iterations,this.direction=i.direction||1,this.speed=i.speed||1,this.fps=i.fps||100,this.offset=i.offset||0,this.rollbackStartOffset=0}return o(t,[{key:"maxFiniteDuration",get:function(){return this.iterations>0?this.iterations*this.duration:this.duration}},{key:"_apply",value:function(t){for(var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this._animations,e=r.length,i=0,o=0;o<e;o++)n[o]?i++:(n[o]=r[o](t,this.direction),n[o]&&i++);return i}},{key:"_rollback",value:function(){var t=this,n=1/0,r=null;this.rollbackStartOffset=this.offset,this._rollingBack=!0,this._running=!0;this._id=window.requestAnimationFrame((function e(i){if(t._rollingBack){null==r&&(r=i);var o=i-r,u=t.rollbackStartOffset-o,a=Math.round(u*t.speed);if(a>t.duration&&n!==1/0){var l=!!t.alternate&&a/t.duration%2>1,f=a%t.duration;a=(f+=l?t.duration:0)||t.duration}var s=t.fps?1e3/t.fps:0,c=Math.max(0,a);c<n-s&&(t.offset=c,n=c,t._apply(c));var h=t.iterations>0&&-1===t.fill&&a>=t.maxFiniteDuration;(a<=0||t.offset<a||h)&&t.stop(),t._id=window.requestAnimationFrame(e)}}))}},{key:"_start",value:function(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,r=-1/0,e=null,i={};this._running=!0;var o=function o(u){null==e&&(e=u);var a=Math.round((u-e+n)*t.speed),l=t.fps?1e3/t.fps:0;if(a>r+l&&!t._rollingBack&&(t.offset=a,r=a,t._apply(a,i)===t._animations.length))return void t.pause(!0);t._id=window.requestAnimationFrame(o)};this._id=window.requestAnimationFrame(o)}},{key:"_pause",value:function(){this._id&&window.cancelAnimationFrame(this._id),this._running=!1}},{key:"play",value:function(){if(!this._running)return this._rollingBack?this._rollback():this._start(this.offset)}},{key:"stop",value:function(){this._pause(),this.offset=0,this.rollbackStartOffset=0,this._rollingBack=!1,this._apply(0)}},{key:"reachedToEnd",value:function(){return this.iterations>0&&this.offset>=this.iterations*this.duration}},{key:"restart",value:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.stop(t),this.play(t)}},{key:"pause",value:function(){this._pause()}},{key:"reverse",value:function(){this.direction=-this.direction}}],[{key:"build",value:function(t,r){return delete t.animationSettings,t.options=ut(t.options,t.root,"5c7f360c"),t.animations.map((function(r){var e=ut(r.s,t.root,"5c7f360c");for(var i in delete r.s,t.animationSettings||(t.animationSettings=n({},e)),e)e.hasOwnProperty(i)&&(r[i]=e[i])})),(t=function(t,n){if(Y=n,!t||!t.root||!Array.isArray(t.animations))return null;for(var r=document.getElementsByTagName("svg"),e=!1,i=0;i<r.length;i++)if(r[i].id===t.root&&!r[i].svgatorAnimation){(e=r[i]).svgatorAnimation=!0;break}if(!e)return null;var o=t.animations.map((function(t){return rt(e,t)})).filter((function(t){return!!t}));return o.length?{element:e,animations:o,animationSettings:t.animationSettings,options:t.options||void 0}:null}(t,r))?{el:t.element,options:t.options||{},player:new this(t.animations,t.animationSettings,t.options)}:null}},{key:"push",value:function(t){return this.build(t)}},{key:"init",value:function(){var t=this,n=window.__SVGATOR_PLAYER__&&window.__SVGATOR_PLAYER__["5c7f360c"];Array.isArray(n)&&n.splice(0).forEach((function(n){return t.build(n)}))}}]),t}();function lt(t){return p(t)+""}function ft(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length?t.map(lt).join(n):""}function st(t){if(!t)return"transparent";if(null==t.a||t.a>=1){var n=function(t){return 1===(t=parseInt(t).toString(16)).length?"0"+t:t},r=function(t){return t.charAt(0)===t.charAt(1)},e=n(t.r),i=n(t.g),o=n(t.b);return r(e)&&r(i)&&r(o)&&(e=e.charAt(0),i=i.charAt(0),o=o.charAt(0)),"#"+e+i+o}return"rgba("+t.r+","+t.g+","+t.b+","+t.a+")"}function ct(t){return t?"url(#"+t+")":"none"}!function(){for(var t=0,n=["ms","moz","webkit","o"],r=0;r<n.length&&!window.requestAnimationFrame;++r)window.requestAnimationFrame=window[n[r]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[n[r]+"CancelAnimationFrame"]||window[n[r]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(n){var r=Date.now(),e=Math.max(0,16-(r-t)),i=window.setTimeout((function(){n(r+e)}),e);return t=r+e,i},window.cancelAnimationFrame=window.clearTimeout)}();var ht={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{x:B(t,n.x,r.x),y:B(t,n.y,r.y)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("rx",lt(e.x)),t.setAttribute("ry",lt(e.y))}}},vt={f:null,i:function(t,n,r){return 0===t?n:1===t?r:{width:B(t,n.width,r.width),height:B(t,n.height,r.height)}},u:function(t,n){return function(r){var e=n(r);t.setAttribute("width",lt(e.width)),t.setAttribute("height",lt(e.height))}}};Object.freeze({M:2,L:2,Z:0,H:1,V:1,C:6,Q:4,T:2,S:4,A:7});var yt={},gt=null;function pt(t){var n=function(){if(gt)return gt;if("object"!==("undefined"==typeof document?"undefined":r(document))||!document.createElementNS)return{};var t=document.createElementNS("http://www.w3.org/2000/svg","svg");return t&&t.style?(t.style.position="absolute",t.style.opacity="0.01",t.style.zIndex="-9999",t.style.left="-9999px",t.style.width="1px",t.style.height="1px",gt={svg:t}):{}}().svg;if(!n)return function(t){return null};var e=document.createElementNS(n.namespaceURI,"path");e.setAttributeNS(null,"d",t),e.setAttributeNS(null,"fill","none"),e.setAttributeNS(null,"stroke","none"),n.appendChild(e);var i=e.getTotalLength();return function(t){var n=e.getPointAtLength(i*t);return{x:n.x,y:n.y}}}function dt(t){return yt[t]?yt[t]:yt[t]=pt(t)}function mt(t,n,r,e){if(!t||!e)return!1;var i=["M",t.x,t.y];if(n&&r&&(i.push("C"),i.push(n.x),i.push(n.y),i.push(r.x),i.push(r.y)),n?!r:r){var o=n||r;i.push("Q"),i.push(o.x),i.push(o.y)}return n||r||i.push("L"),i.push(e.x),i.push(e.y),i.join(" ")}function bt(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=mt(t,n,r,e),u=dt(o);try{return u(i)}catch(t){return null}}function wt(t,n,r){return t+(n-t)*r}function xt(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3],i={x:wt(t.x,n.x,r),y:wt(t.y,n.y,r)};return e&&(i.a=At(t,n)),i}function At(t,n){return Math.atan2(n.y-t.y,n.x-t.x)}function kt(t,n,r,e){var i=1-e;return i*i*t+2*i*e*n+e*e*r}function _t(t,n,r,e){return 2*(1-e)*(n-t)+2*e*(r-n)}function St(t,n,r,e){var i=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=bt(t,n,null,r,e);return o||(o={x:kt(t.x,n.x,r.x,e),y:kt(t.y,n.y,r.y,e)}),i&&(o.a=Ot(t,n,r,e)),o}function Ot(t,n,r,e){return Math.atan2(_t(t.y,n.y,r.y,e),_t(t.x,n.x,r.x,e))}function jt(t,n,r,e,i){var o=i*i;return i*o*(e-t+3*(n-r))+3*o*(t+r-2*n)+3*i*(n-t)+t}function Mt(t,n,r,e,i){var o=1-i;return 3*(o*o*(n-t)+2*o*i*(r-n)+i*i*(e-r))}function Pt(t,n,r,e,i){var o=arguments.length>5&&void 0!==arguments[5]&&arguments[5],u=bt(t,n,r,e,i);return u||(u={x:jt(t.x,n.x,r.x,e.x,i),y:jt(t.y,n.y,r.y,e.y,i)}),o&&(u.a=Et(t,n,r,e,i)),u}function Et(t,n,r,e,i){return Math.atan2(Mt(t.y,n.y,r.y,e.y,i),Mt(t.x,n.x,r.x,e.x,i))}function It(t,n,r){var e=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(Ft(n)){if(Nt(r))return St(n,r.start,r,t,e)}else if(Ft(r)){if(n.end)return St(n,n.end,r,t,e)}else{if(n.end)return r.start?Pt(n,n.end,r.start,r,t,e):St(n,n.end,r,t,e);if(r.start)return St(n,r.start,r,t,e)}return xt(n,r,t,e)}function Rt(t,n,r){var e=It(t,n,r,!0);return e.a=function(t){return arguments.length>1&&void 0!==arguments[1]&&arguments[1]?t+Math.PI:t}(e.a)/m,e}function Ft(t){return!t.type||"corner"===t.type}function Nt(t){return null!=t.start&&!Ft(t)}var Tt=new N;var qt={f:lt,i:q},Bt={f:lt,i:L};function Lt(t,n,r){return t.map((function(t){return function(t,n,r){var e=t.v;if(!e||"g"!==e.t||e.s||!e.v||!e.r)return t;var i=r.getElementById(e.r),o=i&&i.querySelectorAll("stop")||[];return e.s=e.v.map((function(t,n){var r=o[n]&&o[n].getAttribute("offset");return{c:t,o:r=p(parseInt(r)/100)}})),delete e.v,t}(t,0,r)}))}var Ct={gt:"gradientTransform",c:{x:"cx",y:"cy"},rd:"r",f:{x:"x1",y:"y1"},to:{x:"x2",y:"y2"}};function Dt(t,n,e,i,o,u,a,l){return Lt(t,0,l),n=function(t,n,r){for(var e,i,o,u=t.length-1,a={},l=0;l<=u;l++)(e=t[l]).e&&(e.e=n(e.e)),e.v&&"g"===(i=e.v).t&&i.r&&(o=r.getElementById(i.r))&&(a[i.r]={e:o,s:o.querySelectorAll("stop")});return a}(t,i,l),function(i){var o=e(i,t,zt);if(!o)return"none";if("c"===o.t)return st(o.v);if("g"===o.t){if(!n[o.r])return ct(o.r);var u=n[o.r];return function(t,n){for(var r=t.s,e=r.length;e<n.length;e++){var i=r[r.length-1].cloneNode();i.id=Yt(i.id),t.e.appendChild(i),r=t.s=t.e.querySelectorAll("stop")}for(var o=0,u=r.length,a=n.length-1;o<u;o++)r[o].setAttribute("stop-color",st(n[Math.min(o,a)].c)),r[o].setAttribute("offset",n[Math.min(o,a)].o)}(u,o.s),Object.keys(Ct).forEach((function(t){if(void 0!==o[t])if("object"!==r(Ct[t])){var n,e="gt"===t?(n=o[t],Array.isArray(n)?"matrix("+n.join(" ")+")":""):o[t],i=Ct[t];u.e.setAttribute(i,e)}else Object.keys(Ct[t]).forEach((function(n){if(void 0!==o[t][n]){var r=o[t][n],e=Ct[t][n];u.e.setAttribute(e,r)}}))})),ct(o.r)}return"none"}}function zt(t,r,e){if(0===t)return r;if(1===t)return e;if(r&&e){var i=r.t;if(i===e.t)switch(r.t){case"c":return{t:i,v:z(t,r.v,e.v)};case"g":if(r.r===e.r){var o={t:i,s:Vt(t,r.s,e.s),r:r.r};return r.gt&&e.gt&&(o.gt=function(t,n,r){var e=n.length;if(e!==r.length)return T(t,n,r);for(var i=new Array(e),o=0;o<e;o++)i[o]=q(t,n[o],r[o]);return i}(t,r.gt,e.gt)),r.c?(o.c=C(t,r.c,e.c),o.rd=B(t,r.rd,e.rd)):r.f&&(o.f=C(t,r.f,e.f),o.to=C(t,r.to,e.to)),o}}if("c"===r.t&&"g"===e.t||"c"===e.t&&"g"===r.t){var u="c"===r.t?r:e,a="g"===r.t?n({},r):n({},e),l=a.s.map((function(t){return{c:u.v,o:t.o}}));return a.s="c"===r.t?Vt(t,l,a.s):Vt(t,a.s,l),a}}return T(t,r,e)}function Vt(t,n,r){if(n.length===r.length)return n.map((function(n,e){return Gt(t,n,r[e])}));for(var e=Math.max(n.length,r.length),i=[],o=0;o<e;o++){var u=Gt(t,n[Math.min(o,n.length-1)],r[Math.min(o,r.length-1)]);i.push(u)}return i}function Gt(t,n,r){return{o:L(t,n.o,r.o||0),c:z(t,n.c,r.c||{})}}function Yt(t){return t.replace(/-fill-([0-9]+)$/,(function(t,n){return"-fill-"+(+n+1)}))}var $t={fill:Dt,"fill-opacity":Bt,stroke:Dt,"stroke-opacity":Bt,"stroke-width":qt,"stroke-dashoffset":{f:lt,i:q},"stroke-dasharray":{f:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:" ";return t&&t.length>0&&(t=t.map((function(t){return p(t,4)}))),ft(t,n)},i:function(t,n,r){var e,i,o,u=n.length,a=r.length;if(u!==a)if(0===u)n=V(u=a,0);else if(0===a)a=u,r=V(u,0);else{var l=(o=(e=u)*(i=a)/function(t,n){for(var r;n;)r=n,n=t%n,t=r;return t||1}(e,i))<0?-o:o;n=G(n,Math.floor(l/u)),r=G(r,Math.floor(l/a)),u=a=l}for(var f=[],s=0;s<u;s++)f.push(p(B(t,n[s],r[s])));return f}},opacity:Bt,transform:function(t,n,e,i){if(!(t=function(t,n){if(!t||"object"!==r(t))return null;var e=!1;for(var i in t)t.hasOwnProperty(i)&&(t[i]&&t[i].length?(t[i].forEach((function(t){t.e&&(t.e=n(t.e))})),e=!0):delete t[i]);return e?t:null}(t,i)))return null;var o=function(r,i,o){var u=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return t[r]?e(i,t[r],o):n&&n[r]?n[r]:u};return n&&n.a&&t.o?function(n){var r=e(n,t.o,Rt);return Tt.recomposeSelf(r,o("r",n,q,0)+r.a,o("k",n,C),o("s",n,C),o("t",n,C)).toString()}:function(t){return Tt.recomposeSelf(o("o",t,It,null),o("r",t,q,0),o("k",t,C),o("s",t,C),o("t",t,C)).toString()}},r:qt,"#size":vt,"#radius":ht,_:function(t,n){if(Array.isArray(t))for(var r=0;r<t.length;r++)this[t[r]]=n;else this[t]=n}},Ut=function(t){!function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&l(t,n)}(u,t);var n,r,i=(n=u,r=f(),function(){var t,e=a(n);if(r){var i=a(this).constructor;t=Reflect.construct(e,arguments,i)}else t=e.apply(this,arguments);return c(this,t)});function u(){return e(this,u),i.apply(this,arguments)}return o(u,null,[{key:"build",value:function(t){var n=h(a(u),"build",this).call(this,t,$t);if(!n)return null;n.el,n.options,function(t,n,r){t.play()}(n.player)}}]),u}(at);return Ut.init(),Ut}));
    (function(s,i,o,w,a,b){w[o]=w[o]||{};w[o][s]=w[o][s]||[];w[o][s].push(i);})('5c7f360c',{"root":"e6OP4hnGjpA1","animations":[{"elements":{"e6OP4hnGjpA2":{"transform":{"data":{"o":{"x":259.168594,"y":349.369644,"type":"corner"},"t":{"x":-259.168594,"y":-349.369644}},"keys":{"r":[{"t":0,"v":0},{"t":2800,"v":-180},{"t":5400,"v":-360}]}}},"e6OP4hnGjpA10":{"transform":{"data":{"o":{"x":175.688599,"y":356.049637,"type":"corner"},"t":{"x":-175.688599,"y":-356.049637}},"keys":{"r":[{"t":0,"v":0},{"t":2800,"v":-180},{"t":5400,"v":-360}]}}},"e6OP4hnGjpA18":{"transform":{"data":{"o":{"x":83.82859,"y":361.644653,"type":"corner"},"t":{"x":-83.82859,"y":-361.644653}},"keys":{"r":[{"t":0,"v":0},{"t":2800,"v":-180},{"t":5400,"v":-360}]}}},"e6OP4hnGjpA199":{"opacity":[{"t":0,"v":1},{"t":700,"v":1},{"t":900,"v":0},{"t":1800,"v":1},{"t":2600,"v":1},{"t":2800,"v":0},{"t":3800,"v":1},{"t":4700,"v":1},{"t":4900,"v":0},{"t":5400,"v":1}]},"e6OP4hnGjpA291":{"transform":{"data":{"o":{"x":142.387955,"y":393.90799,"type":"corner"},"t":{"x":-142.387955,"y":-393.90799}},"keys":{"r":[{"t":0,"v":0},{"t":2800,"v":-180},{"t":5400,"v":-360}]}}},"e6OP4hnGjpA314":{"transform":{"data":{"o":{"x":238.718605,"y":381.279633,"type":"corner"},"t":{"x":-238.718605,"y":-381.279633}},"keys":{"r":[{"t":0,"v":0},{"t":2800,"v":-180},{"t":5400,"v":-360}]}}},"e6OP4hnGjpA338":{"transform":{"data":{"o":{"x":326.812958,"y":374.578003,"type":"corner"},"t":{"x":-326.812958,"y":-374.578003}},"keys":{"r":[{"t":0,"v":0},{"t":2900,"v":-180},{"t":5500,"v":-360}]}}}},"s":"MJDA1M2JjNjNhNWI2YjXNhMmI1YWFiMGFmNjMV3Yjc2NzY3Mk03MTZkBNjNhNWFhSWIzYTZhNAGI1YWFiMGFmQTYzN2YI3MjZkNjNhYWI1YTZCiM2EyYjVhYWIwYWZiHNDYzN2I3MTZkNjNhNE2FhYWRhZDYzN2I3MjPZkNjNhMmFkYjVhNmIDzRmFmYTJiNWE2NjM3QYmE3YTJhZGI0YTY2ZRDYzYjRiMWE2YTZhNTGYzN2I3MmJl"}],"options":"MKDAxMDg4MmY4MDgxNmVU3ZjgxUzJmNDcyZkET3OTdjNmU3MTJmOGE/Y"},'__SVGATOR_PLAYER__',window)

  },
  unmounted() {
    if (this.messageInterval) {
      clearInterval(this.messageInterval);
    }
  }
}
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  color: #FFF;
  position: relative;
  font-family: "Moriis roman",serif;
}

@mixin circle($size) {
  display: inline-block;
  border-radius: 50%;
  @if $size == small {
    width: 50px;
    height: 50px;
    font-size: 26px;
    line-height: 50px;
  }
  @else if $size == tiny {
    width: 50px;
    height: 50px;
    font-size: 24px;
    line-height: 50px;
  }
}

@keyframes pop-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes pop-out {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}


.media {
  position: fixed;
  right: 0;
  top: 150px;
  z-index: 100;
  //display: flex;
  //padding: 20px 10px;
  //row-gap: 15px;
  //flex-direction: column;

  text-align: center;
  display: inline-block;
  a,
  a:hover,
  a:active,
  a:visited,
  a:focus {
    color: #fafafa;
    display: inline-block;
    text-decoration: none;
  }
  .toggle {
    @include circle(small);
    margin: 8px 10px;
  }
  &:hover .dials a {
    animation: pop-in .2s ease both;
  }
  .dials {
    margin: 0;
    padding: 0;
    list-style: none;
    a {
      @include circle(tiny);
      margin: 8px 0;
      transform: scale(0);
      animation: pop-out .2s ease both;
      background: #BECBFF;
    }
    a.pop-in {
      animation: pop-in .2s ease both;
    }
    //add incremental delays so that the buttons pop in order, supports up to 6 links
    @for $i from 0 through 10 {
      li:nth-child(#{$i}) a {
        animation-delay: $i * 0.05s;
      }
    }
  }
}

.bg-share {
  background-color: #BECBFF;
  color: #0b0944 !important;
  img {
    width: 30px;
    height: 30px;
  }
}

.home > .header {
  height: 660px;
  display: flex;
  flex-direction: row;
  position: relative;
  //background: url("../../assets/image/box_bcg1.png");
  //background-repeat:no-repeat;
  //background-size:100% 100%;
  overflow: hidden;
  padding: 0 100px;
  background: #11143c;
}

.headerBtn {
  position: absolute;
  right: 200px;
  top: 50px;
  cursor: pointer;
  z-index: 110;
  display: flex;
  column-gap: 15px;
}

.shareBtn {
  height: 38px;
  line-height: 38px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 8px;
  font-weight: bold;
  color: #FFFFFF;
  font-size: 18px;
  padding: 0 10px;
  cursor: pointer;
  position: relative;
  z-index: 110;
  img {
    width: 24px;
    height: 24px;
  }
}

.connectWallet, .language {
  width: 190px;
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 25px;
  color: #607FF6;
  border: 2px solid #607FF6;
  border-radius: 12px;
  position: relative;
}

.message {
  border: 2px solid #607FF6;
  border-radius: 12px;
  height: 45px;
  line-height: 45px;
  padding: 0 5px;
  position: relative;
  &:hover {
    .messageList {
      display: block;
    }
  }
  .ant-badge {
    font-size: 26px;
    &:hover {
      .messageList {
        display: block;
      }
    }
  }
}

.messageItem {
  min-width: 388px;
  height: 45px;
  background: #0A133F;
  border: 1px solid #607FF6;
  line-height: 45px;
  border-radius: 8px;
  position: relative;
  margin-top: 13px;
  .arrow {
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #607FF6;
    position: relative;
    margin: 0 auto;
    top: -17px;
    left: 120px;
  }

  .arrow span {
    display: block;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #0A133F;
    position: absolute;
    left: -15px;
    top: 2px;
  }
}

.cancel {
  font-size: 12px;
  width: 13px;
  position: absolute;
  right: 10px;
  top: 0;
  height: 10px;
  line-height: 12px;
  padding: 5px 0;
  color: #607FF6;
  .anticon {
    vertical-align: top;
  }
}

.messageContent {
  height: 45px;
  line-height: 45px;
  position: absolute;
  top: 0;
  padding: 0 20px;
  display: flex;
  align-items: center;
  column-gap: 10px;
  .label {
    width: 9px;
    height: 9px;
    background: #FFBB01;
    border: 1px solid #FFBB01;
    border-radius: 50%;
    opacity: 1;
  }
}

.messageList {
  display: none;
  position: absolute;
  width: 500px;
  top: 17px;
  left: -350px;
  padding-top: 20px;
}

.connectWallet {
  &:hover .accountWrapper {
    display: block;
  }
}

.language {
  width: 50px;
  position: relative;
}

.language:hover .dropdownMenu{
  display: block;
}


.dropdownMenu {
  display: none;
  width: 50px;
  text-align: center;
  z-index: 100;
  color: #607FF6;
  background: #120d5e;
}

.dropdownMenu > div:hover {
  color: #92a7fd;
}

.headerAnimationLayer {
  position: absolute;
  left: 0;
  bottom: 80px;
  height: 80px;
  width: 100%;
}

.headerAnimationLayer .layer1 {
  height: 120px;
  width: 200%;
  margin-bottom: -20px;
  animation: layerAnimation linear 95s;
  animation-iteration-count: infinite;
}

.headerAnimationLayer .layer2 {
  height: 200px;
  width: 200%;
  margin-top: -20px;
  transform: rotate(-1deg);
  animation: layer2Animation linear 95s;
  animation-iteration-count: infinite;
}

.backgroundAni {
  position: absolute;
  //top: 100px;
  left: 0;
  height: 750px;
  width: 220%;
  img {
    height: 750px;
  }
  animation: bgAni linear 65s;
  animation-iteration-count: infinite;
  //background-image: url("/static/img/box_bcg_layer.png");
  //background-image: url("http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png");
}

@keyframes bgAni {
  0% {
    -webkit-transform: translate3d(-33%, 0, 0);
    transform: translate3d(-33%, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}


.clouds {
  background-image: url('http://demos.creative-tim.com/paper-kit-2/assets/img/clouds.png');
  position: absolute;
  top: -37px;
  left: -50px;
  height: 630px;
  width: 200%;
  animation: animcloud linear 80s;
  animation-iteration-count: infinite;
  background-blend-mode: overlay;
  //box-shadow: 0 0 50px #272f8b inset, 0 2px 50px #272f8b;
}

@keyframes animcloud {
  0% {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  100% {
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }
}


@keyframes layer2Animation {
  0% {
    transform: translate(-40%, 0px) rotate(-0.5deg);
  }
  100% {
    transform: translate(0px, 0px) rotate(-0.5deg);
  }
}

@keyframes layerAnimation {
  0% {
    transform: translate(-40%, 0px) rotate(358deg) scaleY(1);
  }
  100% {
    transform: translate(0, 0px) rotate(358deg) scaleY(1.5);
  }
}

.account {
  width: 50%;
}

.account .content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 100;
}

.boxLogo {
  cursor: pointer;
  width: 360px;
  height: 245px;
}

.balance {
  width: 350px;
  text-align: center;
  cursor: pointer;
}

.price {
  font-size: 23px;
}

.balanceBtn {
  background: #0B0944;
  width: 350px;
  padding: 2px 0;
  font-size: 35px;
  font-weight: bold;
  margin-top: 20px;
  border-radius: 50px;
  cursor: pointer;
}

.buyAres {
  height: 100px;
  background: url("../../assets/image/tickets.png");
  background-size: 100%;
  width: 285px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  animation: buyAresAnimation 4s infinite;
}

@keyframes buyAresAnimation {
  5%,
  50% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  15% {
    transform: scale(1.15);
  }
  20% {
    transform: scale(1.15) rotate(-5deg);
  }
  25% {
    transform: scale(1.15) rotate(5deg);
  }
  30% {
    transform: scale(1.15) rotate(-3deg);
  }
  35% {
    transform: scale(1.15) rotate(2deg);
  }
  40% {
    transform: scale(1.15) rotate(0);
  }
}


@keyframes buyAresPhoneAnimation {
  5%,
  50% {
    transform: scale(0.6);
  }
  10% {
    transform: scale(0.65);
  }
  15% {
    transform: scale(0.75);
  }
  20% {
    transform: scale(0.75) rotate(-5deg);
  }
  25% {
    transform: scale(0.75) rotate(5deg);
  }
  30% {
    transform: scale(0.75) rotate(-3deg);
  }
  35% {
    transform: scale(0.75) rotate(2deg);
  }
  40% {
    transform: scale(0.75) rotate(0);
  }
}



.buyAresBtn {
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  font-size: 25px;
  font-width: bold;
  width: 150px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  cursor: pointer;
}

.desc {
  margin-top: 50px;
  text-align: center;
  font-family: "Poppins",serif;
}

.horse {
  width: 450px;
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: relative;
  z-index: 100;
  margin-left: 100px;
}

.toPlay {
  min-height: 500px;
  width: 100%;
  background: #607FF6;
  padding: 0 160px;
}

.toPlaySteps {
  margin-top: 80px;
  display: flex;
  justify-content: space-around;
}

.toPlay .title {
  padding-top: 35px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
}

.stepCard {
  width: 320px;
  border-radius: 20px;
  padding: 25px 25px;
  color: #0E174F;
  background: #FFF;
}
.stepCard .header {

}

.stepCard .step {
  position: relative;
}
.stepCard .header .stepTitle {
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
}
.stepCard .stepNum {
  background: #FCAA36;
  color: #FFF;
  width: 152px;
  text-align: center;
  height: 40px;
  line-height: 40px;
  box-shadow: 3px 3px 0 rgba(11, 9, 68, 0.15);
  border-radius: 0 0 15px 15px;
  position: absolute;
  top: -73px;
  right: -15px;
}

.stepCard .stepDesc {
  font-family: Poppins,serif;
  margin-top: 20px;
}

.leaderboard {
  min-height: 702px;
  background: #E7EBFF;
  padding: 0 160px 20px 160px;
}

.leaderboardTitle {
  padding-top: 50px;
  text-align: center;
  font-size: 40px;
  font-weight: bold;
  color: #10184F;
}

.boardSwitchBtn {
  display: flex;
  width: 500px;
  border-radius: 15px;
  margin: 20px auto;
  border: 2px solid #607FF6;
}

.boardBtn {
  background: #E7EBFF;
  color: #607FF6;
  width: 250px;
  height: 53px;
  line-height: 53px;
  text-align: center;
  cursor: pointer;
  border-radius: 11px 0 0 11px;
}

.boardBtnSelected {
  background: #607FF6;
  color: #FFF;
  border-radius: 0 11px 11px 0;
}

.newStartSelected {
  background: #607FF6;
  color: #FFF;
}

.newStartBtn {
  border-radius: 13px 0 0 13px;
}

.romanBtn {
  border-radius: 0 13px 13px 0;
}

.boardCards {
  margin-top: 50px;
  display: flex;
  justify-content: space-around;
}

.boardCard {
  width: 300px;
  background: #607FF6;
  box-shadow: 10px 15px 15px rgba(0, 0, 0, 0.12);
  border-radius: 30px;
  padding-bottom: 30px;
}

.winnerNum {
  width: 50px;
  height: 60px;
  background: #E7EBFF;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.16);
  opacity: 1;
  border-radius: 0 0 31px 32px;
  margin-left: 50px;
  text-align: center;
  padding-top: 5px;
}
.winnerInfo {
  margin: 0 auto;
  text-align: center;
}

.winnerAvatar {
  padding: 8px;
  width: 136px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: rgba(48, 64, 123, 0.2);
}

.winnerAvatar img {
  border-radius: 50%;
}

.winnerName {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.winnerAres {
  width: 200px;
  height: 50px;
  line-height: 55px;
  text-align: center;
  background: #2A4BCC;
  font-size: 22px;
  font-weight: bold;
  border-radius: 31px;
  margin: 0 auto;
}

.tips {
  margin-top: 40px;
  text-align: center;
  font-size: 16px;
  color: #0A133F;
  font-family: Poppins,serif;
}

.aboutBox {
  /*height: 402px;*/
  padding: 50px 0;
  background: #607FF6;
  text-align: center;
}

.aboutBoxTitle {
  font-size: 40px;
  padding-top: 20px;
}

.aboutDesc {
  font-family: Poppins,serif;
  line-height: 28px;
  font-weight: 300;
  font-size: 16px;
  width: 60%;
  margin: 0 auto;
  padding: 0 0 50px 0;
}

.winNow {
  width: 213px;
  height: 54px;
  line-height: 54px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.winNow:before,
.modalBtn:before {
  content: "";
  background-color: rgba(255,255,255,0.5);
  height: 100%;
  width: 3em;
  display: block;
  position: absolute;
  top: 0;
  left: -100px;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}

.winNow:hover, .modalBtn:hover {
  color: #fff;
  border-bottom: 4px solid darken(#0029C0, 10%);
}

.winNow:hover:before, .modalBtn:hover:before {
  transform: skewX(-45deg) translateX(17em);
  transition: all 0.5s ease-in-out;
}


.greekGods {
  height: 537px;
  padding-top: 50px;
  background: #0E174F;
}

.borderDecoration {
  width: 100%;
  overflow: hidden;
  margin-top: -50px;
  img {
    min-width: 100%;
    height: 30px;
    width: auto;
  }
}



.greekGodsTitle {
  height: 42px;
  font-size: 40px;
  font-weight: bold;
  color: #FFFFFF;
  text-align: center;
  margin-top: 20px;
}

.greekGodCard {
  width: 450px !important;
  height: 265px;
  background: #607FF6;
  border: 3px solid #2E1D8F;
  border-radius: 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: #FFFFFF;
  margin: 0 auto;
  padding: 0 10px;
}

.greekGodAvatar {
  border: 4px solid #FFF;
  border-radius: 20px;
  height: 208px;
}

.greekGodAvatar:hover {
  transform: scale(1.1);
}



.greekGodAvatar img {
  width: 200px;
}

.greekGodCardName {
  height: 36px;
  font-size: 34px;
  font-weight: bold;
}

.greekGodCardDesc {
  font-size: 26px;
  height: 27px;
  margin-top: 15px;
  font-weight: bold;
}

.greekGodCardType {
  width: 148px;
  height: 34px;
  line-height: 34px;
  font-size: 21px;
  margin-left: 15px;
  margin-top: 20px;
  background: linear-gradient(84deg, #0025AC 0%, rgba(0, 37, 172, 0) 100%);
}

.greekGodCardType > img {
  width:35px;
  margin-left: -20px;
}

.greekGodCardType > span {
  margin-left: 10px;
}

.greekGodsContent {
  /*display: flex;*/
  /*justify-content: space-around;*/
  margin-top: 50px;
  padding: 0 150px;
}

.footer {
  background: #0E174F;
  text-align: center;
  font-family: Poppins,serif;
  font-size: 13px;
  padding: 10px 0;
}

.aboutTable {
  width: 70%;
  margin: 0 auto;
  background: #FFF;
  margin-top: -80px;
}

.tableUsername {
  display: flex;
  align-items: center;
  column-gap: 10px;
}

.tableUserIndex {
  width: 25px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  background: #E7EBFF;
  border-radius: 50%;
}

.modalContent {
  color: #FFF;
  font-size: 20px;
  font-family: "Moriis roman",serif;
}

.modalBtns {
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
}

.modalBtn {
  overflow: hidden;
  position: relative;
  text-align: center;
  font-family: "Moriis roman",serif;
}
.bottomBtn {
  width: 209px;
  height: 53px;
  line-height: 53px;
  cursor: pointer;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: rgba(0, 0, 0, 0);
}

.el-carousel__item:nth-child(2n+1) {
  background-color: rgba(0, 0, 0, 0);
}

.ant-table-wrapper {
  padding: 0 20px;
}

.shareWrapper {
  color: #FFF;
  text-align: center;
  width: 650px;
  font-family: "Moriis roman",serif;
}

.shareTitle {
  font-size: 35px;
  font-weight: bold;
  img {
    width: 30px;
  }
}

.shareDesc {
  line-height: 23px;
  font-size: 16px;
  font-family: Poppins,serif;
}

.shareApp {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Morris Roman,serif;
  font-weight: bold;
  font-size: 20px;
  column-gap: 10px;
  margin-top: 20px;
  img {
    width: 20px;
    height: 18px;
  }
}

.mediaChannel {
  margin-top:  0;
}

.shareAppItem {
  background: #4B64C9;
  border-radius: 50%;
  border: 1px solid #FFFFFF;
  width: 28px;
  height: 28px;
  line-height: 25px;
  position: relative;
  text-align: center;
}

.selectMedia {
  cursor: pointer;
}

.shareTips {
  font-size: 14px;
  font-family: Poppins,serif;
  font-weight: 300;
  line-height: 23px;
  color: #0025AC;
  text-align: left;
  margin-top: 5px;
}

.sharedIcon {
  position: absolute;
  top: -1px;
  left: -1px;
  width: 28px;
  height: 28px;
  line-height: 28px;
  background: #0025AC;
  opacity: 0.75;
  border-radius: 50%;
}

.linkWrapper {
  text-align: left;
  .ant-input {
    border: 2px solid rgba(10, 19, 63, 0.49);
    background: #4B64C9;
    color: #FFF;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
  }
}

.postImageWrapper {
  display: flex;
  align-items: center;
  column-gap: 15px;
  .upload {
    border: 2px solid rgba(10, 19, 63, 0.49);
    background: #4B64C9;
    color: #FFF;
    height: 48px;
    line-height: 48px;
    font-size: 18px;
    width: 80%;
  }
  .upContent {
    color: #c6c4c4;
    height: 48px;
    line-height: 48px;
    font-size: 17px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding-left: 10px;
  }
}

.postTitle, .linkTitle {
  margin-top: 10px;
  font-size: 16px;
  padding-bottom: 3px;
}

.linkTitle {
  margin-top: 0;
}

.submitShare {
  width: 110px;
  height: 45px;
  line-height: 45px;
  background: #0025AC;
  box-shadow: 1px 5px 0 #001E8A;
  border-radius: 15px;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  cursor: pointer;
  overflow: hidden;
  margin-top: 20px;
}

.uploadBtn {
  width: 125px;
  margin-top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 10px;
  .ant-spin {
    display: flex;
    column-gap: 5px;
    color: #FFF;
  }
}

.accountWrapper {
  display: none;
  width: 341px;
  height: 170px;
  background: #0A133F;
  border: 1px solid #607FF6;
  border-radius: 8px;
  position: absolute;
  left: -85px;
  top: 60px;
  .arrow {
    width: 0;
    height: 0;
    border-left: 17px solid transparent;
    border-right: 17px solid transparent;
    border-bottom: 17px solid #607FF6;
    position: relative;
    margin: 0 auto;
    top: -17px
  }

  .arrow span {
    display: block;
    width: 0;
    height: 0;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    border-bottom: 15px solid #0A133F;
    position: absolute;
    left: -15px;
    top: 2px;
  }

  .accountContent {
    display: flex;
    font-size: 16px;
    padding: 13px 0;
    color: #FFF;
    cursor: default;
    img {
      width: 40px;
      height: 40px;
    }
    .ares {
      width: 104px;
      height: 29px;
      line-height: 29px;
      background: #425ecb;
      border-radius: 31px;
      margin: 15px auto;
    }
  }

  .extract {
    border-right: 1px solid #607FF6;
    width: 50%;
    line-height: 20px;
    .exBtn {
      width: 89px;
      height: 25px;
      line-height: 25px;
      background: #0025AC;
      box-shadow: 1px 3px 0 #001E8A;
      opacity: 1;
      border-radius: 6px;
      margin: 0 auto;
      cursor: pointer;
    }
  }
}

.balanceWrapper {
  width: 50%;
  line-height: 20px;
  text-align: center;
}


.bellAni {
  animation: bellAanimation 5000ms infinite;
}

@keyframes bellAanimation {
  0% { transform: rotate(0deg); }
  8.0% { transform: rotate(0deg); }
  12.0% { transform: rotate(42deg); }
  16.0% { transform: rotate(-35deg); }
  20.0% { transform: rotate(0deg); }
  23.0% { transform: rotate(28deg); }
  26.0% { transform: rotate(-20deg); }
  29.0% { transform: rotate(0deg); }
  31.0% { transform: rotate(16deg); }
  33.0% { transform: rotate(-12deg); }
  35.0% { transform: rotate(0deg); }
  37.0% { transform: rotate(-6deg); }
  39.0% { transform: rotate(0deg); }
  40.0% { transform: rotate(6deg); }
  44.0% { transform: rotate(-3deg); }
  49.0% { transform: rotate(2deg);}
  55.0% { transform: rotate(0deg); }
  62.0% { transform: rotate(1deg); }
  70.0% { transform: rotate(0deg); }
}

@media screen and (max-width: 750px) {
  .boxLogo {
    cursor: pointer;
    width: 180px;
    margin-top: 80px;
    height: 120px;
  }

  .content {
    padding: 0;
  }

  .balance {
    width: 180px;
  }

  .balanceBtn {
    display: flex;
    width: 180px;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    align-items: center;
    border-radius: 25px;
    font-size: 40px;
    padding-bottom: 10px;
    img {
      display: block;
      width: 45px;
      height: 52px;
      margin-top: -20px;
    }
    span:last-child {
      font-size: 15px;
      margin-top: -10px;
    }
  }

  .home > .header {
    height: 591px;
    padding: 0;
  }

  .headerBtn {
    right: 8px;
    top: 30px;
  }

  .messageList {
    width: 330px;
    left: -293px;
  }

  .messageItem {
    width: 300px;
  }

  .arrow {
    left: -4px;
  }

  .messageContent {
    line-height: 18px;
  }

  .cancel {
    width: 15px;
    font-size: 15px;
    right: 4px;
  }

  .connectWallet {
    width: 135px;
    //overflow: hidden;
  }

  .shareBtn {
    font-size: 13px;
    overflow: hidden;
    img {
      display: none;
    }
  }

  .horse {
    height: 606px;
    margin-left: -23px;
  }

  .horse img {
    height: 100px;
  }

  .toPlay {
    padding: 0 10px;
    padding-bottom: 20px;
  }

  .desc {
    margin-top: 10px;
    width: 150px;
  }

  .toPlay .title {
    padding-top: 15px;
  }

  .toPlaySteps {
    display: block;
    margin-top: 10px;
  }
  .stepCard {
    width: 340px;
    padding: 20px;
    margin: 0 auto;
    margin-bottom: 25px;
  }

  .buyAres {
    transform: scale(0.6);
    animation: buyAresPhoneAnimation 4s infinite;
  }

  .shareWrapper {
    width: 290px;
  }

  .uploadBtn {
    width: 152px;
  }

  .leaderboard {
    padding: 0 10px 20px 10px;
  }

  .boardSwitchBtn {
    width: 260px;
  }

  .aboutTable {
    width: 96%;
    display: none;
  }

  .boardCards {
    display: block;
  }

  .boardCard {
    width: 320px;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  .greekGodsContent {
    transform: scale(0.9);
    position: relative;
    z-index: 100;
    padding: 0;
  }

  .greekGodCard {
    width: 374px !important;
    height: 254px;
  }

  .greekGodAvatar {
    border: 7px solid #FFF;
    height: 164px;
    border-radius: 20px;
  }

  .greekGodAvatar img {
    width: 150px;
  }

  .bottomBtn {
    width: 130px;
  }

  .footer {
    padding-bottom: 50px;
  }
}

</style>
