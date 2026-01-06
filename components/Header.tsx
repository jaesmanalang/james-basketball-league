import Container from './Container';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="py-3 lg:py-4 lg:px-6 border-b border-sky-300/10">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 lg:gap-4">
            <Logo />
            <div>
              <h1 className="text-2xl font-semiboldtracking-tighter">
                <span className="bg-linear-to-r from-sky-400 via-skye-500 to-sky-600 bg-clip-text text-transparent font-bold">
                  JBL
                </span>{' '}
                HOOPS
              </h1>
              <p className="text-xs lg:text-sm text-orange-400">
                James Basketball League Stats & Records
              </p>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
