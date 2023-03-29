import React, { useContext } from 'react';
import Footer from '../component/footer';
import Header from '../component/Header';
import { resultContext } from '../context/ResultProvider';

function Resulpage() {
  const { finalResult } = useContext(resultContext);

  return (
    <div className='flex flex-col h-screen '>
      <Header />
      <div className="flex flex-col flex-1 items-center">
        <svg width="298" height="224" viewBox="0 0 298 224" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.972 217.148V211.56H7.062L10.626 217.148H14.608L10.538 211.054C12.782 210.306 14.102 208.612 14.102 206.478C14.102 203.2 11.792 201.352 7.81 201.352H1.628V217.148H4.972ZM4.972 204.124H7.656C9.68 204.124 10.758 204.916 10.758 206.478C10.758 208.018 9.68 208.81 7.656 208.81H4.972V204.124ZM21.0344 217.346C23.8944 217.346 25.9404 215.828 26.6004 213.166H23.5644C23.2124 214.332 22.3104 214.992 20.9684 214.992C19.4064 214.992 18.4824 213.936 18.2844 212.022H26.6224C27.1724 208.194 24.7084 205.18 20.9904 205.18C17.6024 205.18 15.1604 207.732 15.1604 211.23C15.1604 214.904 17.5144 217.346 21.0344 217.346ZM20.9244 207.424C22.3764 207.424 23.3004 208.458 23.3884 210.086H18.3284C18.5924 208.348 19.4944 207.424 20.9244 207.424ZM38.5926 213.386C38.5926 211.692 37.4266 210.636 35.1386 210.196L32.8726 209.778C31.8166 209.58 31.3326 209.294 31.3326 208.59C31.3326 207.842 32.0806 207.424 33.2026 207.424C34.5006 207.424 35.3586 208.128 35.4686 209.272H38.3946C38.1746 206.742 36.1506 205.18 33.2026 205.18C30.2766 205.18 28.4066 206.698 28.4066 208.876C28.4066 210.702 29.6826 211.868 31.7946 212.242L33.9066 212.638C35.0286 212.858 35.5126 213.166 35.5126 213.914C35.5126 214.75 34.6106 215.124 33.4226 215.124C31.9046 215.124 30.8706 214.354 30.8486 213.144H27.9226C28.1646 215.762 30.0346 217.368 33.3786 217.368C36.7226 217.368 38.5926 215.85 38.5926 213.386ZM47.8304 212.198C47.8304 213.782 46.7744 214.662 45.6744 214.662C44.4424 214.662 43.6284 213.936 43.6284 212.286V205.4H40.5704V212.88C40.5704 215.938 42.2864 217.368 44.6404 217.368C46.1364 217.368 47.4344 216.642 48.0724 215.608V217.148H50.8664V205.4H47.8304V212.198ZM56.694 217.148V201.352H53.614V217.148H56.694ZM66.7403 214.178C66.3003 214.42 65.7723 214.552 65.2003 214.552C64.1003 214.552 63.4843 214.002 63.4843 212.638V208.018H66.8503V205.4H63.4843V201.924H60.4483V205.4H58.0723V208.018H60.4483V213.342C60.4483 215.982 61.9663 217.368 64.3863 217.368C65.2883 217.368 65.9923 217.214 66.7403 216.84V214.178ZM78.5536 213.386C78.5536 211.692 77.3876 210.636 75.0996 210.196L72.8336 209.778C71.7776 209.58 71.2936 209.294 71.2936 208.59C71.2936 207.842 72.0416 207.424 73.1636 207.424C74.4616 207.424 75.3196 208.128 75.4296 209.272H78.3556C78.1356 206.742 76.1116 205.18 73.1636 205.18C70.2376 205.18 68.3676 206.698 68.3676 208.876C68.3676 210.702 69.6436 211.868 71.7556 212.242L73.8676 212.638C74.9896 212.858 75.4736 213.166 75.4736 213.914C75.4736 214.75 74.5716 215.124 73.3836 215.124C71.8656 215.124 70.8316 214.354 70.8096 213.144H67.8836C68.1256 215.762 69.9956 217.368 73.3396 217.368C76.6836 217.368 78.5536 215.85 78.5536 213.386ZM90.431 217.368C93.841 217.368 96.393 214.684 96.393 211.274C96.393 207.842 93.841 205.18 90.431 205.18C87.021 205.18 84.469 207.842 84.469 211.274C84.469 214.684 87.021 217.368 90.431 217.368ZM90.431 214.662C88.913 214.662 87.615 213.452 87.615 211.274C87.615 209.096 88.913 207.908 90.431 207.908C91.949 207.908 93.247 209.096 93.247 211.274C93.247 213.452 91.949 214.662 90.431 214.662ZM102.18 217.148V208.018H105.238V205.4H102.18V204.828C102.18 204.014 102.73 203.684 103.566 203.684C103.962 203.684 104.402 203.75 104.732 203.882V201.462C104.226 201.242 103.588 201.11 102.84 201.11C100.398 201.11 99.1442 202.43 99.1442 204.762V205.4H96.7682V208.018H99.1442V217.148H102.18ZM115.015 217.148V211.12H120.801V208.238H115.015V204.256H121.879V201.352H111.671V217.148H115.015ZM130.477 217.148H132.963V209.756C132.963 206.874 131.159 205.18 128.079 205.18C125.241 205.18 123.283 206.94 123.107 209.646H125.857C125.967 208.326 126.759 207.556 128.079 207.556C129.355 207.556 130.103 208.326 130.103 209.646V210.35C129.377 210.262 128.805 210.218 128.145 210.218C124.713 210.218 122.865 211.45 122.865 213.738C122.865 215.938 124.493 217.368 126.935 217.368C128.541 217.368 129.707 216.796 130.477 215.696V217.148ZM125.747 213.65C125.747 212.594 126.605 212.044 128.343 212.044C128.871 212.044 129.377 212.088 130.103 212.198V213.034C130.103 214.398 129.157 215.256 127.595 215.256C126.451 215.256 125.747 214.64 125.747 213.65ZM138.656 210.746C138.656 208.854 139.69 207.886 140.9 207.886C142.286 207.886 142.968 208.854 142.968 210.592V217.148H146.004V209.558C146.004 206.72 144.376 205.18 142.022 205.18C140.482 205.18 139.272 205.906 138.414 207.072V205.4H135.598V217.148H138.656V210.746ZM155.857 214.178C155.417 214.42 154.889 214.552 154.317 214.552C153.217 214.552 152.601 214.002 152.601 212.638V208.018H155.967V205.4H152.601V201.924H149.565V205.4H147.189V208.018H149.565V213.342C149.565 215.982 151.083 217.368 153.503 217.368C154.405 217.368 155.109 217.214 155.857 216.84V214.178ZM164.831 217.148H167.317V209.756C167.317 206.874 165.513 205.18 162.433 205.18C159.595 205.18 157.637 206.94 157.461 209.646H160.211C160.321 208.326 161.113 207.556 162.433 207.556C163.709 207.556 164.457 208.326 164.457 209.646V210.35C163.731 210.262 163.159 210.218 162.499 210.218C159.067 210.218 157.219 211.45 157.219 213.738C157.219 215.938 158.847 217.368 161.289 217.368C162.895 217.368 164.061 216.796 164.831 215.696V217.148ZM160.101 213.65C160.101 212.594 160.959 212.044 162.697 212.044C163.225 212.044 163.731 212.088 164.457 212.198V213.034C164.457 214.398 163.511 215.256 161.949 215.256C160.805 215.256 160.101 214.64 160.101 213.65ZM179.874 213.386C179.874 211.692 178.708 210.636 176.42 210.196L174.154 209.778C173.098 209.58 172.614 209.294 172.614 208.59C172.614 207.842 173.362 207.424 174.484 207.424C175.782 207.424 176.64 208.128 176.75 209.272H179.676C179.456 206.742 177.432 205.18 174.484 205.18C171.558 205.18 169.688 206.698 169.688 208.876C169.688 210.702 170.964 211.868 173.076 212.242L175.188 212.638C176.31 212.858 176.794 213.166 176.794 213.914C176.794 214.75 175.892 215.124 174.704 215.124C173.186 215.124 172.152 214.354 172.13 213.144H169.204C169.446 215.762 171.316 217.368 174.66 217.368C178.004 217.368 179.874 215.85 179.874 213.386ZM192.243 205.4H189.185L186.501 213.452L183.553 205.4H180.253L184.873 217.016L183.201 221.394H186.523L192.243 205.4ZM205.596 217.478C206.08 217.478 206.542 217.434 207.004 217.368L209.116 221.152H212.504L209.864 216.312C212.196 214.904 213.714 212.33 213.714 209.228C213.714 204.498 210.172 201.022 205.596 201.022C201.042 201.022 197.522 204.498 197.522 209.228C197.522 213.958 201.042 217.478 205.596 217.478ZM205.596 214.486C202.714 214.486 200.954 212.132 200.954 209.228C200.954 206.324 202.714 204.014 205.596 204.014C208.5 204.014 210.26 206.324 210.26 209.228C210.26 212.132 208.5 214.486 205.596 214.486ZM222.907 212.198C222.907 213.782 221.851 214.662 220.751 214.662C219.519 214.662 218.705 213.936 218.705 212.286V205.4H215.647V212.88C215.647 215.938 217.363 217.368 219.717 217.368C221.213 217.368 222.511 216.642 223.149 215.608V217.148H225.943V205.4H222.907V212.198ZM232.232 202.672C232.232 201.594 231.396 200.824 230.186 200.824C228.998 200.824 228.162 201.594 228.162 202.672C228.162 203.706 228.998 204.476 230.186 204.476C231.396 204.476 232.232 203.706 232.232 202.672ZM231.748 217.148V205.4H228.69V217.148H231.748ZM243.973 217.148V214.486H237.725L243.797 207.908V205.4H233.941V208.04H240.013L233.963 214.684V217.148H243.973ZM254.166 217.148L255.024 213.144H256.828L255.97 217.148H258.28L259.16 213.144H261.448V210.878H259.578L260.106 208.524H262.328V206.192H260.524L261.382 202.276H259.072L258.214 206.192H256.41L257.268 202.276H254.936L254.078 206.192H251.768V208.524H253.638L253.132 210.878H250.888V213.144H252.692L251.834 217.148H254.166ZM255.97 208.524H257.774L257.268 210.878H255.464L255.97 208.524ZM270.163 217.148V202.276H264.289V204.916H267.105V217.148H270.163ZM278.091 217.368C281.831 217.368 283.723 214.838 283.723 212.286C283.723 209.778 282.029 207.336 278.487 207.336C277.607 207.336 276.749 207.556 276.001 208.04L276.463 205.004H282.843V202.276H274.241L272.943 210.614L275.451 211.428C275.913 210.416 276.793 209.932 277.981 209.932C279.785 209.932 280.555 211.12 280.555 212.286C280.555 213.496 279.873 214.64 278.069 214.64C276.683 214.64 275.671 213.914 275.495 212.616H272.437C272.525 215.388 274.923 217.368 278.091 217.368ZM290.682 217.324C294.07 217.324 296.446 215.058 296.446 212.198C296.446 209.382 294.312 207.38 291.276 207.38C291.034 207.38 290.792 207.402 290.55 207.49L294.818 202.276H291.364L286.876 207.688C285.49 209.338 284.94 210.526 284.94 212.396C284.94 215.058 287.294 217.324 290.682 217.324ZM290.704 214.772C289.318 214.772 288.13 213.892 288.13 212.286C288.13 210.548 289.318 209.778 290.704 209.778C292.09 209.778 293.278 210.614 293.278 212.308C293.278 213.892 292.09 214.772 290.704 214.772Z" fill="#191D63" />
          <path d="M195.743 68.3608H98.938V152.049H195.743V68.3608Z" fill="url(#paint0_linear_14_530)" />
          <path d="M193.689 70.4233V149.986H101V70.4233H193.689ZM197.814 66.2983H96.8755V154.111H197.814V66.2983Z" fill="#F0EBE6" />
          <path d="M101 110.205H173.6" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M179.178 3L77 47.8954L87.6066 72.035L189.784 27.1396L179.178 3Z" fill="url(#paint1_linear_14_530)" stroke="#F0EBE6" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M193.417 130.03C204.366 130.03 213.242 121.154 213.242 110.205C213.242 99.2559 204.366 90.3801 193.417 90.3801C182.468 90.3801 173.592 99.2559 173.592 110.205C173.592 121.154 182.468 130.03 193.417 130.03Z" fill="#F0EBE6" stroke="url(#paint2_linear_14_530)" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M193.417 100.239V120.171" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M203.391 110.205H183.451" stroke="#25D366" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M127.805 93.2263C130.28 95.7013 135.725 110.205 135.725 110.205C135.725 110.205 121.246 104.785 118.746 102.285C118.15 101.689 117.678 100.982 117.355 100.203C117.033 99.4245 116.867 98.59 116.867 97.7473C116.867 96.9046 117.033 96.0702 117.355 95.2917C117.678 94.5131 118.15 93.8057 118.746 93.2098C119.95 92.0064 121.582 91.3303 123.284 91.3303C124.127 91.3303 124.961 91.4963 125.739 91.8188C126.518 92.1413 127.225 92.614 127.821 93.2098L127.805 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M143.645 93.2263C141.17 95.7013 135.725 110.205 135.725 110.205C135.725 110.205 150.204 104.785 152.703 102.285C153.299 101.689 153.772 100.982 154.094 100.203C154.417 99.4245 154.583 98.59 154.583 97.7473C154.583 96.9046 154.417 96.0702 154.094 95.2917C153.772 94.5131 153.299 93.8057 152.703 93.2098C152.107 92.614 151.4 92.1413 150.621 91.8188C149.843 91.4963 149.008 91.3303 148.166 91.3303C147.323 91.3303 146.489 91.4963 145.71 91.8188C144.932 92.1413 144.224 92.614 143.628 93.2098L143.645 93.2263Z" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M127.557 127.711L135.725 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M143.892 127.711L135.725 110.205" stroke="#1A1F71" strokeWidth="4.125" strokeMiterlimit="10" />
          <path d="M205.858 64.4173L204.513 71.9413C204.47 72.1358 204.362 72.3097 204.207 72.4344C204.052 72.5591 203.859 72.627 203.659 72.627C203.46 72.627 203.267 72.5591 203.112 72.4344C202.957 72.3097 202.849 72.1358 202.806 71.9413L201.238 64.4586C200.892 62.5856 200.012 60.8523 198.706 59.4665C197.399 58.0808 195.72 57.1014 193.871 56.6458L186.619 55.0701C186.444 55.0141 186.292 54.904 186.183 54.7558C186.075 54.6075 186.017 54.4287 186.017 54.2451C186.017 54.0615 186.075 53.8827 186.183 53.7344C186.292 53.5861 186.444 53.4761 186.619 53.4201L193.821 51.6298C195.656 51.1164 197.304 50.0844 198.567 48.6576C199.83 47.2308 200.654 45.4698 200.941 43.5861L202.286 36.0703C202.329 35.8759 202.437 35.702 202.592 35.5773C202.747 35.4526 202.941 35.3846 203.14 35.3846C203.339 35.3846 203.532 35.4526 203.687 35.5773C203.842 35.702 203.951 35.8759 203.994 36.0703L205.561 43.5531C205.906 45.4276 206.784 47.1626 208.091 48.55C209.398 49.9373 211.078 50.9179 212.928 51.3741L220.18 52.9416C220.355 52.9976 220.507 53.1076 220.616 53.2559C220.724 53.4042 220.782 53.583 220.782 53.7666C220.782 53.9502 220.724 54.129 220.616 54.2773C220.507 54.4255 220.355 54.5356 220.18 54.5916L212.978 56.3901C211.145 56.9023 209.499 57.9319 208.236 59.3555C206.973 60.7792 206.148 62.5366 205.858 64.4173V64.4173Z" fill="url(#paint3_linear_14_530)" />
          <defs>
            <linearGradient id="paint0_linear_14_530" x1="128.234" y1="162.708" x2="166.456" y2="57.6936" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1F71" />
              <stop offset="0.06" stopColor="#313A85" />
              <stop offset="0.14" stopColor="#51609F" />
              <stop offset="0.24" stopColor="#6D80B7" />
              <stop offset="0.34" stopColor="#839AC9" />
              <stop offset="0.46" stopColor="#95AFD8" />
              <stop offset="0.59" stopColor="#A1BDE2" />
              <stop offset="0.74" stopColor="#A8C5E8" />
              <stop offset="1" stopColor="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint1_linear_14_530" x1="126.105" y1="78.8275" x2="140.674" y2="-3.78799" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1A1F71" />
              <stop offset="0.06" stopColor="#313A85" />
              <stop offset="0.14" stopColor="#51609F" />
              <stop offset="0.24" stopColor="#6D80B7" />
              <stop offset="0.34" stopColor="#839AC9" />
              <stop offset="0.46" stopColor="#95AFD8" />
              <stop offset="0.59" stopColor="#A1BDE2" />
              <stop offset="0.74" stopColor="#A8C5E8" />
              <stop offset="1" stopColor="#AAC8EA" />
            </linearGradient>
            <linearGradient id="paint2_linear_14_530" x1="189.622" y1="131.762" x2="197.22" y2="88.6476" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F8654" />
              <stop offset="0.02" stopColor="#1F8C55" />
              <stop offset="0.16" stopColor="#21A65B" />
              <stop offset="0.3" stopColor="#23BA60" />
              <stop offset="0.47" stopColor="#24C863" />
              <stop offset="0.67" stopColor="#25D065" />
              <stop offset="1" stopColor="#25D366" />
            </linearGradient>
            <linearGradient id="paint3_linear_14_530" x1="200.199" y1="72.0568" x2="206.576" y2="35.9301" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1F8654" />
              <stop offset="0.02" stopColor="#1F8C55" />
              <stop offset="0.16" stopColor="#21A65B" />
              <stop offset="0.3" stopColor="#23BA60" />
              <stop offset="0.47" stopColor="#24C863" />
              <stop offset="0.67" stopColor="#25D065" />
              <stop offset="1" stopColor="#25D366" />
            </linearGradient>
          </defs>
        </svg>

        <div className="py-2 flex flex-col flex-1 items-center gap-2">
          <div className="flex px-2 bg-slate-50 w-80 h-14 text-center font-semibold text-2xl py-1">
            <div className="flex  bg-rose-200 rounded-full py-1">
              <svg className="h-12 w-12" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 60"><path d="M27 27q-2.5 0-4.25-1.75T21 21q0-2.5 1.75-4.25T27 15q2.5 0 4.25 1.75T33 21q0 2.5-1.75 4.25T27 27Zm-16 7q-1.25 0-2.125-.875T8 31V11q0-1.25.875-2.125T11 8h32q1.25 0 2.125.875T46 11v20q0 1.25-.875 2.125T43 34Zm5-3h22q0-2.1 1.45-3.55Q40.9 26 43 26V16q-2.1 0-3.55-1.45Q38 13.1 38 11H16q0 2.1-1.45 3.55Q13.1 16 11 16v10q2.1 0 3.55 1.45Q16 28.9 16 31Zm24 9H5q-1.25 0-2.125-.875T2 37V14h3v23h35Zm-29-9V11v20Z" /></svg>
            </div>

            <p className="px-4">
              score gained  :
              {' '}
              {finalResult}
            </p>

          </div>
          <div className="flex px-1 bg-slate-50 w-80 h-14 text-center font-semibold text-2xl py-1">

            <svg className="bg-rose-200 rounded-full" xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" /></svg>
            <p className="px-7">
              score gained  :
              {finalResult / 30}
            </p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Resulpage;
