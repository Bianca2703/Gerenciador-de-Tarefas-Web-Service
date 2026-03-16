import { useState } from "react";

function withPremiumAccess(WrappedComponent) {
  return function WithPremiumAccess(props) {
    const [isPremium, setIsPremium] = useState(false);

    return (
      <div className="relative min-h-screen">
        <WrappedComponent {...props} />

        {!isPremium && (
          <div className="absolute inset-0 backdrop-blur-md bg-black/30 flex items-center justify-center flex-col">
            <h2 className="text-2xl font-semibold text-white">
              🔒 Faça upgrade para ver isso
            </h2>
            <button
              onClick={() => setIsPremium(true)}
              className="px-6 py-2 rounded-xl font-semibold 
            bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500
            text-white 
            hover:scale-105 
            transition-all duration-200 
            shadow-md hover:shadow-xl
           dark:from-amber-500 dark:to-orange-600 
           flex items-center gap-2"
            >
              Fazer Upgrade
            </button>
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
