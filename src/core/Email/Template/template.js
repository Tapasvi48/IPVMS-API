export const template = (url, at) => {
  return `
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" style="min-height:100%;background:#f3f3f3">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body style="min-width:50%;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;box-sizing:border-box;color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;width:100% !important">
<div class="preheader" style="visibility:hidden;opacity:0;color:transparent;height:0;width:0;font-size:0px;mso-hide:all;display:none !important"></div>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta name="viewport" content="width=device-width">
    <style data-roadie-ignore data-immutable="true" type="text/css">
  /*Light*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 200;
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Lt-61d38480cfdf1dfc73d6bd0f459b3e10.eot");
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Lt-61d38480cfdf1dfc73d6bd0f459b3e10.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Lt-4f51497e2f6db6e72599a1f2f484eb7e.woff") format("woff"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Lt-919ae0b65de2f8c6204ec57daeceb9e9.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Lt-ef243dd05072c5987d3abcbe00581224.ttf") format("truetype");
  }

  /*Regular*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 300;
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Rg-909a75677f1cbf6e66c8811e6d39441a.eot");
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Rg-909a75677f1cbf6e66c8811e6d39441a.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Rg-391ee76d399e20117aade2ce1f7e196e.woff") format("woff"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Rg-3ff4006ded0500d605d6eff88ccc59f8.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Rg-190a6e02b3b3d6cfaf3bbe887349adad.ttf") format("truetype");
  }

  /*Medium*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 500;
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Md-ff8747694c95295917ef4c60c2bb6bce.eot");
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Md-ff8747694c95295917ef4c60c2bb6bce.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Md-b9bb7e6d20007be4b0caa86ea7fbd906.woff") format("woff"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Md-dec1db4a099dd1761f19bbe3088de0c8.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Md-2f25e87279c9c202ebf384fae79ac376.ttf") format("truetype");
  }

  /*Bold*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 700;
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bd-7b4c5f071be2fb695c04a1af3a1e0616.eot");
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bd-7b4c5f071be2fb695c04a1af3a1e0616.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bd-20d7bff68cfbfa449bd9601275d29996.woff") format("woff"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bd-32afa6b67d060b665623bbc48ce00187.woff2") format("woff2"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bd-943ebbaff21543f9115cf46427213a47.ttf") format("truetype");
  }

  /*XBold*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 800;
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_XBd-170530db17719eb719c2f03f8ac2a94d.eot");
    src: url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_XBd-170530db17719eb719c2f03f8ac2a94d.eot?#") format("eot"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_XBd-3aea49864b40db534f43dc271460baba.woff") format("woff"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_XBd-66f244ea0cd79026250a9ba89a47a7aa.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_XBd-5d879965b6ea4ac2a31b41647c283433.ttf") format("truetype");
  }

  /*Black*/
  @font-face {
    font-family: 'Cereal';
    font-style: normal;
    font-weight: 900;
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-5e8fbee9505fc68a77d714aa35aee405.eot");
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-5e8fbee9505fc68a77d714aa35aee405.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-36f3fbaecfd0e0f82e83f28a466ce425.woff") format("woff"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-eed38b780704d1a3acbdb4ed930f6cdf.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-a7f958b92f5a7555e9a6d5755e026c6b.ttf") format("truetype");
  }
  @font-face {
    font-family: 'Cereal Black';
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-5e8fbee9505fc68a77d714aa35aee405.eot");
    src: url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-5e8fbee9505fc68a77d714aa35aee405.eot?#") format("eot"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-36f3fbaecfd0e0f82e83f28a466ce425.woff") format("woff"),
      url("https://a1.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-eed38b780704d1a3acbdb4ed930f6cdf.woff2") format("woff2"),
      url("https://a0.muscache.com/airbnb/rookery/fonts/Cereal/Cereal_W_Bk-a7f958b92f5a7555e9a6d5755e026c6b.ttf") format("truetype");
  }
</style>

    
    
    
    <style data-roadie-ignore data-immutable="true">
      @media only screen and (max-width: 596px) {
        .small-float-center {
          margin: 0 auto !important;
          float: none !important;
          text-align: center !important; }
        .small-text-center {
          text-align: center !important; }
        .small-text-left {
          text-align: left !important; }
        .small-text-right {
          text-align: right !important; } }

        @media only screen and (max-width: 596px) {
          table.body table.container .hide-for-large {
            display: block !important;
            width: auto !important;
            overflow: visible !important;
            max-height: none !important; } }

      @media only screen and (max-width: 596px) {
        table.body table.container .row.hide-for-large,
        table.body table.container .row.hide-for-large {
          display: table !important;
          width: 100% !important; } }

      @media only screen and (max-width: 596px) {
        table.body table.container .show-for-large {
          display: none !important;
          width: 0;
          mso-hide: all;
          overflow: hidden; } }

      @media only screen and (max-width: 596px) {
        table.body img {
          width: auto !important;
          height: auto !important; }
        table.body center {
          min-width: 0 !important; }
        table.body .container {
          width: 95% !important; }
        table.body .columns,
        table.body .column {
          height: auto !important;
          -moz-box-sizing: border-box;
          -webkit-box-sizing: border-box;
          box-sizing: border-box;
          padding-left: 16px !important;
          padding-right: 16px !important; }
          table.body .columns .column,
          table.body .columns .columns,
          table.body .column .column,
          table.body .column .columns {
            padding-left: 0 !important;
            padding-right: 0 !important; }
          table.body .columns .column.nested,
          table.body .columns .columns.nested,
          table.body .column .column.nested,
          table.body .column .columns.nested {
            padding-left: 16px !important;
            padding-right: 16px !important; }
        table.body .collapse .columns,
        table.body .collapse .column {
          padding-left: 0 !important;
          padding-right: 0 !important; }
        td.small-1,
        th.small-1 {
          display: inline-block !important;
          width: 8.33333% !important; }
        td.small-2,
        th.small-2 {
          display: inline-block !important;
          width: 16.66667% !important; }
        td.small-3,
        th.small-3 {
          display: inline-block !important;
          width: 25% !important; }
        td.small-4,
        th.small-4 {
          display: inline-block !important;
          width: 33.33333% !important; }
        td.small-5,
        th.small-5 {
          display: inline-block !important;
          width: 41.66667% !important; }
        td.small-6,
        th.small-6 {
          display: inline-block !important;
          width: 50% !important; }
        td.small-7,
        th.small-7 {
          display: inline-block !important;
          width: 58.33333% !important; }
        td.small-8,
        th.small-8 {
          display: inline-block !important;
          width: 66.66667% !important; }
        td.small-9,
        th.small-9 {
          display: inline-block !important;
          width: 75% !important; }
        td.small-10,
        th.small-10 {
          display: inline-block !important;
          width: 83.33333% !important; }
        td.small-11,
        th.small-11 {
          display: inline-block !important;
          width: 91.66667% !important; }
        td.small-12,
        th.small-12 {
          display: inline-block !important;
          width: 100% !important; }
        .columns td.small-12,
        .column td.small-12,
        .columns th.small-12,
        .column th.small-12 {
          display: block !important;
          width: 100% !important; }
        .body .columns td.small-1,
        .body .column td.small-1,
        td.small-1 center,
        .body .columns th.small-1,
        .body .column th.small-1,
        th.small-1 center {
          display: inline-block !important;
          width: 8.33333% !important; }
        .body .columns td.small-2,
        .body .column td.small-2,
        td.small-2 center,
        .body .columns th.small-2,
        .body .column th.small-2,
        th.small-2 center {
          display: inline-block !important;
          width: 16.66667% !important; }
        .body .columns td.small-3,
        .body .column td.small-3,
        td.small-3 center,
        .body .columns th.small-3,
        .body .column th.small-3,
        th.small-3 center {
          display: inline-block !important;
          width: 25% !important; }
        .body .columns td.small-4,
        .body .column td.small-4,
        td.small-4 center,
        .body .columns th.small-4,
        .body .column th.small-4,
        th.small-4 center {
          display: inline-block !important;
          width: 33.33333% !important; }
        .body .columns td.small-5,
        .body .column td.small-5,
        td.small-5 center,
        .body .columns th.small-5,
        .body .column th.small-5,
        th.small-5 center {
          display: inline-block !important;
          width: 41.66667% !important; }
        .body .columns td.small-6,
        .body .column td.small-6,
        td.small-6 center,
        .body .columns th.small-6,
        .body .column th.small-6,
        th.small-6 center {
          display: inline-block !important;
          width: 50% !important; }
        .body .columns td.small-7,
        .body .column td.small-7,
        td.small-7 center,
        .body .columns th.small-7,
        .body .column th.small-7,
        th.small-7 center {
          display: inline-block !important;
          width: 58.33333% !important; }
        .body .columns td.small-8,
        .body .column td.small-8,
        td.small-8 center,
        .body .columns th.small-8,
        .body .column th.small-8,
        th.small-8 center {
          display: inline-block !important;
          width: 66.66667% !important; }
        .body .columns td.small-9,
        .body .column td.small-9,
        td.small-9 center,
        .body .columns th.small-9,
        .body .column th.small-9,
        th.small-9 center {
          display: inline-block !important;
          width: 75% !important; }
        .body .columns td.small-10,
        .body .column td.small-10,
        td.small-10 center,
        .body .columns th.small-10,
        .body .column th.small-10,
        th.small-10 center {
          display: inline-block !important;
          width: 83.33333% !important; }
        .body .columns td.small-11,
        .body .column td.small-11,
        td.small-11 center,
        .body .columns th.small-11,
        .body .column th.small-11,
        th.small-11 center {
          display: inline-block !important;
          width: 91.66667% !important; }
        table.body td.small-offset-1,
        table.body th.small-offset-1 {
          margin-left: 8.33333% !important;
          Margin-left: 8.33333% !important; }
        table.body td.small-offset-2,
        table.body th.small-offset-2 {
          margin-left: 16.66667% !important;
          Margin-left: 16.66667% !important; }
        table.body td.small-offset-3,
        table.body th.small-offset-3 {
          margin-left: 25% !important;
          Margin-left: 25% !important; }
        table.body td.small-offset-4,
        table.body th.small-offset-4 {
          margin-left: 33.33333% !important;
          Margin-left: 33.33333% !important; }
        table.body td.small-offset-5,
        table.body th.small-offset-5 {
          margin-left: 41.66667% !important;
          Margin-left: 41.66667% !important; }
        table.body td.small-offset-6,
        table.body th.small-offset-6 {
          margin-left: 50% !important;
          Margin-left: 50% !important; }
        table.body td.small-offset-7,
        table.body th.small-offset-7 {
          margin-left: 58.33333% !important;
          Margin-left: 58.33333% !important; }
        table.body td.small-offset-8,
        table.body th.small-offset-8 {
          margin-left: 66.66667% !important;
          Margin-left: 66.66667% !important; }
        table.body td.small-offset-9,
        table.body th.small-offset-9 {
          margin-left: 75% !important;
          Margin-left: 75% !important; }
        table.body td.small-offset-10,
        table.body th.small-offset-10 {
          margin-left: 83.33333% !important;
          Margin-left: 83.33333% !important; }
        table.body td.small-offset-11,
        table.body th.small-offset-11 {
          margin-left: 91.66667% !important;
          Margin-left: 91.66667% !important; }
        table.body table.columns td.expander,
        table.body table.columns th.expander {
          display: none !important; }
        table.body .right-text-pad,
        table.body .text-pad-right {
          padding-left: 10px !important; }
        table.body .left-text-pad,
        table.body .text-pad-left {
          padding-right: 10px !important; }
        table.menu {
          width: 100% !important; }
          table.menu td,
          table.menu th {
            width: auto !important;
            display: inline-block !important; }
          table.menu.vertical td,
          table.menu.vertical th, table.menu.small-vertical td,
          table.menu.small-vertical th {
            display: block !important; }
        table.menu[align="center"] {
          width: auto !important; }
        table.button.expand {
          width: 100% !important; } }

      @media only screen and (max-width: 596px) {
        .day-box {
          padding-top: 2vw !important;
          width: 14vw !important;
          height: 14vw !important;
        }
        .icon {
          margin-right: 0.5vw;
          width: 8px !important;
        }
        .icon-container {
          height: 25%;
        }
        .exp-day-label {
          margin-top: 0% !important;
          font-size: 15px;
        }
        .exp-calendar-content {
          min-width: 320px;
          height: 14vw;
        }
      }

      @media only screen and (min-width: 596px) {
        .exp-calendar-content {
          margin-left: auto;
          margin-right: auto;
          width: 78 * 7 + 8;
          height: 78;
        }
        .icon-container {
          height: 35px;
        }
      }

      @media only screen and (max-width: 596px) {
        .calendar-content {
          padding: 0px !important;
          width: 288px !important;
        }

        .not-available-day, .calendar-today, .available-day {
          height: 40px !important;
          width: 40px !important;
        }

        .day-label {
          margin-left: 10% !important;
          margin-top: 0% !important;
          font-size: 15px;
        }
      }

      .gmailfix {
        display: none;
        display: none !important;
      }
    </style>
    
  
    
  
  
   
 <table class="body" style="border-spacing:0;border-collapse:collapse;vertical-align:top;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;background:#f3f3f3;height:100%;width:100%;color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;margin-bottom:0px !important;background-color: white">
      <tr style="padding:0;vertical-align:top;text-align:left">
        <td class="center" align="center" valign="top" style="word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;hyphens:auto;vertical-align:top;color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;border-collapse:collapse !important">
          <center style="width:100%;min-width:580px">
            <!--[if mso]>
              <table class="container" width="580">
            <![endif]-->
            <!--[if !mso]> <!-- -->
              <table class="container" style="border-spacing:0;border-collapse:collapse;padding:0;vertical-align:top;background:#fefefe;width:580px;margin:0 auto;text-align:inherit;max-width:580px;">
            <!-- <![endif]-->
              <tr style="padding:0;vertical-align:top;text-align:left">
                <td style="word-wrap:break-word;-webkit-hyphens:auto;-moz-hyphens:auto;hyphens:auto;vertical-align:top;color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;border-collapse:collapse !important">
                  <div>
<table class="row" style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;position:relative;display:table">
  <tr class="" style="padding:0;vertical-align:top;text-align:left">
    <th class="columns first large-12 last small-12" style="color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-bottom:16px;width:564px;padding-left:16px;padding-right:16px">
      <a href="/" style="font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;line-height:1.3;color:#2199e8;text-decoration:none">
<img align="center" alt="Ex2India" class="center standard-header" height="30"    src="data:image/jpg;base64,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"                         style="outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;width:auto;max-width:100%;clear:both;display:block;border:none;padding-bottom:16px;padding-top:48px;max-height:30px">      </a>
    </th>
  </tr>
</table>
</div>
<div>
<table class="row" style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;position:relative;display:table">
  <tr class="" style="padding:0;vertical-align:top;text-align:left">
    <th class="columns first large-12 last small-12" style="color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-bottom:16px;width:564px;padding-left:16px;padding-right:16px">
      <p class="headline headline-lg  heavy max-width-485" style='padding:0;margin:0;text-align:left;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif;max-width:485px;font-weight:700;color:#484848;word-break:normal;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:32px;line-height:1.3;margin-bottom:0 !important;'>
        Did you change your password?
      </p>
    </th>
  </tr>
</table>
</div>
<div style="padding-bottom:16px">
<table class="row" style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;position:relative;display:table">
  <tr class="" style="padding:0;vertical-align:top;text-align:left">
    <th class="columns first large-12 last small-12" style="color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-bottom:16px;width:564px;padding-left:16px;padding-right:16px">
      <p class="body  body-lg  body-link-rausch light text-left   " style='padding:0;margin:0;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif;font-weight:300;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;text-align:left;margin-bottom:0px !important;'>
We noticed the password for your account was recently changed. If this was you, you can safely disregard this email</p>
    </th>
  </tr>
</table>
</div>
<div>
<table class="row" style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;width:100%;position:relative;display:table">
  <tr class="" style="padding:0;vertical-align:top;text-align:left">
    <th class="columns first large-12 last small-12" style="color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;text-align:left;font-size:16px;line-height:19px;margin:0 auto;padding-bottom:16px;width:564px;padding-left:16px;padding-right:16px">
      <div class="account-alert-card account-alert-card-border" style="border-radius:4px;border-color:#dbdbdb;border-width:1px;border-style:solid">
        <div class="account-alert-card-with-padding" style="padding-top:36px;padding-bottom:20px;padding-left:36px;padding-right:36px">
          <p class="body body-lg bold" style='padding:0;margin:0;text-align:left;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif;font-weight:bold;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important'>
            Changed password
          </p>
        </div>
        <p style='color:#0a0a0a;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;margin-bottom:10px;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif'>
        </p>
        <hr class="full-divider" style="max-width:580px;border-right:0;border-top:0;border-bottom:1px solid #cacaca;border-left:0;margin:20px auto;clear:both;background-color:#dbdbdb;height:1px;border:none;width:100%;margin-top:0;margin-bottom:0">
        <div class="account-alert-card-with-padding" style="padding-top:36px;padding-bottom:20px;padding-left:36px;padding-right:36px">
          <p style='color:#0a0a0a;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;margin-bottom:10px;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif'>
            <span class="body body-lg bold" style="font-weight:bold;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
              When
            </span>
                <span class="body body-lg light" style="font-weight:300;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
             ${at}
            </span>
          </p>
          <p style='color:#0a0a0a;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;margin-bottom:10px;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif'>
            <span class="body body-lg bold" style="font-weight:bold;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
              Where
            </span>
                <span class="body body-lg light" style="font-weight:300;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
             Faridabad
            </span>
          </p>
          <p style='color:#0a0a0a;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;margin-bottom:10px;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif'>
            <span class="body body-lg bold" style="font-weight:bold;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
              Device Type
            </span>
                <span class="body body-lg light" style="font-weight:300;color:#484848;hyphens:none;-moz-hyphens:none;-webkit-hyphens:none;-ms-hyphens:none;font-size:18px;line-height:1.4;margin-bottom:0px !important">
              Chrome
            </span>
          </p>
        </div>
        <hr class="full-divider" style="max-width:580px;border-right:0;border-top:0;border-bottom:1px solid #cacaca;border-left:0;margin:20px auto;clear:both;background-color:#dbdbdb;height:1px;border:none;width:100%;margin-top:0;margin-bottom:0">
        <div class="account-alert-card-button-container" style="padding-top:16px;padding-bottom:16px;padding-left:0px;padding-right:0px">
          <table class="row" style="border-spacing:0;border-collapse:collapse;vertical-align:top;text-align:left;padding:0;position:relative;width:100%;display:table">
            <tr style="padding:0;vertical-align:top;text-align:left">
              <th class="col-pad-left-2 col-pad-right-2" style="color:#0a0a0a;font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;padding:0;margin:0;text-align:left;font-size:16px;line-height:19px;padding-left:16px;padding-right:16px">
                <a href=${url} class="btn-primary btn-sm btn-rausch btn-full-width" style="font-family:'Cereal', Helvetica, Arial, sans-serif;font-weight:normal;margin:0;text-align:left;line-height:1.3;color:#2199e8;text-decoration:none;background-color:#ff5a5f;-webkit-border-radius:4px;border-radius:4px;display:block;padding:19px 24px 19px 24px;">
                  <p class="text-center" style='font-weight:normal;padding:0;margin:0;font-size:16px;line-height:19px;text-align:center;font-family:"Cereal", "Helvetica", Helvetica, Arial, sans-serif;color:white;margin-bottom:0px !important;'>
                    Change Password
                  </p>
                </a>
              </th>
            </tr>
          </table>
        </div>
      </div>
    </th>
  </tr>
</table>
</div>

                </td>
              </tr>
            </table>
          </center>
        </td>
      </tr>
    </table>
    <!-- Gmail on iOS will automatically increase font-size for readability -->
    <!-- http://freshinbox.com/blog/gmail-supports-displaynone-and-gmail-ios-font-fix-update/ -->
  
  

</body>
</html>

`;
};
