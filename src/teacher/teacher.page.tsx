import { Button } from 'antd';
import React from 'react';
import { useAppSelector } from '../state/hooks';
import { teachersSelector } from '../state/slices/teachers.slice';

const TeacherPage: React.FC = () => {
  const teachers = useAppSelector(teachersSelector);

  if (teachers.length === 0) {
    return (
      <div className="text-3xl text-gray-500 text-center">暂无已绑定教师</div>
    );
  }

  return (
    <>
      {teachers.map(({ id, name }) => (
        <Button key={id} shape="round" className="ml-1 mb-1">
          {name}
        </Button>
      ))}
    </>
  );
};

export default TeacherPage;
