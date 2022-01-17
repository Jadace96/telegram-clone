// vendors
import Parse from 'parse/node';

export const getObjectId = async (className, filterBy, filterValue) => {
  const query = new Parse.Query(className);
  const classData = await query.find();

  const [objectFound] = classData.filter(
    (item) => item.get(filterBy) === filterValue
  );

  return objectFound?.id;
};

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

export const getData = async (className, objectId, options) => {
  const query = new Parse.Query(className);

  return await query.get(objectId, { ...options }).then(
    (data) => ({ data }),
    (error) => ({ error })
  );
};

export const updateData = async ({
  options,
  objectId,
  className,
  dataToUpdate,
}) => {
  const query = new Parse.Query(className);

  try {
    const object = await query.get(objectId);
    object.set(dataToUpdate, options);
    try {
      const data = await object.save();
      return { data };
    } catch (error) {
      console.error('Error while updating Project', error);
      return { error };
    }
  } catch (error) {
    console.error('Error while retrieving object Project', error);
    return { error };
  }
};

export const deleteObject = async (objectId, className) => {
  const query = new Parse.Query(className);
  try {
    // here you put the objectId that you want to delete
    const object = await query.get(objectId);
    try {
      const data = await object.destroy();
      console.log('Deleted ParseObject', data);
      return { data };
    } catch (error) {
      console.error('Error while deleting ParseObject', error);
      return { error };
    }
  } catch (error) {
    console.error('Error while retrieving ParseObject', error);
    return { error };
  }
};
