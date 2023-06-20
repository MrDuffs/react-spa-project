import React, { memo } from 'react';
import SideLayout from '../../components/side-layout';
import Select from '../../components/select';
import Input from '../../components/input';

function PostsFilter() {
  return (
    <SideLayout>
      <Select />
      <Input />
    </SideLayout>
  );
}

export default memo(PostsFilter);
