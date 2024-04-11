import s from './Loader.module.css'

export const Loader = () => <div className={s.loader}>
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M85.5 45C87.9853 45 90.0234 42.9802 89.7753 40.5073C88.7451 30.2362 84.2053 20.5789 76.8483 13.2087C68.4265 4.77186 57.0013 0.0213989 45.0805 7.20157e-05C33.1597 -0.0212549 21.7176 4.6883 13.2657 13.0949C4.81384 21.5015 0.0429417 32.9183 0.000288062 44.839C-0.0423656 56.7597 4.64671 68.2103 13.0382 76.6772C21.4297 85.1441 32.8379 89.9354 44.7585 89.9994C56.6791 90.0633 68.138 85.3948 76.6199 77.0184C84.0295 69.701 88.6383 60.0765 89.742 49.813C90.0077 47.3419 87.9842 45.3076 85.499 45.2898C83.0137 45.272 81.0136 47.2803 80.6862 49.7439C79.6395 57.6187 76.0081 64.9737 70.296 70.6147C63.5104 77.3158 54.3433 81.0507 44.8068 80.9995C35.2703 80.9483 26.1437 77.1152 19.4306 70.3417C12.7174 63.5682 8.96611 54.4078 9.00023 44.8712C9.03435 35.3346 12.8511 26.2012 19.6126 19.4759C26.3741 12.7506 35.5278 8.983 45.0644 9.00006C54.601 9.01712 63.7412 12.8175 70.4786 19.5669C76.1502 25.2487 79.729 32.6295 80.7192 40.5115C81.029 42.9774 83.0147 45 85.5 45Z" fill="url(#paint0_angular_4_64)" />
        <defs>
            <radialGradient id="paint0_angular_4_64" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) scale(26.25)">
                <stop stop-color="white" stop-opacity="0" />
                <stop offset="1" stop-color="#512DE4" />
            </radialGradient>
        </defs>
    </svg>
</div>
