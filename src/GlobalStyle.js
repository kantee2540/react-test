import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body, .menu-bar{
      background: ${({ theme }) => theme.body};
      color: ${({theme}) => theme.text};
      transition: all 0.1s linear
  }
  .head-link li a, .account li a{
    color: ${({theme}) => theme.text};
  }

  .post, .post-item{
    background-color: ${({ theme }) => theme.postBackground};
  }

  .post-item a{
    color: ${({theme}) => theme.text};
  }

  hr{
    border-color: ${({theme}) => theme.hrColor};
  }

  .modal-content{
    background-color: ${({theme}) => theme.modalBackground};
  }

  .modal-content .close{
    color: ${({theme}) => theme.text};
  }

  .sidebar-link, .setting-link{
    color: ${({theme}) => theme.sidebarlink};
  }

  .sidebar .sidebar-link:hover, .sidebar .active, .setting-link:hover, .head-link li a:hover, .account li a:hover, .post-item a:hover{
    color: ${({theme}) => theme.sidebarlink};
    background-color: ${({theme}) => theme.sidebarlinkhover};
  }

  

`;