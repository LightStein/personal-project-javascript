import { PupilsModel, TeachersModel, SubjectsModel, LMSModel, GroupsModel, GradebooksModel } from './school/index';
const log = console.log;





( async() => {

    // teacher
    const teachers = new TeachersModel();
    const teacherId = await teachers.add({"first":"Eurus", "last":"Holmes"},"Eurus.jpg", "06/06/1985", [{"email":"eurus221b@protonmail.com", "primary":false},{"mail":"eurus.holmes@britishmail.uk","primary":true}], [{"phone":"18763211","primary":true}], "female", [{"subject":"Philosophy"},{"subject":"Math"}]);
    // log( await teachers.read(teacherId));
    await teachers.remove(teacherId)


    // pupil
    const pupils = new PupilsModel();
    const pupilId = await pupils.add({"first":"Henry", "last":"Wellington"}, "H.jpg", "20/01/2003", [{"phone":"12345697", "primary":true}], "male");
    await pupils.update(pupilId, {"first":"George", "last":"Wellington"}, "H.jpg", "20/01/2003", [{"phone":"12345697", "primary":true}], "male")
    // log( await pupils.read(pupilId))
    // await pupils.remove(pupilId)

    // subject
    const history = new SubjectsModel({
        title: 'History',
        lessons: 24
    });

    // LMS
    const lms = new LMSModel();
    await lms.add(history);
    // log(await lms.readAll());
    
    // Groups
    const room = 236;
    const groups = new GroupsModel();
    const groupId = await groups.add(room);
    await groups.addPupil(groupId, pupilId);
    await groups.update(groupId, {
        room: 237
      });
    // log(await groups.read(groupId));

    // log(await groups.readAll())

    const gradebooks = new GradebooksModel(groups, teachers, lms);

    const level = 1;
    const gradebookId = await gradebooks.add(level, groupId);
    
    

    const record = {
        pupilId: pupilId,
        teacherId: teacherId,
        subjectId: history.id,
        lesson: 1,
        mark: 9
      };
      await gradebooks.addRecord(gradebookId, record);

      log(gradebooks.gradebooks)
})()