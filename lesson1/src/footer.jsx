export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return <footer>Copyright Ⓒ {year}</footer>;
}
