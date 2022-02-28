import { useEffect } from 'react';
import { LogData } from '../models/log.model';
import { setRecords } from '../redux/recordSlice';
import { useSelector, useDispatch } from 'react-redux'
import { getAllRecords, addNewRecord, deleteRecord } from '../services/connectToDB';

export default function useLogData() {

    const records = useSelector(state => state.records.value);
    const dispatch = useDispatch();

    const generateRecordState = (record) => {
        record.changeState = new LogData(
            record._id,
            record.photoLabel,
            record.dateTaken,
            record.url,
            record.city,
            record.country,
            record.likes,
            record.user,
            record.liked_users
        );
    };

    const handleOnDelete = async (e) => {
        await deleteRecord(e.target.id);
        dispatch(setRecords(records.filter((record) => {
            if (record._id === e.target.id) {
                return false;
            } else {
                return true;
            }
        })));
    };

    const handleAddRecord = (newRecord) => {
        return addNewRecord(newRecord);
    };

    useEffect(() => {

        const { fetchResult, controller } = getAllRecords();
        fetchResult.then((data) => {
            const tmp_records = data.map(({ _id, photoLabel, dateTaken, url, city, country, likes, user, liked_users }) => {
                const newLog = new LogData(_id, photoLabel, dateTaken, url, city, country, likes, user, liked_users);
                generateRecordState(newLog);
                return newLog;
            });
            dispatch(setRecords(tmp_records));
        });

        return () => {
            controller.abort();
        }

    }, [dispatch]);

    return { records, generateRecordState, handleAddRecord, handleOnDelete }
}