function withPremiumAccess(WrappedComponent) {
  return function WithPremiumAccess(props) {
    const isPremium = false;

    return (
      <div className="relative min-h-screen">
        <WrappedComponent {...props} />

        {!isPremium && (
          <div className="absolute inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center">
            <h2 className="text-2xl font-semibold text-white">
              🔒 Faça upgrade para ver isso
            </h2>
          </div>
        )}
      </div>
    );
  };
}

/*O HOC controla o acesso à página e,
quando o usuário não é premium, ele renderiza o conteúdo junto com uma 
camada overlay que aplica blur usando backdrop-filter, criando um efeito 
de paywall visual. */

export default withPremiumAccess;
