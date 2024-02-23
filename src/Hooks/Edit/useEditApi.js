import supabase from '../../Services/supabase';

export const useEditApi = ({ key, column = 'id' }) => {
  async function editFn(newData, id) {
    // 1. Create
    const { data, error } = await supabase
      .from(key)
      .update(newData)
      .eq(column, id)
      .select();

    if (error) {
      console.error(error);
      throw new Error(`Item could not be edited`, error.message);
    }
    return data;
  }

  return { editFn };
};
