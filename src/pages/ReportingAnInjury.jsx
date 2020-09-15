/* eslint-disable react/jsx-indent */
/* eslint-disable prettier/prettier */
import React from 'react';
import {Alert, Button,View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FyvChatBot from '../components/ChatBot';





const ReportingAnInjury = () => {
  const navigation = useNavigation();

  const handleEnd = () => {
   return Alert.alert(
    'Do you want to quit?',
    'All the displayed messages are going to be reseted. Are you sure?',
    [
      {
        text: 'Cancel',
        onPress: () => {},
        style: 'cancel',
      },
      {
        text: 'Yes, quit',
        onPress: () => {
          navigation.goBack();
        },
      },
    ],
    { cancelable: false },
  );
    };

   const steps = [
       {
         id: '0',
         message: 'Welcome to Finding Your Voice',
         trigger: '1',
  
        },
        {
          id: '1',
          message: 'Please provide your answers to the following Educational Scenarios',
           trigger: '2',
         },
        {
         id: '2',
         message: 'Are you ready to begin?',
         trigger: '3',
         },
        {
         id: '3',
         options: [
         { value: 'yes', label: 'YES', trigger: '4' },
         { value: 'no', label: 'NO', trigger: '5' },
        ]},
       {
        id: '4',
        message: 'You slip on a wet floor at work and hurt your wrist.',
        trigger: '6'
        },
        {
          id: '5',
          message: 'Thank you and have a great day',
           trigger: 'end_options'
        },
       {
        id: '6',
        message:'Do you report your injury?',
        trigger:'7'
  },
  {
      id: '7',
     options: [
        { value: 'yes', label: 'YES', trigger: '8' },
        { value: 'no', label: 'NO', trigger: '16' },
         ],},
         {
           id: '8',
           message:'Do you file WCB claim?',
           trigger:'9'
         },
         {
         id: '9',
         options: [
            { value: 'yes', label: 'YES', trigger: '10' },
            { value: 'no', label: 'NO', trigger: '30' },
             ],
            },


    {
      id: '10',
      message:'Injuries at work need to be confirmed by a doctor in Alberta for a WCB claim to be accepted. All these visits are covered by Alberta Health. ',
      trigger:'11'
    }  ,
    {
      id: '11',
      message:'There are also specific clinics that are part of the Occupational Injury Service in Alberta. Injured workers can expect to see a doctor within 30 minutes at these clinics.',
      trigger:'12'
    } ,
    { 
      id: '12',
      message: 'You can find a list of these clinics below',
      trigger: '13'  // replace with learn_more 

    },
    /* add learn more
    {
      id: "learn_more",  
       Component :(
         <View>
           <Button>
             Learn More
           </Button> 
         </View>
         ),
            trigger: 11
    }, */
    {
      id: '13',
      message: 'Although any doctor can fill WCB paperwork, you will often be asked by WCB to go to a specific WCB-Doctor when you make a claim even if you have seen a doctor. ',
      trigger: '14'
    },
    {
      id:'14',
      message: 'Now that you have filed your WCB claim, is the claim accepted?',
      trigger: '15'
    },

    {
      id:'16',
      message:'In Alberta it is your right to report an injury to your employer and to the Workers Compensation Board.',
      trigger:'17'
    },
    {
      id:'17',
      message:'However, there are many reasons why a person doesn\'t want to report an injury to their boss. ',
      trigger:'18'
    },
    {
      id:'18',
      message:'For example, you may fear losing your job or may not want to admit a problem in front of them. ',
      trigger:'19'
    },
    {
      id:'19',
      message:'Similarly, not all injuries are the same. For some, a hurt wrist is a small matter if you know it will heal and you don\'t want to go through the process reporting it.',
      trigger:'20'
    },
    {
      id:'20',
      message:'Be aware that there are consequences for reporting and not reporting an injury.',
      trigger:'21'
    },
    {
      id: '21',
      options:[{ value:'What can happen?', label: ' What can happen?',trigger: '22' },],
    },
    {
      id: '22',
      message:' In an ideal case, if you report an injury an employer will take the correct steps and ensure that you fill out the correct paperwork and receive the appropriate help.',
      trigger:'23'
    },
    {
      id: '23',
      message:'In the worst case, workers have been fired for not reporting an injury and hiding it because hiding the injury was against their workplace policy. ',
      trigger:'24'
    },
    {
      id: '24',
      message:'If such policies exist at your work, be sure to become familiar with them so that you know what can happen in the case of an injury.',
      trigger:'25'
    },
    {
      id: '25',
      message:'According to Alberta Occupational Health and Safety legislation, serious incidents of injury have to be reported to the Alberta government. ',
      trigger:'27'
    },
    {
      id: '27',
      message:'Unless you are admitted to hospital for more than two days because of the injury, you do not have to report this wrist injury to the Alberta government.',
      trigger:'28'
    },
    {
      id: '28',
      message:'For more information on what constitutes a serious injury, see below:',
      trigger:'29'// add learn more after it
    },
    {
      id: '29',
      message: 'Great job! You have completed this section of Injury prevention & Training.', // add  restart button
      trigger: 'end'


    },
    
    {
      id: '30',
      message:'Even if you do not feel your injury is serious enough to report, it is recommended to follow your company\'s policy and notify your manager and fill out any required paper work. ',
      trigger: '29'
    },
   
    {
      id:'15',
      options: [
        { value: 'yes', label: 'YES', trigger: '31' },
        { value: 'no', label: 'NO', trigger: '32' },
         ],
    },

     {
      id:'31',
      message: 'Now you will enter the rehabilitation period. ',
      trigger:'33'
    },
    
    {
      id: '32',
      message:'Let us explore your options.',
      trigger: '37'
    }, 
    {
       id: '33',
       options: [
         { value : 'rehabilitation', label: 'Rehabilitation period?', trigger:'34'},
       ]
    },
    {
      id: '34',
      message :'Rehabilitation is a process that involves you, your employer, WCB and any third-party health providers such as physiotherapists.',
      trigger:'35'
    },
    {
      id: '35',
      message :'According to the Workers Compensation Act, employers are required to get workers back to their regular work duties prior to the injury during rehabilitation.',
      trigger:'36'
    },
    {
      id:'36',
      message:'For more information, see page 49 from the Workers Compensation Act below:',
      trigger :'44'// add learn more after it
    },
    {
      id: '37',
      message:"WCB is an insurance company and this means that they may look for reasons to not accept your claim.",
      trigger:"38"
    },
    {
      id:'38',
      message:"Common reasons that claims are rejected are due to missed paperwork or paperwork that was not completed in time. ",
      trigger: '39'
    },
    {
      id: '39',
      message: 'This means that it is important to fill out the correct paperwork within the 72 hour window if you want to receive WCB help.',
      trigger:'40'
    },
    {
      id:'40',
      message:'If your claim was rejected despite you being injured at work, you can contact the Calgary Workers Resource Centre and Alberta Employment Standards for free help.',
      trigger:'41'
    },
    {
      id:'41',
      message:'Would you like to know the contact information of these organizations?',
      trigger:'42'
    },
  
    {
      id: '42',
      options: [
        { value: 'yes', label: 'YES', trigger: '43' }, // check for yes
        { value: 'no', label: 'NO', trigger:'43' },
      ],
    },
      {
        id: '43',
        message:'Okay, you can find their contact info in our resources page anytime you may need it.',
        trigger:'29'

      },

      {
        id:'44',
        message: 'Rehabilitation will include a mix of time off, therapy and accommodated duties at work. ',
        trigger:'45'
      },
      {
        id:'45',
        message: 'Considering your wrist injury, you will likely be able to have accommodated work. ',
        trigger:'46'
      },
      {
        id:'46',
        message: 'During rehabilitation workers receive a wage replacement from WCB if they are unable to work because of their injury. This wage replacement is not taxed and is 90% of your regular wage. ',
        trigger:'47'
      },
      {
        id:'47',
        message: 'WCB also covers health expense costs that are related to the injury, such as medication and physiotherapy.',
        trigger:'48'
      },
      {
        id:'48',
        message: 'Be aware that due to the costs involved, WCB only looks at one issue at a time even in the case of complex injuries. ',
        trigger:'49'
      },
      {
        id:'49',
        message:'Accommodated duties means being provided work at your regular wage and work that you can do with your injury.',  
        trigger:'50'
      },
      {
        id:'50',
        message: 'Employers may not be able to provide this work and if they cannot, then you will still be compensated by WCB.',
        trigger:'51'
      },
      {
        id:'51',
        message: 'It is also illegal for employers you to lay you off while you are on injury or fire you because of your injury, and employers can face a heavy fine if they do!',
        trigger:'52'
      },
      {
        id:'52',
        message: 'For more information, see page 82 from the Workers Compensation Act below:',
        trigger:'53' // add learn more
      },
      {
        id:'53',
        message: 'Now that the rehabilitation period is over, are you able to return to work?',
        trigger:'54'
      },
      {
        id:'54',
        options: [
          { value: 'yes', label: 'YES', trigger: '55' }, 
          { value: 'no', label: 'NO', trigger:'57' },
        ],

      },
      {
        id:'55',
        message: 'As rehabilitation will include a mix of time off, therapy and accommodated duties at work, you may return to work in a limited or different capacity until you are healed and able to go back to your regular duties.',
        trigger:'56'
      },
      {
        id:'56',
        message: ' If this is the case, then your WCB claim will be closed and you can go back to your job.',
        trigger:'29'
      },
      {
        id:'57',
        message: 'Let\'s explore your options.',
        trigger:'58'
      },
      {
        id:'58',
        message: 'Going through the WCB process can be long, expensive, and can be physically and emotionally draining. ',
        trigger:'59'
      },
      {
        id:'59',
        message: 'According to the Workers Compensation Act, you need to go through this process if an injury took place at work and your injury claim was accepted. ',
        trigger:'60' // add learn more
      },
      {
        id:'60',
        message: 'Due to the costs of rehabilitating workers, employers have been known to bully workers to the point where they want to quit. ',
        trigger:'61'
      },
      {
        id:'61',
        message: 'WCB has also been known to push workers back to work even if they are at risk of re-injuring or not able to work. ',
        trigger:'62'
      },
      {
        id:'62',
        message: 'Furthermore, there are cases where employers try to find reasons to fire employees while you are on workers compensation. ',
        trigger:'63'
      },
      {
        id:'63',
        message: 'As the Workers Compensation Act clearly states that employees cannot be fired due to their injury, there have been cases where employers look for reasons to fire a worker that is non-injury related. ',
        trigger:'64'
      },
      {
        id:'64',
        message: 'For example, they may look for reasons for firing you. Even though this is illegal, this may happen.',
        trigger:'65'
      },
      {
        id:'65',
        message: 'Should this happen, you can always contact the Calgary Workers Resource Centre and Alberta Employment Standards for free help regarding wrongful termination.',
        trigger:'66'
      },
      {
        id:'66',
        message: 'Would you like to know the contact information of these organizations?',
        trigger:'67'
      },
      {
        id: '67',
        options: [
          { value: 'yes', label: 'YES', trigger: '43' }, 
          { value: 'no', label: 'NO', trigger:'29' },
        ],
        
      },
      
    
    {
      id: 'end_options',
      options: [{ value: '0', label: 'QUIT', trigger: 'end' }],
    },
    {
      id: 'end',
      message: 'Bye!',
      end: true,
    },  
  ];
    return <FyvChatBot steps={steps} handleEnd={handleEnd} />;
 };
 export default ReportingAnInjury;
