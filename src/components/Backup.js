import { useForm } from "react-hook-form";
import { FormGroup, Label, Input } from "./FormComponent";

export const Backup = () => {
  const { register, watch } = useForm();
  const isAuth = watch("useAuth");
  const uri = watch("uri");
  const db = watch("databaseName");
  const u = watch("username");
  const p = watch("password");

  const command = () => {
    let res = "mongodump";
    if (uri) res += ` --uri=${uri}`;
    if (isAuth)
      res += ` ${u ? `--username=${u}` : ""} ${p ? `--password=${p}` : ""}`;
    if (db) res += `  --db=${db}`;
    return res;
  };

  return (
    <section className="w-full p-4 flex flex-col h-full max-w-2xl">
      <form className="mt-4">
        <h1 className="mb-4">Backup a MongoDB database</h1>
        <FormGroup>
          <Label htmlFor="uri">URI</Label>
          <Input
            type="text"
            name="uri"
            register={register("uri")}
            defaultValue="mongodb://"
          />
        </FormGroup>
        <div class="form-group form-check mb-6">
          <input
            type="checkbox"
            class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green-600 checked:border-green-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
            id="useAuth"
            {...register("useAuth")}
          />
          <label
            class="form-check-label inline-block text-gray-800"
            for="useAuth"
          >
            Use authentication
          </label>
        </div>
        <FormGroup>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            name="password"
            register={register("username")}
            disabled={!isAuth}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="hostname">Password</Label>
          <Input
            type="text"
            name="password"
            register={register("password")}
            disabled={!isAuth}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="databaseName">Database Name</Label>
          <Input
            type="text"
            name="databaseName"
            register={register("databaseName")}
          />
        </FormGroup>
      </form>
      <code
        className="bg-slate-900 text-white p-4 rounded-md
      s"
      >
        {command()}
      </code>
    </section>
  );
};
