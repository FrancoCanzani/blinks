interface StandardSchemaV1Issue {
  message: string;
}

export const ErrorMessage = ({
  errors,
}: {
  errors?: string | StandardSchemaV1Issue;
}) => {
  if (!errors) return null;

  const message = typeof errors === "string" ? errors : errors.message;
  return <p className="text-destructive text-sm">{message}</p>;
};
