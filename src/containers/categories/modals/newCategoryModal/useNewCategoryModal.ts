function useNewCategoryModal() {
  const handleSubmit = (data: Record<string, any>) => {
    console.log(data);
  };

  return { handleSubmit };
}

export default useNewCategoryModal;
