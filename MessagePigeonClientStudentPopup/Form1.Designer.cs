namespace MessagePigeonClientStudentPopup
{
    partial class Form1
    {
        /// <summary>
        /// 必需的设计器变量。
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// 清理所有正在使用的资源。
        /// </summary>
        /// <param name="disposing">如果应释放托管资源，为 true；否则为 false。</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows 窗体设计器生成的代码

        /// <summary>
        /// 设计器支持所需的方法 - 不要修改
        /// 使用代码编辑器修改此方法的内容。
        /// </summary>
        private void InitializeComponent()
        {
            this.button1 = new System.Windows.Forms.Button();
            this.label1 = new System.Windows.Forms.Label();
            this.delayTimeInput = new System.Windows.Forms.TextBox();
            this.messageInput = new System.Windows.Forms.TextBox();
            this.teacherNameInput = new System.Windows.Forms.TextBox();
            this.label2 = new System.Windows.Forms.Label();
            this.groupBox1 = new System.Windows.Forms.GroupBox();
            this.messageIdInput = new System.Windows.Forms.TextBox();
            this.tokenInput = new System.Windows.Forms.TextBox();
            this.baseUrlInput = new System.Windows.Forms.TextBox();
            this.closeRequestCheckBox = new System.Windows.Forms.CheckBox();
            this.label5 = new System.Windows.Forms.Label();
            this.label4 = new System.Windows.Forms.Label();
            this.label3 = new System.Windows.Forms.Label();
            this.groupBox1.SuspendLayout();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Font = new System.Drawing.Font("微软雅黑", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.button1.Location = new System.Drawing.Point(220, 229);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(72, 26);
            this.button1.TabIndex = 3;
            this.button1.Text = "弹出";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // label1
            // 
            this.label1.AutoSize = true;
            this.label1.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label1.Location = new System.Drawing.Point(19, 232);
            this.label1.Name = "label1";
            this.label1.Size = new System.Drawing.Size(128, 20);
            this.label1.TabIndex = 1;
            this.label1.Text = "强制显示时间 (秒) :";
            // 
            // delayTimeInput
            // 
            this.delayTimeInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.delayTimeInput.Location = new System.Drawing.Point(153, 229);
            this.delayTimeInput.MaxLength = 3;
            this.delayTimeInput.Name = "delayTimeInput";
            this.delayTimeInput.Size = new System.Drawing.Size(61, 26);
            this.delayTimeInput.TabIndex = 2;
            this.delayTimeInput.Text = "0";
            // 
            // messageInput
            // 
            this.messageInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.messageInput.Location = new System.Drawing.Point(18, 47);
            this.messageInput.MaxLength = 99999;
            this.messageInput.Multiline = true;
            this.messageInput.Name = "messageInput";
            this.messageInput.ScrollBars = System.Windows.Forms.ScrollBars.Vertical;
            this.messageInput.Size = new System.Drawing.Size(274, 175);
            this.messageInput.TabIndex = 1;
            this.messageInput.Text = "测试消息";
            // 
            // teacherNameInput
            // 
            this.teacherNameInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.teacherNameInput.Location = new System.Drawing.Point(97, 13);
            this.teacherNameInput.MaxLength = 20;
            this.teacherNameInput.Name = "teacherNameInput";
            this.teacherNameInput.Size = new System.Drawing.Size(195, 26);
            this.teacherNameInput.TabIndex = 0;
            this.teacherNameInput.Text = "测试";
            // 
            // label2
            // 
            this.label2.AutoSize = true;
            this.label2.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label2.Location = new System.Drawing.Point(19, 16);
            this.label2.Name = "label2";
            this.label2.Size = new System.Drawing.Size(72, 20);
            this.label2.TabIndex = 4;
            this.label2.Text = "教师姓名 :";
            // 
            // groupBox1
            // 
            this.groupBox1.Controls.Add(this.messageIdInput);
            this.groupBox1.Controls.Add(this.tokenInput);
            this.groupBox1.Controls.Add(this.baseUrlInput);
            this.groupBox1.Controls.Add(this.closeRequestCheckBox);
            this.groupBox1.Controls.Add(this.label5);
            this.groupBox1.Controls.Add(this.label4);
            this.groupBox1.Controls.Add(this.label3);
            this.groupBox1.Font = new System.Drawing.Font("微软雅黑", 9F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.groupBox1.Location = new System.Drawing.Point(298, 13);
            this.groupBox1.Name = "groupBox1";
            this.groupBox1.Size = new System.Drawing.Size(312, 242);
            this.groupBox1.TabIndex = 5;
            this.groupBox1.TabStop = false;
            this.groupBox1.Text = "关闭请求";
            // 
            // messageIdInput
            // 
            this.messageIdInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.messageIdInput.Location = new System.Drawing.Point(88, 182);
            this.messageIdInput.MaxLength = 10;
            this.messageIdInput.Name = "messageIdInput";
            this.messageIdInput.Size = new System.Drawing.Size(195, 26);
            this.messageIdInput.TabIndex = 8;
            // 
            // tokenInput
            // 
            this.tokenInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.tokenInput.Location = new System.Drawing.Point(88, 134);
            this.tokenInput.MaxLength = 1024;
            this.tokenInput.Name = "tokenInput";
            this.tokenInput.Size = new System.Drawing.Size(195, 26);
            this.tokenInput.TabIndex = 7;
            // 
            // baseUrlInput
            // 
            this.baseUrlInput.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.baseUrlInput.Location = new System.Drawing.Point(88, 86);
            this.baseUrlInput.MaxLength = 100;
            this.baseUrlInput.Name = "baseUrlInput";
            this.baseUrlInput.Size = new System.Drawing.Size(195, 26);
            this.baseUrlInput.TabIndex = 6;
            this.baseUrlInput.Text = "http://127.0.0.1:3030";
            // 
            // closeRequestCheckBox
            // 
            this.closeRequestCheckBox.AutoSize = true;
            this.closeRequestCheckBox.Checked = true;
            this.closeRequestCheckBox.CheckState = System.Windows.Forms.CheckState.Checked;
            this.closeRequestCheckBox.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.closeRequestCheckBox.Location = new System.Drawing.Point(15, 40);
            this.closeRequestCheckBox.Name = "closeRequestCheckBox";
            this.closeRequestCheckBox.Size = new System.Drawing.Size(112, 24);
            this.closeRequestCheckBox.TabIndex = 5;
            this.closeRequestCheckBox.Text = "发送关闭请求";
            this.closeRequestCheckBox.UseVisualStyleBackColor = true;
            this.closeRequestCheckBox.CheckedChanged += new System.EventHandler(this.closeRequestCheckBox_CheckedChanged);
            // 
            // label5
            // 
            this.label5.AutoSize = true;
            this.label5.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label5.Location = new System.Drawing.Point(11, 185);
            this.label5.Name = "label5";
            this.label5.Size = new System.Drawing.Size(59, 20);
            this.label5.TabIndex = 4;
            this.label5.Text = "消息ID :";
            // 
            // label4
            // 
            this.label4.AutoSize = true;
            this.label4.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label4.Location = new System.Drawing.Point(11, 137);
            this.label4.Name = "label4";
            this.label4.Size = new System.Drawing.Size(58, 20);
            this.label4.TabIndex = 3;
            this.label4.Text = "Token :";
            // 
            // label3
            // 
            this.label3.AutoSize = true;
            this.label3.Font = new System.Drawing.Font("微软雅黑", 10.5F, System.Drawing.FontStyle.Regular, System.Drawing.GraphicsUnit.Point, ((byte)(134)));
            this.label3.Location = new System.Drawing.Point(11, 89);
            this.label3.Name = "label3";
            this.label3.Size = new System.Drawing.Size(72, 20);
            this.label3.TabIndex = 2;
            this.label3.Text = "后端地址 :";
            // 
            // Form1
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(622, 269);
            this.Controls.Add(this.groupBox1);
            this.Controls.Add(this.teacherNameInput);
            this.Controls.Add(this.label2);
            this.Controls.Add(this.messageInput);
            this.Controls.Add(this.delayTimeInput);
            this.Controls.Add(this.label1);
            this.Controls.Add(this.button1);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedSingle;
            this.Name = "Form1";
            this.Text = "飞鸽传书 - 弹窗调试";
            this.groupBox1.ResumeLayout(false);
            this.groupBox1.PerformLayout();
            this.ResumeLayout(false);
            this.PerformLayout();

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private System.Windows.Forms.Label label1;
        private System.Windows.Forms.TextBox delayTimeInput;
        private System.Windows.Forms.TextBox messageInput;
        private System.Windows.Forms.TextBox teacherNameInput;
        private System.Windows.Forms.Label label2;
        private System.Windows.Forms.GroupBox groupBox1;
        private System.Windows.Forms.TextBox messageIdInput;
        private System.Windows.Forms.TextBox tokenInput;
        private System.Windows.Forms.TextBox baseUrlInput;
        private System.Windows.Forms.CheckBox closeRequestCheckBox;
        private System.Windows.Forms.Label label5;
        private System.Windows.Forms.Label label4;
        private System.Windows.Forms.Label label3;
    }
}

