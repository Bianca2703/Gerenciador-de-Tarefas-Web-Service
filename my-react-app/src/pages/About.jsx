function About() {
  //Sobre o App e o Desenvolvedor
  return (
    <section className="px-6 md:px-16 py-16 space-y-24 shadow">

      {/* INICIAL */}
      <div className="flex justify-center">
        <div className="max-w-3xl text-center bg-slate-200 p-12 md:p-20 shadow-xl
        [border-radius:60%_40%_30%_70%/60%_30%_70%_40%] dark:bg-slate-800">
          <h1 className="text-3xl md:text-4xl font-semibold mb-6 dark:text-white">
            Organização não precisa ser complicada.
          </h1>
          <p className="mb-4 text-slate-700 dark:text-white">
            Este gerenciador de tarefas foi criado para simplificar sua rotina,
            centralizar seus projetos e ajudar você a manter o foco no que realmente importa.
          </p>
          <p className="text-slate-700 dark:text-white">
            Com uma interface limpa e intuitiva, o app transforma planejamento em ação.
            Aqui, você acompanha seu progresso, organiza prioridades e conclui tarefas
            com clareza e eficiência — tudo em um só lugar.
          </p>
        </div>
      </div>


      {/* BLOCO 1 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 bg-slate-200 rounded-2xl h-60 flex items-center justify-center shadow-md dark:bg-slate-800">
          <h2 className="text-2xl font-semibold dark:text-white">Gerencie Tarefas</h2>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="mb-4 text-slate-700 dark:text-white">
            Crie, edite e acompanhe suas tarefas de forma rápida e prática.
          </p>
          <p className="text-slate-700 dark:text-white">
            Menos bagunça mental. Mais produtividade no dia a dia.
          </p>
        </div>
      </div>


      {/* BLOCO 2 */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-10">
        <div className="w-full md:w-1/2 bg-slate-200 rounded-2xl h-60 flex items-center justify-center shadow-md dark:bg-slate-800">
          <h2 className="text-2xl font-semibold dark:text-white">Gerencie Projetos</h2>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="mb-4 text-slate-700 dark:text-white">
            Organize suas tarefas dentro de projetos e tenha uma visão estratégica do seu trabalho.
          </p>
          <p className="text-slate-700 dark:text-white">
            Divida grandes objetivos em etapas menores e acompanhe cada avanço com facilidade.
          </p>
        </div>
      </div>


      {/* BLOCO 3 */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        <div className="w-full md:w-1/2 bg-slate-200 rounded-2xl h-60 flex items-center justify-center shadow-md dark:bg-slate-800">
          <h2 className="text-2xl font-semibold dark:text-white">
            Histórico de Conclusões
          </h2>
        </div>

        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="mb-4 text-slate-700 dark:text-white">
            Visualize tudo o que já foi concluído e acompanhe sua evolução.
          </p>
          <p className="text-slate-700 dark:text-white">
            Planeje. Execute. Conclua. Repita.
          </p>
        </div>
      </div>


      {/* SOBRE */}
      <div className="text-center pt-16">
        <h2 className="text-3xl font-semibold mb-6">
          Sobre a desenvolvedora
        </h2>
        <p className="max-w-2xl mx-auto text-slate-700 dark:text-white">
          Desenvolvido com foco em organização, produtividade e experiência do usuário.
          Cada detalhe foi pensado para tornar o gerenciamento de tarefas simples,
          intuitivo e eficiente.
        </p>
      </div>

    </section>
  );
}

export default About;
