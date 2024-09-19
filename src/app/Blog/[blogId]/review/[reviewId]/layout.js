// we can cutomize layout page for routes like this.

export default function BlogDetailsLayout({ children }) {
  return (
      <>
          {children}
          {/* this will stays fixed for this route */}
          <div>Layout Details Features</div>
      </>
  );
}
