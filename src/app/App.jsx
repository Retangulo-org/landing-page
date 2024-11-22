import React, { useState } from 'react';
import { LogoTipo } from '../assets/LogoTipo';
import { ArrowUpRight, Calculator, Palette, Settings, Tv, WifiOff, Wind } from 'lucide-react';

const links = [
  { id: 1, title: 'Recursos', url: '#feat' },
  { id: 2, title: 'Aplicativo', url: '#app' }
];

export default function Home() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="bg-neutral-150">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Retangulo.org</span>
              <LogoTipo className="w-20 h-auto" />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-neutral-700"
            >
              <span className="sr-only">Abrir menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>
            <div className="hidden lg:flex lg:gap-x-12">
            {links.map((link) => (
              <a key={link.id} href={link.url} className="text-sm/6 font-semibold text-neutral-900">
                {link.title}
              </a>
            ))}
          </div>
        </nav>
        {isOpen && (
        <div className="lg:hidden">
          <div className="fixed inset-0 z-50"></div>
            <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-neutral-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Retangulo.org</span>
                  <LogoTipo className="w-20 h-auto" />
                </a>
                <button
                onClick={() => setIsOpen(!isOpen)}
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-neutral-700"
                >
                  <span className="sr-only">Fechar menu</span>
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-neutral-500/10">
                  <div className="space-y-2 py-6">
                    {links.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        onClick={() => setIsOpen(!isOpen)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-neutral-900 hover:bg-neutral-50"
                      >
                        {link.title}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <div className="relative flex flex-col lg:flex-row justify-center items-center lg:gap-8 isolate pt-40 pb-28 lg:pt-40 lg:pb-28 px-4 lg:px-8">
        <div className="max-w-2xl">
          <h1 className="text-balance text-5xl font-semibold tracking-tight text-neutral-900 sm:text-6xl">
            Gerador de Cálculos Matemáticos
          </h1>
          <p className="mt-8 text-pretty text-lg font-medium text-neutral-500 sm:text-xl/8">
            Gere contas matemáticas infinitamente, resolva-as no menor tempo possível & treine seu cálculo mental.
          </p>
          <div className="mt-10 flex items-center justify-left gap-x-6">
            <a
              href="https://brain.retangulo.org"
              className="flex flex-row justify-between items-center gap-8 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Começar a calcular
              <ArrowUpRight />
            </a>
          </div>
        </div>
        <img
          src="/images/screenshot.png"
          alt="Product screenshot"
          className="w-[90%] h-auto max-w-none rounded-md shadow-xl ring-1 ring-neutral-400/10 mt-32 lg:mt-0 lg:w-auto lg:h-[20rem]"
        />
      </div>

      {/* Sessão recursos */}
      <div id="feat" className="pb-24 sm:pb-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl lg:text-balance">
              Recursos
            </p>
          </div>
          <div className="mx-auto mt-12 max-w-2xl lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <Calculator className="size-6 text-white" />
                  </div>
                  Diversas operações
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">
                  Adição, subtração, multiplicação, divisão e muito mais.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <Settings className="size-6 text-white" />
                  </div>
                  Configuração da geração
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">
                  Ajuste o gerador como preferir e crie uma configuração única.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <Wind className="size-6 text-white" />
                  </div>
                  Super leve
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">
                  Nosso site consome pouquíssimos dados e carrega super rápido.
                </dd>
              </div>
              <div className="relative pl-16">
                <dt className="text-base/7 font-semibold text-neutral-900">
                  <div className="absolute left-0 top-0 flex size-10 items-center justify-center rounded-lg bg-blue-600">
                    <Palette className="size-6 text-white" />
                  </div>
                  Tema claro e escuro
                </dt>
                <dd className="mt-2 text-base/7 text-neutral-600">
                  Você, como um vampiro, odeia a luz? Então altere para o tema escuro.
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>

      {/* Sessão aplicativo */}
      <div id="app" className="overflow-hidden pb-12 sm:pb-32">
        <div className="flex flex-col justify-center items-center mx-auto max-w-7xl px-6 lg:px-8">
          <div className="w-full flex flex-col sm:flex-row justify-center gap-12">
            <div className="lg:pr-8 lg:pt-4">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-blue-600">Mais que apenas um site</h2>
                <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl">
                  Nosso aplicativo para Android
                </p>
                <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-neutral-600 lg:max-w-none">
                  <div className="relative pl-9">
                    <dt className="inline mr-2 font-semibold text-neutral-900">
                      <WifiOff className="absolute left-1 top-1 size-5 text-blue-600" />
                      Off-line.
                    </dt>
                    <dd className="inline">
                      Mesmo sem internet, o Retangulo funcionará sem problemas.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline mr-2 font-semibold text-neutral-900">
                      <Wind className="absolute left-1 top-1 size-5 text-blue-600" />
                      Leve.
                    </dt>
                    <dd className="inline">
                      O nosso aplicativo consome menos de 100 MB de armazenamento.
                    </dd>
                  </div>
                  <div className="relative pl-9">
                    <dt className="inline mr-2 font-semibold text-neutral-900">
                      <Tv className="absolute left-1 top-1 size-5 text-blue-600" />
                      Sem anúncios invasivos.
                    </dt>
                    <dd className="inline">
                      Sem aqueles anúncios chatos atrapalando o uso do aplicativo.
                    </dd>
                  </div>
                </dl>
                <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="https://github.com/Retangulo-org/webview/releases/download/v1.2/retangulo-v1-2.apk"
                className="w-full flex flex-row justify-between items-center rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Baixar aplicativo
                <ArrowUpRight />
              </a>
            </div>
              </div>
            </div>
            <img
              src="/images/screenshot_android.png"
              alt="Product screenshot"
              className="w-full h-auto max-w-none rounded-xl shadow-xl ring-1 ring-neutral-400/10 sm:w-[20rem] md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
