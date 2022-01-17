// vendors
import Parse from 'parse/node';

export const createObject = async (className, dataToSave, options) => {
  const newObject = new Parse.Object(className);

  try {
    const data = await newObject.save({ ...dataToSave }, { ...options });
    console.log('Object created', data);
    return { data };
  } catch (error) {
    console.error('Error while creating Object: ', error);
    return { error };
  }
};
