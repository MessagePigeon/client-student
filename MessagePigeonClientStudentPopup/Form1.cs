using System;
using System.CodeDom;
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
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
        }

        private void button1_Click(object sender, EventArgs e)
        {
            if (uint.TryParse(delayTimeInput.Text, out uint delayTime))
            {
                var popupForm = new Form2(teacherNameInput.Text, messageInput.Text, delayTime);
                popupForm.Show();
            }
            else
            {
                MessageBox.Show(@"时间非数字", @"时间错误", MessageBoxButtons.OK, MessageBoxIcon.Error);
            }
        }
    }
}