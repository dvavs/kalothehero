import React from 'react';

/** PageCtx Context Object */
export const PageCtx = React.createContext();

/** PageCtx Context Provider */
export function PageCtxProvider({ children }) {
  const [page, setPage] = React.useState(`home`);

  /** Function to check which page is active to render the page properly */
  const checkPage = () => {
    if (window.location.pathname === `/`) setPage(`home`);
    else if (window.location.pathname === `/about` || window.location.pathname === `/about/`) setPage(`about`);
    else if (window.location.pathname === `/contest` || window.location.pathname === `/contest/`) setPage(`contest`);
    else if (window.location.pathname === `/klassroom` || window.location.pathname === `/klassroom/`) setPage(`klassroom`);
    else if (window.location.pathname === `/media` || window.location.pathname === `/media/`) setPage(`media`);
    else if (window.location.pathname === `/resources` || window.location.pathname === `/resources/`) setPage(`resources`);
    else setPage(`NotFound`);

  }

  /** PageCtx context for the app */
  const ctx = {
    page: page,
    checkPage: checkPage
  }

  // Return the PageCtx.Provider and wrap it around the contents of App.js
  return (
    <PageCtx.Provider value={ctx}>{children}</PageCtx.Provider>
  )
}


export function withCtx(Page) {
  return function WrappedComponent(props) {
    const { checkPage } = React.useContext(PageCtx);
    React.useEffect(() => { checkPage(); });
    return <Page {...props} />;
  }
}
