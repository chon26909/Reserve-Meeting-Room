const Table = () => {
  //   const timeSlotHeader = [
  //     "8.00",
  //     "9.00",
  //     "10.00",
  //     "11.00",
  //     "12.00",
  //     "13.00",
  //     "14.00",
  //     "15.00",
  //     "16.00",
  //     "17.00",
  //   ];

  const timeSlotArray = [
    {
      label: "8.00",
      value: 8,
    },
    {
      label: "9.00",
      value: 9,
    },
    {
      label: "10.00",
      value: 10,
    },
    {
      label: "11.00",
      value: 11,
    },
    {
      label: "12.00",
      value: 12,
    },
    {
      label: "13.00",
      value: 13,
    },
    {
      label: "14.00",
      value: 14,
    },
    {
      label: "15.00",
      value: 15,
    },
    {
      label: "16.00",
      value: 16,
    },
    {
      label: "17.00",
      value: 17,
    },
  ];

  const timeSlot = {
    8: "8.00",
    9: "9.00",
    10: "10.00",
    11: "11.00",
    12: "12.00",
    13: "13.00",
    14: "14.00",
    15: "15.00",
    16: "16.00",
    17: "17.00",
  };

  const data = [
    {
      name: "Room A",
      time: [
        {
          title: "Interview Bossza",
          start: new Date("August 12, 2023 10:00:00"),
          end: new Date("August 12, 2023 12:00:00"),
          duration: 2,
        },

        {
          title: "Interview Bossza",
          start: new Date("August 12, 2023 13:00:00"),
          end: new Date("August 12, 2023 17:00:00"),
          duration: 4,
        },
      ],
    },
    {
      name: "Room B",
      time: [
        {
          title: "Interview Toy",
          start: new Date("August 13, 2023 08:00:00"),
          end: new Date("August 13, 2023 10:00:00"),
          duration: 2,
        },
      ],
    },
  ];

  return (
    <div className="p-5">
      <div className="grid grid-cols-11">
        <div className=""></div>
        {Object.values(timeSlot).map((time, index) => {
          return (
            <div
              key={index}
              className="bg-slate-400 p-5 border text-center text-xl font-bold rounded"
            >
              {time}
            </div>
          );
        })}
      </div>
      {/*  days */}
      {data.map((item, i) => {
        return (
          <div className="grid grid-cols-11" key={i}>
            <div className="bg-slate-400 p-5 border text-center text-xl font-bold rounded">
              {item.name}
            </div>
            {item.time.map((slot, j) => {
              console.log("name", item.name, "time ", slot.start?.getHours());

              if (slot.start?.getHours()) {
              } else {
                console.log("space");
              }

              if (slot.title.length === 0) {
                return (
                  <div className="flex items-center justify-center">
                    <div>ว่าง</div>
                  </div>
                );
              }

              return (
                <div
                  key={j}
                  className={`col-span-${slot.duration} bg-green-500 border rounded-2xl p-4`}
                >
                  {slot.title}
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Table;
