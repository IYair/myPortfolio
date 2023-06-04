import { useRouter } from 'next/router';

const ErrorPage = () => {
  const router = useRouter();

  // Obtén el código de error de la URL de consulta (?error=)
  const { error } = router.query;

  return (
    <div>
      <h1>Error Page</h1>
      <p>Error Code: {error}</p>
      {/* Aquí puedes agregar cualquier contenido adicional para la página de error */}
    </div>
  );
};

export default ErrorPage;
