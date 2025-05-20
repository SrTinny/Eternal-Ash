import { useState, useEffect } from 'react';

function Opening({ onFinish }) {
  const [typed, setTyped] = useState('');
  const [index, setIndex] = useState(0);

  const texto = `Você não tem nome. Não tem rosto.
Acorda sob cinzas que nunca tocam o chão.

A cidade diante de você — feita de ruínas e silêncio — parece respirar um lamento eterno.
Não há sol, apenas uma luz cinza que nunca muda.

O ar cheira a passado queimado.

Tudo aqui quer sua morte.
Tudo... menos aqueles que, como você, esqueceram o próprio rosto.

Eles não têm respostas.
Mas têm presença.
E talvez... isso seja o suficiente.

A história começa onde tudo terminou.
Bem-vinda a Eternal Ash.`;

  useEffect(() => {
    if (index < texto.length) {
      const timeout = setTimeout(() => {
        setTyped((prev) => prev + texto.charAt(index));
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => onFinish(), 2000); // Transição automática após fim do texto
    }
  }, [index]);

  return (
    <div className="w-full h-screen bg-black text-white flex items-center justify-center p-10">
      <div className="bg-black/70 p-8 rounded-lg max-w-3xl mx-auto shadow-xl overflow-y-auto max-h-full">
        <pre className="whitespace-pre-wrap font-mono text-lg leading-relaxed">{typed}</pre>
      </div>
    </div>
  );
}

export default Opening;
