import React from 'react';

const AppIntroductionSection = () => (
  <>
    <div className="bg-amber-default relative p-12 h-full flex flex-col justify-center text-center mb-24">
      <h1 className="font-bold text-3xl pt-6 pb-4 text-gray-900 sm:text-4xl md:pb-16 2xl:text-5xl">
        Cała szkoła w jednej aplikacji<span className="text-emerald-dark">.</span>
      </h1>
      <div className="grid col-span-1 grid-rows-3 gap-y-2.5 md:gap-10 place-items-center md:grid-cols-3 md:grid-rows-1 ">
        <div className="m-1">
          <div className="flex justify-center items-center m-3">
            <div className="h-28 w-28 overflow-hidden flex justify-center items-center border  border-emerald-dark rounded-full bg-emerald-dark">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24">
                <path
                  fill="#000000"
                  d="M12.7913043,0.000921190481 C13.1700421,0.024610814 13.4622585,0.349231578 13.4521739,0.735075786 L13.4521739,0.735075786 L13.4521739,1.76996841 C16.4608696,2.0618612 18,3.72476559 18,6.71445539 L18,6.71445539 L18,14.9847511 C18,18.3105599 16.1043478,20 12.373913,20 L12.373913,20 L5.62608696,20 C1.89565217,20 7.10542736e-15,18.3105599 7.10542736e-15,14.9847511 L7.10542736e-15,14.9847511 L7.10542736e-15,6.71445539 C7.10542736e-15,4.72427726 0.67826087,3.30019425 2.06956522,2.46874206 L2.06956522,2.46874206 L2.16715693,2.41312234 C2.36884406,2.31898498 2.60539781,2.32761318 2.80201659,2.44176226 C3.03140516,2.57493618 3.16686608,2.82876197 3.15169222,3.09698216 C3.13651835,3.36520235 2.97332734,3.6015464 2.73043478,3.70707511 C1.80869565,4.25547975 1.37391304,5.21076525 1.37391304,6.71445539 L1.37391304,6.71445539 L1.37391304,6.97981247 L14.0608696,6.97981247 C14.4402652,6.97981247 14.7478261,7.29266409 14.7478261,7.67858612 C14.7478261,8.06450815 14.4402652,8.37735977 14.0608696,8.37735977 L14.0608696,8.37735977 L1.37391304,8.37735977 L1.37391304,14.9847511 C1.37391304,17.5233339 2.60869565,18.575917 5.62608696,18.5936075 L5.62608696,18.5936075 L12.373913,18.5936075 C15.3478261,18.5936075 16.6173913,17.5144887 16.6173913,14.9759059 L16.6173913,14.9759059 L16.6173913,6.70561015 C16.6173913,4.49430113 15.6521739,3.42402756 13.4521739,3.16751571 L13.4521739,3.16751571 L13.4521739,3.83975366 C13.4014368,4.19806168 13.0930261,4.4596374 12.7373953,4.44598651 C12.3817646,4.43233563 12.093611,4.14786081 12.0695652,3.78668224 L12.0695652,3.78668224 L12.0695652,0.673159134 L12.0822793,0.562556646 C12.1105979,0.417619044 12.1836163,0.284496342 12.2921431,0.183413025 C12.4278015,0.057058878 12.6076087,-0.00867808513 12.7913043,0.000921190481 Z M13.187,14.197 L13.2977157,14.2041252 C13.4875835,14.2279348 13.6656459,14.3150005 13.8031132,14.4534479 C13.9680738,14.6195849 14.0608696,14.8459179 14.0608696,15.0820487 C14.0608696,15.5705576 13.671552,15.9665723 13.1913043,15.9665723 C12.7110567,15.9665723 12.3217391,15.5705576 12.3217391,15.0820487 C12.3217391,14.5935398 12.7110567,14.1975251 13.1913043,14.1975251 L13.187,14.197 Z M9.0173913,14.1975251 L9.12646772,14.2044168 C9.55523028,14.2589978 9.88695652,14.6311174 9.88695652,15.0820487 C9.88695652,15.5705576 9.49763891,15.9665723 9.0173913,15.9665723 C8.5371437,15.9665723 8.14782609,15.5705576 8.14782609,15.0820487 C8.14782609,14.5935398 8.5371437,14.1975251 9.0173913,14.1975251 L9.0173913,14.1975251 Z M4.848,14.197 L4.95858525,14.2041252 C5.14845304,14.2279348 5.3265155,14.3150005 5.46398272,14.4534479 C5.62894339,14.6195849 5.72173913,14.8459179 5.72173913,15.0820487 C5.72173913,15.5705576 5.33242152,15.9665723 4.85217391,15.9665723 C4.3719263,15.9665723 3.9826087,15.5705576 3.9826087,15.0820487 C3.9826087,14.5935398 4.3719263,14.1975251 4.85217391,14.1975251 L4.848,14.197 Z M13.187,10.615 L13.2977157,10.6218046 C13.4875835,10.6456142 13.6656459,10.7326798 13.8031132,10.8711273 C13.9680738,11.0372643 14.0608696,11.2635973 14.0608696,11.4997281 C14.0608696,11.988237 13.671552,12.3842517 13.1913043,12.3842517 C12.7110567,12.3842517 12.3217391,11.988237 12.3217391,11.4997281 C12.3217391,11.0112192 12.7110567,10.6152045 13.1913043,10.6152045 L13.187,10.615 Z M9.0173913,10.6152045 L9.12646772,10.6220962 C9.55523028,10.6766771 9.88695652,11.0487968 9.88695652,11.4997281 C9.88695652,11.988237 9.49763891,12.3842517 9.0173913,12.3842517 C8.5371437,12.3842517 8.14782609,11.988237 8.14782609,11.4997281 C8.14782609,11.0112192 8.5371437,10.6152045 9.0173913,10.6152045 L9.0173913,10.6152045 Z M4.848,10.615 L4.95858525,10.6218046 C5.14845304,10.6456142 5.3265155,10.7326798 5.46398272,10.8711273 C5.62894339,11.0372643 5.72173913,11.2635973 5.72173913,11.4997281 C5.72173913,11.988237 5.33242152,12.3842517 4.85217391,12.3842517 C4.3719263,12.3842517 3.9826087,11.988237 3.9826087,11.4997281 C3.9826087,11.0112192 4.3719263,10.6152045 4.85217391,10.6152045 L4.848,10.615 Z M5.23913043,0.106447383 C5.5932794,0.106447383 5.89090164,0.377086205 5.93043478,0.735075786 L5.93043478,0.735075786 L5.93043478,1.69920652 L9.86086957,1.69920652 C10.2402652,1.69920652 10.5478261,2.01205814 10.5478261,2.39798017 C10.5478261,2.7839022 10.2402652,3.09675382 9.86086957,3.09675382 L9.86086957,3.09675382 L5.91304348,3.09675382 L5.91304348,3.79552747 C5.9130582,3.98239654 5.83949018,4.16148607 5.70877399,4.29278881 C5.57805779,4.42409155 5.40108546,4.49666656 5.2173913,4.49430113 L5.2173913,4.49430113 L5.11694017,4.48426677 C4.78964175,4.42674447 4.54338377,4.13445405 4.54776707,3.78668224 L4.54776707,3.78668224 L4.54776707,0.735075786 L4.56718412,0.630482723 C4.64744894,0.325664829 4.92039637,0.106447383 5.23913043,0.106447383 Z"
                  transform="translate(3 2)"
                />
              </svg>
            </div>
          </div>
          <p className="text-lg pt-2 2xl:text-xl">
            Napotkałeś jakiś problem, nie wiesz co zrobić? Umów się na rozmowę z psychologiem szkolnym, wystarczy tylko 1 kliknięcie!
          </p>
        </div>
        <div className="">
          <div className="flex justify-center items-center m-3">
            <div className="h-28 w-28 overflow-hidden  border  border-emerald-dark rounded-full bg-emerald-dark">
              <div className="p-2 flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 1792 1792">
                  <path d="M896 384q-204 0-381.5 69.5t-282 187.5-104.5 255q0 112 71.5 213.5t201.5 175.5l87 50-27 96q-24 91-70 172 152-63 275-171l43-38 57 6q69 8 130 8 204 0 381.5-69.5t282-187.5 104.5-255-104.5-255-282-187.5-381.5-69.5zm896 512q0 174-120 321.5t-326 233-450 85.5q-70 0-145-8-198 175-460 242-49 14-114 22h-5q-15 0-27-10.5t-16-27.5v-1q-3-4-.5-12t2-10 4.5-9.5l6-9 7-8.5 8-9q7-8 31-34.5t34.5-38 31-39.5 32.5-51 27-59 26-76q-157-89-247.5-220t-90.5-281q0-174 120-321.5t326-233 450-85.5 450 85.5 326 233 120 321.5z" />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-lg pt-2  2xl:text-xl">
            Potrzebujesz pilnie coś porzyczyć, bądź chcesz napisać anonimową wiadomość, którą każdy zobaczy? Skorzystaj ze szkolnej tablicy i spotted.
            <strong> PS, nauczyciele tego nie widzą!</strong>
          </p>
        </div>
        <div className="m-1">
          <div className="flex justify-center items-center m-3">
            <div className="h-28 w-28 overflow-hidden items-center border border-emerald-dark rounded-full bg-emerald-dark ">
              <div className="p-2">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
                  <path
                    fill="#222"
                    d="M42.7285,37.022c-6.18,0-8.9287-5.83-9.2685-9.7476-.19-2.1738-.6329-7.2661,2.34-10.5093a8.9658,8.9658,0,0,1,6.9287-2.6567,1.5,1.5,0,0,1,0,3,6.0437,6.0437,0,0,0-4.7178,1.6841c-2.081,2.27-1.7177,6.4409-1.5625,8.2217.17,1.95,1.628,7.0078,6.28,7.0078a1.5,1.5,0,0,1,0,3Z"
                  />
                  <path
                    fill="#222"
                    d="M42.7285 37.022a1.5 1.5 0 0 1 0-3c4.6514 0 6.11-5.0586 6.28-7.0078.1543-1.7808.5166-5.9532-1.5645-8.2222a6.04 6.04 0 0 0-4.7158-1.6836 1.5 1.5 0 0 1 0-3 8.9665 8.9665 0 0 1 6.9278 2.6558c2.9716 3.2417 2.53 8.3349 2.3408 10.51C51.6563 31.1929 48.9063 37.022 42.7285 37.022zM25.0371 54.65A1.5 1.5 0 0 1 23.55 53.33c-.5391-4.4824.0264-7.6875 1.7275-9.7974 1.3711-1.7007 3.417-2.6572 6.2559-2.9248 5.0381-.4756 6.4863-1.8545 6.2-5.9013a1.5 1.5 0 1 1 2.9922-.212c.5117 7.2295-4.2168 8.6568-8.9111 9.1-2.0176.19-3.3536.77-4.2012 1.8212-1.1514 1.4273-1.5156 3.97-1.085 7.5562A1.5009 1.5009 0 0 1 25.0371 54.65z"
                  />
                  <path
                    fill="#222"
                    d="M60.3047 54.1426c-.0459 0-.0918-.002-.1377-.0064a1.5 1.5 0 0 1-1.3584-1.6294c.6328-6.956-1.5078-8.5678-5.166-8.913-4.6934-.4424-9.4229-1.87-8.9121-9.1a1.5 1.5 0 0 1 2.9922.212c-.2862 4.0468 1.163 5.4257 6.2011 5.9013 7.98.753 8.3155 7.3067 7.8731 12.1709A1.501 1.501 0 0 1 60.3047 54.1426zM18.6709 28.6694c-5.3506 0-7.73-5.0268-8.0234-8.4057-.1621-1.8579-.54-6.2085 2.0283-9.0093a7.7583 7.7583 0 0 1 5.9951-2.3086 1.5 1.5 0 0 1 0 3 4.8531 4.8531 0 0 0-3.7842 1.3359c-1.6758 1.8287-1.3779 5.2579-1.251 6.7222.1368 1.5757 1.3086 5.6655 5.0352 5.6655a1.5 1.5 0 0 1 0 3z"
                  />
                  <path
                    fill="#222"
                    d="M18.6709,28.6694a1.5,1.5,0,0,1,0-3c3.7256,0,4.8975-4.09,5.0342-5.6655.1162-1.3384.4267-4.8921-1.25-6.7217a4.85,4.85,0,0,0-3.7842-1.3364,1.5,1.5,0,0,1,0-3,7.7561,7.7561,0,0,1,5.9961,2.31c2.5684,2.8022,2.1885,7.1513,2.0264,9.0088C26.4,23.6426,24.0215,28.6694,18.6709,28.6694Z"
                  />
                  <path
                    fill="#222"
                    d="M3.8125 43.4741a1.5 1.5 0 0 1-1.4873-1.3213c-.46-3.833.0322-6.583 1.5039-8.4082a7.443 7.443 0 0 1 5.417-2.5434c4.1514-.3916 5.2236-1.4019 4.99-4.7a1.5 1.5 0 1 1 2.9922-.2119c.4453 6.2778-3.6435 7.5156-7.7012 7.8979a4.5931 4.5931 0 0 0-3.3632 1.44c-.9239 1.1465-1.2139 3.2212-.86 6.1675a1.5 1.5 0 0 1-1.4912 1.6787zM33.4316 43.0479c-.0459 0-.0918-.002-.1377-.0064a1.5 1.5 0 0 1-1.3584-1.6294c.57-6.2593-1.625-6.9888-4.122-7.2246-4.0576-.3823-8.1446-1.62-7.7012-7.8975a1.5 1.5 0 0 1 2.9922.211c-.2324 3.2983.84 4.3086 4.99 4.7 6.917.6518 7.21 6.2949 6.8291 10.4824A1.501 1.501 0 0 1 33.4316 43.0479z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <p className="text-lg pt-2 2xl:text-xl">
            Dzięki naszej aplikacji będziesz mógł zapoznać się ze wszystkimi osobami o podobnych zainteresowaniach w twojej szkole!
          </p>
        </div>
      </div>
    </div>
    <div className="hidden md:block h-24 bg-white w-screen opacity-50 shadow-inner"></div>
  </>
);

export default AppIntroductionSection;
