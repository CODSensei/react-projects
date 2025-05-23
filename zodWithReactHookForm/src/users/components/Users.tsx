import { useForm } from "react-hook-form";
import { Autocomplete, Stack, TextField } from "@mui/material";
import { schema, Schema } from "../types/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import RHFAutoComplete from "../../components/RHFAutoComplete";
function Users() {
  const {
    register,
    formState: { errors },
  } = useForm<Schema>({
    mode: "all",
    resolver: zodResolver(schema),
  });

  return (
    <Stack sx={{ gap: 2 }}>
      <TextField
        {...register("name")}
        label="Name"
        error={!!errors.name}
        helperText={errors.name?.message}
      />
      <TextField
        {...register("email")}
        label="Email"
        error={!!errors.email}
        helperText={errors.email?.message}
      />
      <RHFAutoComplete
        name={"States"}
        label={"States"}
        options={[
          { id: 1, label: "Texas" },
          { id: 2, label: "Georgia" },
          { id: 3, label: "California" },
        ]}
      />
    </Stack>
  );
}

export default Users;
