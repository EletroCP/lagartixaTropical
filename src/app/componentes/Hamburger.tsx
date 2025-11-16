interface HamburgerProps {
  show: boolean;
}


export default function Hamburger({show}: HamburgerProps) {
  return (
    <div className={`bg-black ${show ? 'absolute ' : 'hidden'} top-[7.3rem] ease-in-out w-full`}>
      <ol>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
      </ol>
    </div>
  )
};