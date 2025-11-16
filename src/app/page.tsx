import HeaderComponente from "./componentes/HeaderComponent"

export default function Home() {
  return (
    <div>
      <HeaderComponente />
      <p>Hello World!</p>
      <p>#4E2769</p>
      <p>#43A773</p>
      <p>#E04382</p>
      <p>#ED8F32</p>
      <p className="text-beigeCustom">#ECDCD9</p>
      <p className="text-darkPurpleCustom bg-white">#371F31</p>
      <p className="text-purpleCustom font-hagridRegular">esta fonte não tem nûmeros</p>
      <p className="text-greenCustom font-hagridItalic">esta fonte não tem nûmeros</p>
      <p className="text-pinkCustom font-hagridExtraBold">esta fonte não tem nûmeros</p>
      <p className="text-orangeCustom font-hagridExtraBoldItalic">esta fonte não tem nûmeros</p>
    </div>
  );
}
