describe('First Test', ()=>{
  it('should pass', ()=>{
    expect(1+1).toEqual(2);
  });
  it('should pass as well', ()=>{
    expect(1-1).toEqual(0);
  });
});

describe('Second Test', ()=>{
  it('should fail', ()=>{
    expect(1-1).toEqual(0);
  });
});
