import Container from './Container';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="py-4 px-6 border-b border-sky-300/10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo />
            <div>
              <h1 className="text-2xl font-semibold ml-4 tracking-tighter">
                <span className="bg-linear-to-r from-sky-400 via-skye-500 to-sky-600 bg-clip-text text-transparent font-bold">
                  JBL
                </span>{' '}
                HOOPS
              </h1>
              <p className="text-sm ml-4 text-orange-400">
                James Basketball League Stats & Records
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
