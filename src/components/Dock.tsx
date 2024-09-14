import { Dock, DockIcon } from "../../public/DockBase";

export default function DockUI() {
  return (
    <div className="fixed bottom-10 w-screen">
      <Dock magnification={60} distance={100}>
        <DockIcon className="bg-black/10 p-3">
          <Icons.eshayat />
        </DockIcon>
        <DockIcon className="bg-black/10 p-3">
          <Icons.snap />
        </DockIcon>
        <DockIcon className="bg-black/10 p-3">
          <Icons.js />
        </DockIcon>
        <DockIcon className="bg-black/10 p-3">
          <Icons.webdev />
        </DockIcon>
        <DockIcon className="bg-black/10 p-3">
          <Icons.ide />
        </DockIcon>
        <DockIcon className="bg-black/10 p-3">
          <Icons.search />
        </DockIcon>
      </Dock>
    </div>
  );
}

const Icons = {
  eshayat: () => (
    <a target="_blank" href="https://eshayat-al-wasiu.vercel.app/">
      <img src="../eshayat.ico" alt="eshayat" />
    </a>
  ),
  snap: () => (
    <a target="_blank" href="https://snap-css.vercel.app/">
      <img src="../snap.png" alt="snap" />
    </a>
  ),
  js: () => (
    <a target="_blank" href="https://note-js-one.vercel.app/">
      <img src="./JS.png" alt="js" />
    </a>
  ),
  webdev: () => (
    <a target="_blank" href="https://web-development-roadmap.vercel.app/">
      <img src="./webdev.png" alt="Webdev" />
    </a>
  ),
  ide: () => (
    <a target="_blank" href="https://eshayat102.github.io/ide/">
      <img className="rounded" src="./ide.png" alt="IDE" />
    </a>
  ),
  search: () => (
    <a target="_blank" href="https://eshayat102.github.io/search/">
      <img src="./search.png" alt="Search" />
    </a>
  ),
};
