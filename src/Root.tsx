import { useRouter } from "./useRouter";

export const Root = () => {
  const { push } = useRouter();

  return (
    <div>
      <h1>Root</h1>
      <button onClick={() => push("/about")}>about</button>
    </div>
  );
};
