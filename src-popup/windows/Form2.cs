using System;
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
        public string Title;
        public string Message;
        public uint CloseDelay;
        public uint FontSize;

        public Form2(string title, string message, uint closeDelay,uint fontSize)
        {
            Icon = Properties.Resources.pigeon_logo;

            Title = title;
            Message = message;
            CloseDelay = closeDelay;
            FontSize = fontSize;
            InitializeComponent();
        }

        private void Form2_Load(object sender, EventArgs e)
        {
            label1.Font = new Font("Microsoft YaHei", FontSize);
            label1.MaximumSize = new Size(Screen.PrimaryScreen.Bounds.Width, 0);
            SetDefaultTitle();
            label1.Text = Message;
            if (Size.Width >= Screen.PrimaryScreen.Bounds.Width - 50)
            {
                Location = new Point(0, Location.Y);
            }

            if (CloseDelay > 0)
            {
                ReduceDelayTime();
                timer1.Enabled = true;
                timer1.Start();
            }
        }

        private void timer1_Tick(object sender, EventArgs e)
        {
            if (CloseDelay == 0)
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
            Text = $@"{Title} {CloseDelay}";
            CloseDelay--;
        }

        private void SetDefaultTitle()
        {
            Text = Title;
        }

        private void Form2_FormClosing(object sender, FormClosingEventArgs e)
        {
            e.Cancel = CloseDelay > 0;
        }
    }
}