const list = [
  {
    color: "#4485FB",
    svg: `<svg width="30" height="30" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8809 15.7199L11.8809 15.7199C11.3243 15.5531 10.7486 15.4684 10.1681 15.4684H10.0245C8.96961 15.4684 7.93144 15.7491 7.02134 16.2802L1.22137 19.663C1.22135 19.663 1.22134 19.663 1.22132 19.663C1.00937 19.7865 0.880469 20.0129 0.880469 20.2563V27.874C0.880469 28.1245 1.017 28.3549 1.2364 28.4756L1.23663 28.4757C1.33946 28.5319 1.45326 28.56 1.56645 28.56C1.69498 28.56 1.82239 28.5236 1.93431 28.4533L1.93481 28.453L8.21188 24.4582H17.3879C17.5498 24.4582 17.7074 24.4006 17.831 24.2963L17.8311 24.2962L24.8815 18.3298C25.3963 17.8953 25.6917 17.2585 25.6917 16.5834C25.6917 15.3228 24.6654 14.2965 23.4048 14.2965H23.2337C22.7067 14.2965 22.192 14.4803 21.7856 14.8137L17.4203 18.385C17.2425 17.7156 16.7322 17.1752 16.0414 16.9681C16.0414 16.9681 16.0413 16.9681 16.0413 16.9681L11.8809 15.7199ZM23.9959 17.2823L23.9959 17.2823L17.1368 23.0862H8.01224C7.88158 23.0862 7.75424 23.124 7.64442 23.1929L7.64387 23.1932L2.25243 26.6248V20.6501L7.71216 17.4649C7.71218 17.4649 7.71219 17.4649 7.71221 17.4649C8.413 17.0566 9.21247 16.8404 10.0245 16.8404H10.1681C10.6149 16.8404 11.0587 16.9052 11.487 17.0342L11.4871 17.0343L15.6475 18.2824L15.6476 18.2824C15.9281 18.3664 16.116 18.6192 16.116 18.9121C16.116 19.2752 15.8209 19.5703 15.4577 19.5703H11.5281H11.4281V19.6703V20.8423V20.9423H11.5281H16.216C16.3739 20.9423 16.5275 20.8874 16.6501 20.7873L16.6502 20.7872L22.6541 15.8751C22.8174 15.7419 23.0224 15.6684 23.2337 15.6684H23.4048C23.9092 15.6684 24.3197 16.079 24.3197 16.5834C24.3197 16.854 24.2014 17.1085 23.9959 17.2823Z" fill="white" stroke="white" stroke-width="0.2"/>
    <path d="M37.0071 0.405884L37.0551 0.318147C37.2747 0.43826 37.4113 0.66882 37.4113 0.919203V8.53695C37.4113 8.78024 37.2825 9.00665 37.0704 9.12962C37.0703 9.12966 37.0702 9.12972 37.0702 9.12977L31.2704 12.513C31.2704 12.5131 31.2704 12.5131 31.2704 12.5131C30.3608 13.0441 29.3221 13.3248 28.2672 13.3248H28.1237C27.5443 13.3248 26.968 13.2402 26.4108 13.0727L22.2504 11.8246C21.5596 11.6175 21.0493 11.0776 20.8719 10.4078L16.5061 13.9796L16.4427 13.9022L16.506 13.9796C16.0985 14.3129 15.5845 14.4968 15.0581 14.4968H14.887C13.6264 14.4968 12.6001 13.4711 12.6001 12.2099C12.6001 11.5354 12.8948 10.8986 13.4102 10.4629L20.4605 4.49777C20.4605 4.49773 20.4606 4.49768 20.4606 4.49764C20.5843 4.39261 20.742 4.33509 20.9038 4.33509H30.0799L36.3563 0.340856L36.3566 0.340698C36.5688 0.206535 36.835 0.197464 37.0552 0.318199L37.0071 0.405884ZM37.0071 0.405884C37.1946 0.508431 37.3113 0.70532 37.3113 0.919203V8.53695C37.3113 8.74497 37.2011 8.93835 37.02 9.04324L37.0071 0.405884ZM21.6415 8.00601L15.6382 12.9176C15.4744 13.0514 15.2687 13.1248 15.0581 13.1248H14.887C14.3826 13.1248 13.972 12.7143 13.972 12.2099C13.972 11.9399 14.0903 11.6853 14.2959 11.5109L21.1549 5.70705H30.2795C30.4098 5.70705 30.5374 5.67 30.6477 5.60011L30.6479 5.6L36.0393 2.16903V8.14316L30.5795 11.3277L30.6299 11.4141L30.5795 11.3277C29.8787 11.7366 29.0793 11.9528 28.2672 11.9528H28.1237C27.6775 11.9528 27.233 11.888 26.8046 11.7596L22.6443 10.5115C22.3637 10.4269 22.1758 10.174 22.1758 9.8806C22.1758 9.51808 22.4708 9.22293 22.834 9.22293H26.7636H26.8636V9.12293V7.95097V7.85097H26.7636H22.0758C21.9178 7.85097 21.7643 7.90588 21.6416 8.00591L21.6415 8.00601Z" fill="white" stroke="white" stroke-width="0.2"/>
    </svg>
    
`,
  },

  {
    color: "#0457F2",
    svg: `<svg width="30" height="30" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.0525 23.0769L20.0534 23.0762C20.182 22.9827 20.2491 22.8256 20.2279 22.6677C20.2278 22.6674 20.2278 22.6671 20.2278 22.6669L19.3239 16.1327C19.2514 15.6618 19.4081 15.1897 19.737 14.8554L24.312 10.0987L24.3187 10.0917L24.3188 10.0917C24.4308 9.97752 24.4709 9.8089 24.4211 9.6546L24.4209 9.65403C24.3715 9.50087 24.241 9.38759 24.0819 9.36028L24.0755 9.35918L24.0755 9.35916L17.5753 8.19962C17.1052 8.11928 16.7032 7.82147 16.4885 7.39823L16.4739 7.36941L13.3835 1.58951C13.3074 1.44738 13.1603 1.35938 13 1.35938C12.8492 1.35938 12.7101 1.43726 12.6308 1.56483L12.6177 1.58941L9.50537 7.4103C9.28914 7.82718 8.89026 8.12006 8.4247 8.19963L1.92453 9.35916L1.91808 9.3603L1.91808 9.36028C1.75902 9.38758 1.62853 9.50086 1.57916 9.65403L1.57898 9.65461C1.52914 9.8089 1.56926 9.97751 1.68127 10.0917L1.68851 10.0991L1.68848 10.0992L6.25755 14.8558C6.58617 15.19 6.74273 15.662 6.67022 16.1327L5.76619 22.6683C5.76618 22.6684 5.76617 22.6685 5.76615 22.6686C5.7442 22.8284 5.81144 22.986 5.94059 23.0803C6.07058 23.1745 6.24115 23.1895 6.38599 23.1195L20.0525 23.0769ZM20.0525 23.0769C19.9235 23.1709 19.7544 23.1865 19.6113 23.1185C19.6108 23.1183 19.6104 23.118 19.6099 23.1178L13.6619 20.2324C13.2435 20.0294 12.756 20.0294 12.3377 20.2323C12.3377 20.2323 12.3376 20.2323 12.3376 20.2324L6.38636 23.1194L20.0525 23.0769Z" stroke="white" stroke-width="2"/>
    </svg>
    
`,
  },
  {
    color: "#FDAB45",
    svg: `<svg width="36" height="20" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0298 11.8426C21.042 11.8426 23.4931 9.39145 23.4931 6.37932C23.4931 3.36719 21.042 0.916016 18.0298 0.916016C15.0177 0.916016 12.5665 3.36719 12.5665 6.37973C12.5665 9.39226 15.0173 11.8426 18.0298 11.8426ZM18.0298 2.62169C20.1017 2.62169 21.7875 4.30741 21.7875 6.37932C21.7875 8.45123 20.1017 10.1369 18.0298 10.1369C15.9579 10.1369 14.2722 8.45123 14.2722 6.37932C14.2718 4.30741 15.9575 2.62169 18.0298 2.62169Z" fill="white"/>
    <path d="M20.7349 12.3521H15.0817C11.5506 12.3521 8.67822 15.2244 8.67822 18.7556C8.67822 19.2269 9.05953 19.6082 9.53086 19.6082C10.0022 19.6082 10.3835 19.2269 10.3835 18.7556C10.3835 16.1655 12.4913 14.0577 15.0813 14.0577H20.7345C23.3246 14.0577 25.4323 16.1655 25.4323 18.7556C25.4323 19.2269 25.8136 19.6082 26.285 19.6082C26.7563 19.6082 27.1376 19.2269 27.1376 18.7556C27.1384 15.2244 24.266 12.3521 20.7349 12.3521Z" fill="white"/>
    <path d="M7.62353 11.6182C9.95534 11.6182 11.8525 9.72109 11.8525 7.38928C11.8525 5.05828 9.95534 3.16113 7.62353 3.16113C5.29253 3.16113 3.39539 5.05828 3.39539 7.38928C3.39539 9.72109 5.29253 11.6182 7.62353 11.6182ZM7.62353 4.86681C9.01512 4.86681 10.1468 5.9985 10.1468 7.38928C10.1468 8.78087 9.01512 9.91255 7.62353 9.91255C6.23275 9.91255 5.10106 8.78087 5.10106 7.38928C5.10106 5.9985 6.23275 4.86681 7.62353 4.86681Z" fill="white"/>
    <path d="M10.4567 13.1144C10.4567 12.643 10.0754 12.2617 9.60408 12.2617H5.46596C2.75529 12.2617 0.54895 14.4677 0.54895 17.1787C0.54895 17.6501 0.930253 18.0314 1.40159 18.0314C1.87292 18.0314 2.25422 17.6501 2.25422 17.1787C2.25422 15.4083 3.69511 13.9674 5.46556 13.9674H9.60408C10.0754 13.9674 10.4567 13.5857 10.4567 13.1144Z" fill="white"/>
    <path d="M28.3768 11.6182C30.7078 11.6182 32.6049 9.72109 32.6049 7.38928C32.6049 5.05828 30.7078 3.16113 28.3768 3.16113C26.045 3.16113 24.1478 5.05828 24.1478 7.38928C24.1474 9.72109 26.0446 11.6182 28.3768 11.6182ZM28.3768 4.86681C29.7676 4.86681 30.8992 5.9985 30.8992 7.38928C30.8992 8.78087 29.7676 9.91255 28.3768 9.91255C26.9852 9.91255 25.8535 8.78087 25.8535 7.38928C25.8531 5.9985 26.9848 4.86681 28.3768 4.86681Z" fill="white"/>
    <path d="M30.5343 12.2617H26.3962C25.9249 12.2617 25.5436 12.643 25.5436 13.1144C25.5436 13.5857 25.9249 13.967 26.3962 13.967H30.5343C32.3048 13.967 33.7457 15.4079 33.7457 17.1783C33.7457 17.6497 34.127 18.031 34.5983 18.031C35.0696 18.031 35.4509 17.6497 35.4509 17.1783C35.4513 14.4677 33.2454 12.2617 30.5343 12.2617Z" fill="white"/>
    </svg>
    
`,
  },
  {
    color: "#5AC09B",
    svg: `<svg width="30" height="30" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0298 11.8426C21.042 11.8426 23.4931 9.39145 23.4931 6.37932C23.4931 3.36719 21.042 0.916016 18.0298 0.916016C15.0177 0.916016 12.5665 3.36719 12.5665 6.37973C12.5665 9.39226 15.0173 11.8426 18.0298 11.8426ZM18.0298 2.62169C20.1017 2.62169 21.7875 4.30741 21.7875 6.37932C21.7875 8.45123 20.1017 10.1369 18.0298 10.1369C15.9579 10.1369 14.2722 8.45123 14.2722 6.37932C14.2718 4.30741 15.9575 2.62169 18.0298 2.62169Z" fill="white"/>
    <path d="M20.7349 12.3521H15.0817C11.5506 12.3521 8.67822 15.2244 8.67822 18.7556C8.67822 19.2269 9.05953 19.6082 9.53086 19.6082C10.0022 19.6082 10.3835 19.2269 10.3835 18.7556C10.3835 16.1655 12.4913 14.0577 15.0813 14.0577H20.7345C23.3246 14.0577 25.4323 16.1655 25.4323 18.7556C25.4323 19.2269 25.8136 19.6082 26.285 19.6082C26.7563 19.6082 27.1376 19.2269 27.1376 18.7556C27.1384 15.2244 24.266 12.3521 20.7349 12.3521Z" fill="white"/>
    <path d="M7.62353 11.6182C9.95534 11.6182 11.8525 9.72109 11.8525 7.38928C11.8525 5.05828 9.95534 3.16113 7.62353 3.16113C5.29253 3.16113 3.39539 5.05828 3.39539 7.38928C3.39539 9.72109 5.29253 11.6182 7.62353 11.6182ZM7.62353 4.86681C9.01512 4.86681 10.1468 5.9985 10.1468 7.38928C10.1468 8.78087 9.01512 9.91255 7.62353 9.91255C6.23275 9.91255 5.10106 8.78087 5.10106 7.38928C5.10106 5.9985 6.23275 4.86681 7.62353 4.86681Z" fill="white"/>
    <path d="M10.4567 13.1144C10.4567 12.643 10.0754 12.2617 9.60408 12.2617H5.46596C2.75529 12.2617 0.54895 14.4677 0.54895 17.1787C0.54895 17.6501 0.930253 18.0314 1.40159 18.0314C1.87292 18.0314 2.25422 17.6501 2.25422 17.1787C2.25422 15.4083 3.69511 13.9674 5.46556 13.9674H9.60408C10.0754 13.9674 10.4567 13.5857 10.4567 13.1144Z" fill="white"/>
    <path d="M28.3768 11.6182C30.7078 11.6182 32.6049 9.72109 32.6049 7.38928C32.6049 5.05828 30.7078 3.16113 28.3768 3.16113C26.045 3.16113 24.1478 5.05828 24.1478 7.38928C24.1474 9.72109 26.0446 11.6182 28.3768 11.6182ZM28.3768 4.86681C29.7676 4.86681 30.8992 5.9985 30.8992 7.38928C30.8992 8.78087 29.7676 9.91255 28.3768 9.91255C26.9852 9.91255 25.8535 8.78087 25.8535 7.38928C25.8531 5.9985 26.9848 4.86681 28.3768 4.86681Z" fill="white"/>
    <path d="M30.5343 12.2617H26.3962C25.9249 12.2617 25.5436 12.643 25.5436 13.1144C25.5436 13.5857 25.9249 13.967 26.3962 13.967H30.5343C32.3048 13.967 33.7457 15.4079 33.7457 17.1783C33.7457 17.6497 34.127 18.031 34.5983 18.031C35.0696 18.031 35.4509 17.6497 35.4509 17.1783C35.4513 14.4677 33.2454 12.2617 30.5343 12.2617Z" fill="white"/>
    </svg>
    
`,
  },

  {
    color: "#0C3D99",
    svg: `<svg width="24" height="27" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_723_5868)">
    <path d="M7.35176 12.1659L6.03717 13.4532L10.7231 18.0419L17.9629 10.9519L16.6483 9.66455L10.7231 15.4673L7.35176 12.1659Z" fill="white"/>
    <path d="M12 0.89209L11.4526 1.28282C8.11118 3.66811 4.7362 4.94477 1.42204 5.07723L0.530518 5.11279V10.6977C0.530518 17.6642 4.99221 24.0248 11.6305 26.5244L11.9977 26.6635L12.3318 26.5386C18.9937 24.0475 23.4695 17.6811 23.4695 10.6977V5.11279L22.578 5.07723C19.2638 4.94477 15.8888 3.66811 12.5475 1.28282L12 0.89209ZM21.6102 10.6977C21.6102 16.8147 17.7627 22.401 12 24.7094C6.23826 22.4015 2.38982 16.8112 2.38982 10.6977V6.83664C5.59958 6.53392 8.82612 5.29193 12 3.13558C15.1739 5.29193 18.4005 6.53392 21.6102 6.83664V10.6977Z" fill="white"/>
    </g>
    <defs>
    <clipPath id="clip0_723_5868">
    <rect width="23.4975" height="25.7714" fill="white" transform="translate(0.251282 0.89209)"/>
    </clipPath>
    </defs>
    </svg>
    
`,
  },
  {
    color: "#FC6E62",
    svg: `<svg width="30" height="30" viewBox="0 0 34 19" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.36424 7.04999L14.0513 1.44769C15.8741 0.589917 17.8845 0.107422 19.8949 0.107422C21.5568 0.107422 23.2188 0.429086 24.7735 1.0188C24.8271 1.0188 24.9075 1.04561 24.9611 1.07241L25.0683 1.12602C25.1219 1.15283 25.1755 1.17963 25.2292 1.20644L30.3222 3.27045C32.4934 4.15502 33.8873 6.21903 33.8873 8.55109V13.5637C33.8873 14.0194 33.5388 14.3678 33.0831 14.3678H29.7861C29.4108 16.6463 27.4272 18.3886 25.0415 18.3886C22.3878 18.3886 20.2166 16.2174 20.2166 13.5637C20.2166 10.91 22.3878 8.73873 25.0415 8.73873C27.4272 8.73873 29.4108 10.4811 29.7861 12.7595H32.279V8.55109C32.279 6.88916 31.2872 5.38807 29.7324 4.77154L25.2292 2.94878C24.0765 5.60251 21.4228 7.39846 18.4742 7.39846H13.1668C12.7111 7.39846 12.3626 7.04999 12.3626 6.5943C12.3626 6.13861 12.7111 5.79015 13.1668 5.79015H18.4742C20.7527 5.79015 22.8167 4.42307 23.7281 2.35907C22.495 1.93018 21.2084 1.71574 19.8681 1.71574C18.0989 1.71574 16.3298 2.11782 14.7215 2.89517L3.06118 8.49748C2.25702 8.89956 1.72091 9.73052 1.72091 10.6419V12.7863H2.87354C3.24882 10.5079 5.23241 8.76553 7.61808 8.76553C10.2718 8.76553 12.443 10.9368 12.443 13.5905C12.443 16.2442 10.2718 18.4154 7.61808 18.4154C5.23241 18.4154 3.24882 16.6731 2.87354 14.3946H0.916752C0.461063 14.3946 0.112595 14.0462 0.112595 13.5905V10.6151C0.112595 9.114 0.997169 7.69332 2.36424 7.04999ZM25.0415 10.347C23.2724 10.347 21.8249 11.7945 21.8249 13.5637C21.8249 15.3328 23.2724 16.7803 25.0415 16.7803C26.8107 16.7803 28.2582 15.3328 28.2582 13.5637C28.2582 11.7945 26.8107 10.347 25.0415 10.347ZM7.61808 16.7803C9.38723 16.7803 10.8347 15.3328 10.8347 13.5637C10.8347 11.7945 9.38723 10.347 7.61808 10.347C5.84893 10.347 4.40144 11.7945 4.40144 13.5637C4.40144 15.3328 5.84893 16.7803 7.61808 16.7803Z" fill="white"/>
    </svg>
`,
  },
  {
    color: "#FDAB45",
    svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6363 4.37366V5.06786C19.6363 5.45125 19.3255 5.76205 18.9421 5.76205C18.5587 5.76205 18.2479 5.45125 18.2479 5.06786V4.37366H12.6944V5.06786C12.6944 5.45125 12.3836 5.76205 12.0002 5.76205C11.6168 5.76205 11.306 5.45125 11.306 5.06786V4.37366H5.75241V5.06786C5.75241 5.45125 5.44161 5.76205 5.05821 5.76205C4.67482 5.76205 4.36402 5.45125 4.36402 5.06786V4.37366H2.28144C1.89764 4.37366 1.58724 4.68427 1.58724 5.06786V7.15044H22.4131V5.06786C22.4131 4.68427 22.1027 4.37366 21.7189 4.37366H19.6363ZM19.6363 2.98527H21.7189C22.8697 2.98527 23.8015 3.9177 23.8015 5.06786V22.2314C23.8015 23.3815 22.8697 24.3139 21.7189 24.3139H2.28144C1.13064 24.3139 0.198853 23.3815 0.198853 22.2314V5.06786C0.198853 3.9177 1.13064 2.98527 2.28144 2.98527H4.36402V0.90269C4.36402 0.519298 4.67482 0.208496 5.05821 0.208496C5.44161 0.208496 5.75241 0.519298 5.75241 0.90269V2.98527H11.306V0.90269C11.306 0.519298 11.6168 0.208496 12.0002 0.208496C12.3836 0.208496 12.6944 0.519298 12.6944 0.90269V2.98527H18.2479V0.90269C18.2479 0.519298 18.5587 0.208496 18.9421 0.208496C19.3255 0.208496 19.6363 0.519298 19.6363 0.90269V2.98527ZM22.4131 8.53883H1.58724V22.2314C1.58724 22.6149 1.89764 22.9255 2.28144 22.9255H21.7189C22.1027 22.9255 22.4131 22.6149 22.4131 22.2314V8.53883Z" fill="white"/>
</svg>
`,
  },

  {
    color: "#5AC09B",
    svg: `<svg width="30" height="30" viewBox="0 0 36 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.0298 11.8426C21.042 11.8426 23.4931 9.39145 23.4931 6.37932C23.4931 3.36719 21.042 0.916016 18.0298 0.916016C15.0177 0.916016 12.5665 3.36719 12.5665 6.37973C12.5665 9.39226 15.0173 11.8426 18.0298 11.8426ZM18.0298 2.62169C20.1017 2.62169 21.7875 4.30741 21.7875 6.37932C21.7875 8.45123 20.1017 10.1369 18.0298 10.1369C15.9579 10.1369 14.2722 8.45123 14.2722 6.37932C14.2718 4.30741 15.9575 2.62169 18.0298 2.62169Z" fill="white"/>
    <path d="M20.7349 12.3521H15.0817C11.5506 12.3521 8.67822 15.2244 8.67822 18.7556C8.67822 19.2269 9.05953 19.6082 9.53086 19.6082C10.0022 19.6082 10.3835 19.2269 10.3835 18.7556C10.3835 16.1655 12.4913 14.0577 15.0813 14.0577H20.7345C23.3246 14.0577 25.4323 16.1655 25.4323 18.7556C25.4323 19.2269 25.8136 19.6082 26.285 19.6082C26.7563 19.6082 27.1376 19.2269 27.1376 18.7556C27.1384 15.2244 24.266 12.3521 20.7349 12.3521Z" fill="white"/>
    <path d="M7.62353 11.6182C9.95534 11.6182 11.8525 9.72109 11.8525 7.38928C11.8525 5.05828 9.95534 3.16113 7.62353 3.16113C5.29253 3.16113 3.39539 5.05828 3.39539 7.38928C3.39539 9.72109 5.29253 11.6182 7.62353 11.6182ZM7.62353 4.86681C9.01512 4.86681 10.1468 5.9985 10.1468 7.38928C10.1468 8.78087 9.01512 9.91255 7.62353 9.91255C6.23275 9.91255 5.10106 8.78087 5.10106 7.38928C5.10106 5.9985 6.23275 4.86681 7.62353 4.86681Z" fill="white"/>
    <path d="M10.4567 13.1144C10.4567 12.643 10.0754 12.2617 9.60408 12.2617H5.46596C2.75529 12.2617 0.54895 14.4677 0.54895 17.1787C0.54895 17.6501 0.930253 18.0314 1.40159 18.0314C1.87292 18.0314 2.25422 17.6501 2.25422 17.1787C2.25422 15.4083 3.69511 13.9674 5.46556 13.9674H9.60408C10.0754 13.9674 10.4567 13.5857 10.4567 13.1144Z" fill="white"/>
    <path d="M28.3768 11.6182C30.7078 11.6182 32.6049 9.72109 32.6049 7.38928C32.6049 5.05828 30.7078 3.16113 28.3768 3.16113C26.045 3.16113 24.1478 5.05828 24.1478 7.38928C24.1474 9.72109 26.0446 11.6182 28.3768 11.6182ZM28.3768 4.86681C29.7676 4.86681 30.8992 5.9985 30.8992 7.38928C30.8992 8.78087 29.7676 9.91255 28.3768 9.91255C26.9852 9.91255 25.8535 8.78087 25.8535 7.38928C25.8531 5.9985 26.9848 4.86681 28.3768 4.86681Z" fill="white"/>
    <path d="M30.5343 12.2617H26.3962C25.9249 12.2617 25.5436 12.643 25.5436 13.1144C25.5436 13.5857 25.9249 13.967 26.3962 13.967H30.5343C32.3048 13.967 33.7457 15.4079 33.7457 17.1783C33.7457 17.6497 34.127 18.031 34.5983 18.031C35.0696 18.031 35.4509 17.6497 35.4509 17.1783C35.4513 14.4677 33.2454 12.2617 30.5343 12.2617Z" fill="white"/>
    </svg>
    
`,
  },
  {
    color: "#FDAB45",
    svg: `<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.6363 4.37366V5.06786C19.6363 5.45125 19.3255 5.76205 18.9421 5.76205C18.5587 5.76205 18.2479 5.45125 18.2479 5.06786V4.37366H12.6944V5.06786C12.6944 5.45125 12.3836 5.76205 12.0002 5.76205C11.6168 5.76205 11.306 5.45125 11.306 5.06786V4.37366H5.75241V5.06786C5.75241 5.45125 5.44161 5.76205 5.05821 5.76205C4.67482 5.76205 4.36402 5.45125 4.36402 5.06786V4.37366H2.28144C1.89764 4.37366 1.58724 4.68427 1.58724 5.06786V7.15044H22.4131V5.06786C22.4131 4.68427 22.1027 4.37366 21.7189 4.37366H19.6363ZM19.6363 2.98527H21.7189C22.8697 2.98527 23.8015 3.9177 23.8015 5.06786V22.2314C23.8015 23.3815 22.8697 24.3139 21.7189 24.3139H2.28144C1.13064 24.3139 0.198853 23.3815 0.198853 22.2314V5.06786C0.198853 3.9177 1.13064 2.98527 2.28144 2.98527H4.36402V0.90269C4.36402 0.519298 4.67482 0.208496 5.05821 0.208496C5.44161 0.208496 5.75241 0.519298 5.75241 0.90269V2.98527H11.306V0.90269C11.306 0.519298 11.6168 0.208496 12.0002 0.208496C12.3836 0.208496 12.6944 0.519298 12.6944 0.90269V2.98527H18.2479V0.90269C18.2479 0.519298 18.5587 0.208496 18.9421 0.208496C19.3255 0.208496 19.6363 0.519298 19.6363 0.90269V2.98527ZM22.4131 8.53883H1.58724V22.2314C1.58724 22.6149 1.89764 22.9255 2.28144 22.9255H21.7189C22.1027 22.9255 22.4131 22.6149 22.4131 22.2314V8.53883Z" fill="white"/>
</svg>
`,
  },
  {
    color: "#4485FB",
    svg: `<svg width="30" height="30" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.8809 15.7199L11.8809 15.7199C11.3243 15.5531 10.7486 15.4684 10.1681 15.4684H10.0245C8.96961 15.4684 7.93144 15.7491 7.02134 16.2802L1.22137 19.663C1.22135 19.663 1.22134 19.663 1.22132 19.663C1.00937 19.7865 0.880469 20.0129 0.880469 20.2563V27.874C0.880469 28.1245 1.017 28.3549 1.2364 28.4756L1.23663 28.4757C1.33946 28.5319 1.45326 28.56 1.56645 28.56C1.69498 28.56 1.82239 28.5236 1.93431 28.4533L1.93481 28.453L8.21188 24.4582H17.3879C17.5498 24.4582 17.7074 24.4006 17.831 24.2963L17.8311 24.2962L24.8815 18.3298C25.3963 17.8953 25.6917 17.2585 25.6917 16.5834C25.6917 15.3228 24.6654 14.2965 23.4048 14.2965H23.2337C22.7067 14.2965 22.192 14.4803 21.7856 14.8137L17.4203 18.385C17.2425 17.7156 16.7322 17.1752 16.0414 16.9681C16.0414 16.9681 16.0413 16.9681 16.0413 16.9681L11.8809 15.7199ZM23.9959 17.2823L23.9959 17.2823L17.1368 23.0862H8.01224C7.88158 23.0862 7.75424 23.124 7.64442 23.1929L7.64387 23.1932L2.25243 26.6248V20.6501L7.71216 17.4649C7.71218 17.4649 7.71219 17.4649 7.71221 17.4649C8.413 17.0566 9.21247 16.8404 10.0245 16.8404H10.1681C10.6149 16.8404 11.0587 16.9052 11.487 17.0342L11.4871 17.0343L15.6475 18.2824L15.6476 18.2824C15.9281 18.3664 16.116 18.6192 16.116 18.9121C16.116 19.2752 15.8209 19.5703 15.4577 19.5703H11.5281H11.4281V19.6703V20.8423V20.9423H11.5281H16.216C16.3739 20.9423 16.5275 20.8874 16.6501 20.7873L16.6502 20.7872L22.6541 15.8751C22.8174 15.7419 23.0224 15.6684 23.2337 15.6684H23.4048C23.9092 15.6684 24.3197 16.079 24.3197 16.5834C24.3197 16.854 24.2014 17.1085 23.9959 17.2823Z" fill="white" stroke="white" stroke-width="0.2"/>
    <path d="M37.0071 0.405884L37.0551 0.318147C37.2747 0.43826 37.4113 0.66882 37.4113 0.919203V8.53695C37.4113 8.78024 37.2825 9.00665 37.0704 9.12962C37.0703 9.12966 37.0702 9.12972 37.0702 9.12977L31.2704 12.513C31.2704 12.5131 31.2704 12.5131 31.2704 12.5131C30.3608 13.0441 29.3221 13.3248 28.2672 13.3248H28.1237C27.5443 13.3248 26.968 13.2402 26.4108 13.0727L22.2504 11.8246C21.5596 11.6175 21.0493 11.0776 20.8719 10.4078L16.5061 13.9796L16.4427 13.9022L16.506 13.9796C16.0985 14.3129 15.5845 14.4968 15.0581 14.4968H14.887C13.6264 14.4968 12.6001 13.4711 12.6001 12.2099C12.6001 11.5354 12.8948 10.8986 13.4102 10.4629L20.4605 4.49777C20.4605 4.49773 20.4606 4.49768 20.4606 4.49764C20.5843 4.39261 20.742 4.33509 20.9038 4.33509H30.0799L36.3563 0.340856L36.3566 0.340698C36.5688 0.206535 36.835 0.197464 37.0552 0.318199L37.0071 0.405884ZM37.0071 0.405884C37.1946 0.508431 37.3113 0.70532 37.3113 0.919203V8.53695C37.3113 8.74497 37.2011 8.93835 37.02 9.04324L37.0071 0.405884ZM21.6415 8.00601L15.6382 12.9176C15.4744 13.0514 15.2687 13.1248 15.0581 13.1248H14.887C14.3826 13.1248 13.972 12.7143 13.972 12.2099C13.972 11.9399 14.0903 11.6853 14.2959 11.5109L21.1549 5.70705H30.2795C30.4098 5.70705 30.5374 5.67 30.6477 5.60011L30.6479 5.6L36.0393 2.16903V8.14316L30.5795 11.3277L30.6299 11.4141L30.5795 11.3277C29.8787 11.7366 29.0793 11.9528 28.2672 11.9528H28.1237C27.6775 11.9528 27.233 11.888 26.8046 11.7596L22.6443 10.5115C22.3637 10.4269 22.1758 10.174 22.1758 9.8806C22.1758 9.51808 22.4708 9.22293 22.834 9.22293H26.7636H26.8636V9.12293V7.95097V7.85097H26.7636H22.0758C21.9178 7.85097 21.7643 7.90588 21.6416 8.00591L21.6415 8.00601Z" fill="white" stroke="white" stroke-width="0.2"/>
    </svg>
    
`,
  },
];
function generatecategorydisplayhtml(titlex, count, color, svg) {
  return ` <div
    class="flex flex-row  m-5 gap-4 text-mineshaft-900 justify-start items-start w-full rounded-lg text-4xl font-roboto font-medium"
    >
    <div class="p-4 bg-[${color}] rounded-full">
    ${svg}
       
    </div>
    <div class="text-chicago-700 font-roboto font-bold">
    ${count}
      <div class="font-roboto font-normal text-base">
      ${titlex}
      </div>
    </div>
    </div> `;
}

const fetchCategoryCount = async (item) => {
  await fetch(
    `http://localhost:5001/documents/count/category?category=${item.id}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data.count;
    });
};
export const fetchCategory = async () => {
  const y = [];

  const response = fetch(`http://localhost:5001/documents/count/category`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("data", data);
      // Handle the response from the backend
      let x = "";
      data.forEach((item, index) => {
        console.log("item", item, index);

        if (item.category !== "Total") {
          y.push({
            count: item.total_documents,
            category: item.category,
            color: item.color,
          });
          const xy = generatecategorydisplayhtml(
            item.category,
            item.total_documents,
            item.color,
            item.svg
          );
          console.log("xy", xy);
          x = x + xy;
        } else {
          document.getElementById("charttotal").innerHTML =
            item.total_documents;
        }
      });
      console.log(x);
      document.getElementById("category-display").innerHTML = x;

      new Chart(document.getElementById("myChart"), {
        type: "doughnut",
        data: {
          labels: y.map((item) => item.category),
          datasets: [
            {
              backgroundColor: y.map((item) => item.color),
              borderColor: y.map((item) => item.color),
              data: y.map((item) => item.count),
              borderWidth: 0,
              hoverBorderWidth: 12,
              borderAlign: "center",
              borderColor: y.map((item) => item.color),
            },
          ],
        },
        options: {
          responsive: false,
          cutoutPercentage: 65,
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });
    });
};
