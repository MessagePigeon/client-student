import { Button } from 'antd';
import React from 'react';
import { useAppSelector } from '../state/hooks';
import { teachersSelector } from '../state/slices/teachers.slice';

const TeacherPage: React.FC = () => {
  const teachers = useAppSelector(teachersSelector);

  return (
    <div>
      {teachers.map(({ id, name }) => (
        <Button key={id} shape="round" className="ml-1 mb-1">
          {name}
        </Button>
      ))}
    </div>
  );
};

export default TeacherPage;
