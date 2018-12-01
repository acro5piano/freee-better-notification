const style = document.createElement('style');

const styled = {
  div: (...literals) => literals[0],
};

const css = styled.div`
  .notification {
    position: fixed;
    bottom: 64px;
    z-index: 1000;
    width: 300px;
    padding: 12px;
  }
  .notification-inner {
    padding: 8px 12px;
  }
  .hina-spinner {
    margin: 0;
  }
  .support-information,
  .nav-help,
  .support-center {
    display: none !important;
  }
`;

style.type = 'text/css';
style.setAttribute('id', 'freee-=better-notification');
style.appendChild(document.createTextNode(css));

const head =
  document.documentElement || document.head || document.querySelector('head');
head.appendChild(style);
