﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace MessagePigeonClientStudentPopup
{
    public partial class Form2 : Form
    {
        public string TeacherName;
        public string Message;
        public uint DelayTime;

        public Form2(string teacherName, string message, uint delayTime)
        {
            TeacherName = teacherName;
            Message = message;
            DelayTime = delayTime;
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            label1.MaximumSize = new Size(Screen.PrimaryScreen.Bounds.Width, Screen.PrimaryScreen.Bounds.Height);
            SetDefaultTitle();
            label1.Text = Message;
            if (Size.Width >= Screen.PrimaryScreen.Bounds.Width - 50)
            {
                Location = new Point(0, Location.Y);
            }

            if (DelayTime > 0)
            {
                ReduceDelayTime();
                timer1.Enabled = true;
                timer1.Start();
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (DelayTime == 0)
            {
                timer1.Enabled = false;
                timer1.Stop();
                SetDefaultTitle();
                MinimizeBox = true;
                return;
            }

            ReduceDelayTime();
        }

        private void ReduceDelayTime()
        {
            MinimizeBox = false;
            Text = $@"来自{TeacherName}老师的消息 {DelayTime}";
            DelayTime--;
        }

        private void SetDefaultTitle()
        {
            Text = $@"来自{TeacherName}老师的消息";
        }

        private void Form2_FormClosing(object sender, FormClosingEventArgs e)
        {
            e.Cancel = DelayTime > 0;
        }
    }
}