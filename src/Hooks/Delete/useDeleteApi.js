import supabase from '../../Services/supabase';

export const useDeleteApi = ({ key, id, column = 'id' }) => {
  async function deleteFn() {
    // 1. Create
    const { data, error } = await supabase.from(key).delete().eq(column, id);

    if (error) {
      console.error(error);
      throw new Error(`${key} could not be deleted`, error.message);
    }
    return data;
  }

  return { deleteFn };
};
